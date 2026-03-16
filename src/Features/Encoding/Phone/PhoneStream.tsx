import { phoneToText, phoneToLetters, PhoneResult } from "puzzle-lib/phone";
import { Card, Group, Stack, Table, Text, TextInput } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import { setDigits, clearDigits } from "./phoneSlice";
import { splitWords, filterDigitInput } from "./phoneUtils";
import ClearButton from "../../../Common/ClearButton";
import styles from "./PhoneStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  digits: state.encoding.phone.digits,
});
const mapDispatchToProps = {
  setDigits,
  clearDigits,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

interface WordResult {
  word: string;
  results: PhoneResult[];
}

function PhoneStreamInner({ digits, setDigits, clearDigits }: Props) {
  function onDigitsChange(value: string) {
    setDigits(filterDigitInput(value));
  }

  const words = splitWords(digits);
  const wordResults: WordResult[] = words.map((w) => ({
    word: w,
    results: phoneToText(w, 20),
  }));

  // Combined top phrase from best candidate of each word
  const topPhrase = wordResults
    .map((wr) => (wr.results.length > 0 ? wr.results[0].text : "?"))
    .join(" ")
    .toUpperCase();

  // Build the keypad legend
  const keypadEntries: { digit: string; letters: string }[] = [];
  for (let d = 0; d <= 9; d++) {
    const letters = phoneToLetters(String(d));
    if (letters.length > 0) {
      keypadEntries.push({
        digit: String(d),
        letters: letters.map((l) => l.toUpperCase()).join(" "),
      });
    }
  }

  return (
    <Stack className={styles.container} gap="sm">
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Input</Text>
        </Card.Section>
        <Stack gap="sm">
          <TextInput
            aria-label="Phone digits"
            placeholder="Enter digits (e.g., 43556 96753)"
            value={digits}
            onChange={(e) => onDigitsChange(e.currentTarget.value)}
          />
          <Group gap="xs">
            <ClearButton onClear={() => clearDigits()} />
          </Group>
          <div className={styles.keypad}>
            {keypadEntries.map(({ digit, letters }) => (
              <Text key={digit} size="xs" c="dimmed">
                <strong>{digit}</strong>: {letters}
              </Text>
            ))}
            <Text size="xs" c="dimmed">
              <strong>0</strong>: space
            </Text>
          </div>
        </Stack>
      </Card>
      {wordResults.length > 0 && (
        <>
          {wordResults.length > 1 && (
            <Card withBorder>
              <Card.Section withBorder inheritPadding py="xs">
                <Text fw={500}>Best Guess</Text>
              </Card.Section>
              <Text className={styles.topPhrase}>{topPhrase}</Text>
            </Card>
          )}
          {wordResults.map((wr, wi) => (
            <Card key={wi} withBorder>
              <Card.Section withBorder inheritPadding py="xs">
                <Text fw={500}>
                  {wordResults.length > 1
                    ? `Word ${wi + 1}: ${wr.word}`
                    : `Results`}{" "}
                  ({wr.results.length} candidate
                  {wr.results.length !== 1 && "s"})
                </Text>
              </Card.Section>
              <Table highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>#</Table.Th>
                    <Table.Th>Text</Table.Th>
                    <Table.Th>Score</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {wr.results.map((result, i) => (
                    <Table.Tr key={result.text}>
                      <Table.Td>{i + 1}</Table.Td>
                      <Table.Td className={styles.resultText}>
                        {result.text.toUpperCase()}
                      </Table.Td>
                      <Table.Td>
                        <Text size="xs" c="dimmed">
                          {result.score.toFixed(2)}
                        </Text>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          ))}
        </>
      )}
    </Stack>
  );
}

const PhoneStream = connector(PhoneStreamInner);
export default PhoneStream;
