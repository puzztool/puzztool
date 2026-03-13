import { ChangeEvent } from "react";
import {
  Alert,
  Card,
  Checkbox,
  Grid,
  Stack,
  Textarea,
  Text,
} from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import { useFocusInput } from "../../Hooks/FocusInput";
import { RootState } from "../../Store/rootReducer";
import WordSearchOutput from "./WordSearchOutput";
import {
  setCanBend,
  setGrid,
  setShowUnused,
  setUseCardinals,
  setUseDiagonals,
  setWordList,
} from "./wordSearchSlice";
import styles from "./WordSearchComponent.module.scss";

const mapStateToProps = (state: RootState) => ({
  canBend: state.wordSearch.canBend,
  grid: state.wordSearch.grid,
  showUnused: state.wordSearch.showUnused,
  useCardinals: state.wordSearch.useCardinals,
  useDiagonals: state.wordSearch.useDiagonals,
  wordList: state.wordSearch.wordList,
});
const mapDispatchToProps = {
  setCanBend,
  setGrid,
  setShowUnused,
  setUseCardinals,
  setUseDiagonals,
  setWordList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

function WordSearchComponentInner(props: Props) {
  const inputRef = useFocusInput();

  function onGridTextChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    props.setGrid(event.currentTarget.value);
  }

  function onListTextChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    props.setWordList(event.currentTarget.value);
  }

  function onCardinalCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    props.setUseCardinals(event.currentTarget.checked);
  }

  function onDiagonalCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    props.setUseDiagonals(event.currentTarget.checked);
  }

  function onSetCanBendChange(event: ChangeEvent<HTMLInputElement>) {
    props.setCanBend(event.currentTarget.checked);
  }

  function renderEmptyDirection() {
    if (!props.useCardinals && !props.useDiagonals) {
      return (
        <Alert color="yellow">
          No directions are selected. No results will be shown.
        </Alert>
      );
    }
  }

  return (
    <div className={styles.container}>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card className={styles.listInput} withBorder>
            <Card.Section withBorder inheritPadding py="xs">
              <Text fw={500}>
                Enter the list of words to find, one word per line
              </Text>
            </Card.Section>
            <Stack gap="sm">
              <Textarea
                onChange={onListTextChanged}
                placeholder="Word List To Find"
                value={props.wordList}
              />
              {renderEmptyDirection()}
              <Checkbox
                checked={props.useDiagonals}
                id="WordSearchComponent-checkbox-diagonal"
                label="Use diagonal directions"
                onChange={onDiagonalCheckboxChange}
              />
              <Checkbox
                checked={props.useCardinals}
                id="WordSearchComponent-checkbox-cardinal"
                label="Use cardinal directions"
                onChange={onCardinalCheckboxChange}
              />
              <Checkbox
                checked={props.canBend}
                id="WordSearchComponent-checkbox-bend"
                label="Words can bend (may not be straight lines)"
                onChange={onSetCanBendChange}
              />
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card className={styles.gridInput} withBorder>
            <Card.Section withBorder inheritPadding py="xs">
              <Text fw={500}>
                Enter the word search grid, one row of letters per line
              </Text>
            </Card.Section>
            <Textarea
              onChange={onGridTextChanged}
              placeholder="Grid Text"
              ref={inputRef}
              spellCheck={false}
              value={props.grid}
              mt="md"
            />
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card withBorder>
            <Card.Section withBorder inheritPadding py="xs">
              <Text fw={500}>Output</Text>
            </Card.Section>
            <WordSearchOutput
              canBend={props.canBend}
              gridInputText={props.grid}
              onToggleShowUnused={(value) => props.setShowUnused(value)}
              showUnused={props.showUnused}
              useCardinals={props.useCardinals}
              useDiagonals={props.useDiagonals}
              wordListInputText={props.wordList}
            />
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

const WordSearchComponent = connector(WordSearchComponentInner);
export default WordSearchComponent;
