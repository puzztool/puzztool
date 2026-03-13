import { ChangeEvent } from "react";
import { Button, Card, Group, Stack, TextInput, Text } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import { useFocusInput } from "../../../Hooks/FocusInput";
import { RootState } from "../../../Store/rootReducer";
import { clear, setText } from "./base64Slice";
import styles from "./Base64Stream.module.scss";

const mapStateToProps = (state: RootState) => ({
  text: state.encoding.base64.text,
});
const mapDispatchToProps = {
  clear,
  setText,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {
  prompt: string;
}

function textToBytes(text: string): string {
  return new TextEncoder()
    .encode(text)
    .reduce((acc, byte) => acc + String.fromCodePoint(byte), "");
}

function encodeStandard(text: string): string {
  try {
    return btoa(textToBytes(text));
  } catch {
    return "(invalid input)";
  }
}

function encodeUrlSafe(text: string): string {
  try {
    return btoa(textToBytes(text)).replace(/\+/g, "-").replace(/\//g, "_");
  } catch {
    return "(invalid input)";
  }
}

function encodeUnpadded(text: string): string {
  try {
    return btoa(textToBytes(text)).replace(/=+$/, "");
  } catch {
    return "(invalid input)";
  }
}

function decode(text: string): string {
  try {
    // Normalize URL-safe characters and restore padding
    const normalized = text.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (c) => c.codePointAt(0)!);
    return new TextDecoder().decode(bytes);
  } catch {
    return "(invalid Base64)";
  }
}

function Base64StreamInner(props: Props) {
  const inputRef = useFocusInput();

  function onClearClick() {
    props.clear();
  }

  function onTextChanged(event: ChangeEvent<HTMLInputElement>) {
    props.setText(event.currentTarget.value);
  }

  return (
    <Stack className={styles.container} gap="sm">
      <Card className={styles.input} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>{props.prompt}</Text>
        </Card.Section>
        <Stack gap="sm">
          <TextInput
            onChange={onTextChanged}
            placeholder="Text"
            ref={inputRef}
            value={props.text}
          />
          <Group gap="xs">
            <Button onClick={onClearClick} color="red">
              Clear
            </Button>
          </Group>
        </Stack>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Decoded</Text>
        </Card.Section>
        <pre>{decode(props.text) || " "}</pre>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Encoded (Standard)</Text>
        </Card.Section>
        <pre>{encodeStandard(props.text) || " "}</pre>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Encoded (URL-safe)</Text>
        </Card.Section>
        <pre>{encodeUrlSafe(props.text) || " "}</pre>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Encoded (Unpadded)</Text>
        </Card.Section>
        <pre>{encodeUnpadded(props.text) || " "}</pre>
      </Card>
    </Stack>
  );
}

const Base64Stream = connector(Base64StreamInner);
export default Base64Stream;
