import { ChangeEvent, ReactNode } from "react";
import {
  Button,
  Card,
  Group,
  SegmentedControl,
  Stack,
  TextInput,
  Text,
} from "@mantine/core";
import { useFocusInput } from "../../../Hooks/FocusInput";
import { Conversion } from "./Conversion";
import styles from "./index.module.scss";

interface Props {
  encryptFn: (text: string, key: string) => string;
  decryptFn: (text: string, key: string) => string;
  conversion: Conversion;
  id: string;
  secret: string;
  onClear: () => void;
  onConversionChange: (value: Conversion) => void;
  onSecretChange: (value: string) => void;
  onTextChange: (value: string) => void;
  prompt: ReactNode;
  text: string;
}

function KeyedCipherStream(props: Props) {
  const inputRef = useFocusInput();

  function onClearClick() {
    props.onClear();
  }

  function onKeyChange(event: ChangeEvent<HTMLInputElement>) {
    props.onSecretChange(event.currentTarget.value);
  }

  function onTextChange(event: ChangeEvent<HTMLInputElement>) {
    props.onTextChange(event.currentTarget.value);
  }

  function calculateOutput() {
    switch (props.conversion) {
      case Conversion.encrypt:
        return props.encryptFn(props.text, props.secret);

      case Conversion.decrypt:
        return props.decryptFn(props.text, props.secret);

      default:
        throw new Error("Invalid conversion type");
    }
  }

  return (
    <Stack className={styles.container} gap="sm">
      <Card className={styles.input} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>{props.prompt}</Text>
        </Card.Section>
        <Stack gap="sm">
          <TextInput
            onChange={onTextChange}
            placeholder="Text"
            ref={inputRef}
            value={props.text}
          />
          <TextInput
            onChange={onKeyChange}
            placeholder="Key"
            value={props.secret}
          />
          <Group gap="xs">
            <SegmentedControl
              data={[
                { label: "Encrypt", value: String(Conversion.encrypt) },
                { label: "Decrypt", value: String(Conversion.decrypt) },
              ]}
              value={String(props.conversion)}
              onChange={(value) =>
                props.onConversionChange(Number(value) as Conversion)
              }
            />
            <Button onClick={onClearClick} color="red">
              Clear
            </Button>
          </Group>
        </Stack>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Output</Text>
        </Card.Section>
        <pre>{calculateOutput() || " "}</pre>
      </Card>
    </Stack>
  );
}

export default KeyedCipherStream;
