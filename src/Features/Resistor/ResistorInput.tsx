import { ResistorColorEntry as Color, Resistor } from "puzzle-lib";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../Store/rootReducer";
import ResistorColorSelector from "./ResistorColorSelector";
import { setBand } from "./resistorSlice";
import ResistorPicture from "./ResistorPicture";
import styles from "./ResistorInput.module.scss";

const mapStateToProps = (state: RootState) => ({
  bands: state.resistor.bands,
});
const mapDispatchToProps = {
  setBand,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

function getResistorValue(bands: (Color | undefined)[]) {
  // The last band is a tolerance so we need to calculate the value without it.
  const colors = bands.slice(0, -1).filter((band) => !!band) as Color[];

  const value = Resistor.getValue(colors);
  if (value === Resistor.INVALID_RESISTOR) {
    return "Invalid Resistor Colors";
  } else {
    return `${Resistor.getDisplayValue(value)} \u2126 \u00b1 ${
      bands[bands.length - 1]!.toleranceInPercent
    }%`;
  }
}

function ResistorInputInner(props: Props) {
  function onColorChange(bandIndex: number, color?: Color) {
    const colorIndex = color ? Resistor.colorTable.indexOf(color) : -1;
    props.setBand({
      bandIndex,
      colorIndex,
    });
  }

  const bands = props.bands.map((value) => Resistor.colorTable[value]);
  const colorsWithValue = Resistor.colorTable.filter((color) =>
    color.hasValue(),
  );
  const colorsWithTolerance = Resistor.colorTable.filter((color) =>
    color.hasTolerance(),
  );

  return (
    <div className={styles.container}>
      <Card className={styles.input}>
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <div className={styles.display}>
            <ResistorPicture bands={bands} />
          </div>
          <div>
            <ButtonToolbar>
              <ButtonGroup>
                <ResistorColorSelector
                  index={0}
                  title="First Band"
                  colors={colorsWithValue}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={1}
                  title="Second Band"
                  colors={colorsWithValue}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={2}
                  title="Third Band"
                  colors={Resistor.colorTable}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={3}
                  title="Fourth Band"
                  colors={[new Color("None", "", 0), ...Resistor.colorTable]}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={4}
                  title="Tolerance Band"
                  colors={colorsWithTolerance}
                  onChange={onColorChange}
                />
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </Card.Body>
      </Card>
      <Card className={styles.output}>
        <Card.Header>Output</Card.Header>
        <Card.Body>{getResistorValue(bands)}</Card.Body>
      </Card>
    </div>
  );
}

const ResistorInput = connector(ResistorInputInner);
export default ResistorInput;
