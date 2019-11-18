import React, { FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import { useFocusInput } from '../Hooks/FocusInput';
import { useLocalStorage } from '../Hooks/LocalStorage';
import WordSearchOutput from './WordSearchOutput';
import './WordSearchComponent.scss';

interface SavedState {
  gridInputText: string;
  wordListInputText: string;
  useDiagonals: boolean;
  useCardinals: boolean;
  canBend: boolean;
}

function WordSearchComponent() {
  const inputRef = useFocusInput();
  const [gridInputText, setGridInputText] = useState('');
  const [wordListInputText, setWordListInputText] = useState('');
  const [useCardinals, setUseCardinals] = useState(true);
  const [useDiagonals, setUseDiagonals] = useState(true);
  const [canBend, setCanBend] = useState(false);

  useLocalStorage<SavedState>(
    'WordSearchComponent',
    (savedState) => {
      if (savedState) {
        setGridInputText(savedState.gridInputText);
        setWordListInputText(savedState.wordListInputText);
        setUseCardinals(savedState.useCardinals);
        setUseDiagonals(savedState.useDiagonals);
        setCanBend(savedState.canBend);
      }
    },
    () => {
      return {
        gridInputText,
        wordListInputText,
        useCardinals,
        useDiagonals,
        canBend,
      };
    });

  function onGridTextChanged(event: FormEvent<HTMLTextAreaElement>) {
    const element = (event.target as HTMLInputElement);
    setGridInputText(element.value);
  }

  function onListTextChanged(event: FormEvent<HTMLTextAreaElement>) {
    const element = (event.target as HTMLInputElement);
    setWordListInputText(element.value);
  }

  function onCardinalCheckboxChange(event: FormEvent<HTMLInputElement>) {
    const element = (event.target as HTMLInputElement);
    setUseCardinals(element.checked);
  }

  function onDiagonalCheckboxChange(event: FormEvent<HTMLInputElement>) {
    const element = (event.target as HTMLInputElement);
    setUseDiagonals(element.checked);
  }

  function onSetCanBendChange(event: FormEvent<HTMLInputElement>) {
    const element = (event.target as HTMLInputElement);
    setCanBend(element.checked);
  }

  function renderEmptyDirection() {
    if (!useCardinals && !useDiagonals) {
      return (
        <Alert variant="warning">
          No directions are selected. No results will be shown.
        </Alert>
      );
    }
  }

  return (
    <div className="WordSearchComponent">
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col md={4}>
            <Card className="WordSearchComponent-ListInput">
              <Card.Header>
                Enter the list of words to find, one word per line
              </Card.Header>
              <Card.Body>
                <FormControl
                  as="textarea"
                  onChange={onListTextChanged}
                  placeholder="Word List To Find"
                  value={wordListInputText}
                />
                {renderEmptyDirection()}
                <FormCheck
                  checked={useDiagonals}
                  id="WordSearchComponent-checkbox-diagonal"
                  label="Use diagonal directions"
                  onChange={onDiagonalCheckboxChange}
                  type="checkbox"
                />
                <FormCheck
                  checked={useCardinals}
                  id="WordSearchComponent-checkbox-cardinal"
                  label="Use cardinal directions"
                  onChange={onCardinalCheckboxChange}
                  type="checkbox"
                />
                <FormCheck
                  checked={canBend}
                  id="WordSearchComponent-checkbox-bend"
                  label="Words can bend (may not be straight lines)"
                  onChange={onSetCanBendChange}
                  type="checkbox"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="WordSearchComponent-GridInput">
              <Card.Header>
                Enter the word search grid, one row of letters per line
              </Card.Header>
              <Card.Body>
                <FormControl
                  as="textarea"
                  onChange={onGridTextChanged}
                  placeholder="Grid Text"
                  ref={inputRef}
                  spellCheck={false}
                  value={gridInputText}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col md={12}>
            <Card className="WordSearchComponent-GridOutput">
              <Card.Header>Output</Card.Header>
              <Card.Body>
                <WordSearchOutput
                  gridInputText={gridInputText}
                  useCardinals={useCardinals}
                  useDiagonals={useDiagonals}
                  canBend={canBend}
                  wordListInputText={wordListInputText}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WordSearchComponent;
