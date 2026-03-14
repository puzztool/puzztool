import { lettersToPhone } from "puzzle-lib";
import { Button, Card, Group, Stack, Text, TextInput } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import { setLetters, clear } from "./phoneSlice";
import styles from "./PhoneStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  letters: state.encoding.phone.letters,
});
const mapDispatchToProps = {
  setLetters,
  clear,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function PhoneReverseInner({ letters, setLetters, clear: clearFn }: Props) {
  const digits = letters ? lettersToPhone(letters) : "";

  return (
    <Stack className={styles.container} gap="sm">
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Input</Text>
        </Card.Section>
        <Stack gap="sm">
          <TextInput
            aria-label="Text input"
            placeholder="Enter text (e.g., HELLO WORLD)"
            value={letters}
            onChange={(e) => setLetters(e.currentTarget.value)}
          />
          <Group gap="xs">
            <Button onClick={() => clearFn()} color="red" size="sm">
              Clear
            </Button>
          </Group>
        </Stack>
      </Card>
      {digits && (
        <Card withBorder>
          <Card.Section withBorder inheritPadding py="xs">
            <Text fw={500}>Digits</Text>
          </Card.Section>
          <Text className={styles.topPhrase}>{digits}</Text>
        </Card>
      )}
    </Stack>
  );
}

const PhoneReverse = connector(PhoneReverseInner);
export default PhoneReverse;
