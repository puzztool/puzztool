import type { ResistorColor as Color } from "puzzle-lib";
import {
  getResistorDisplayValue,
  getResistorValue as computeResistorValue,
  hasResistorTolerance,
  hasResistorValue,
  INVALID_RESISTOR,
  RESISTOR_COLOR_TABLE,
} from "puzzle-lib";
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

function getResistorValueDisplay(bands: (Color | undefined)[]) {
  // The last band is a tolerance so we need to calculate the value without it.
  const colors = bands.slice(0, -1).filter((band) => !!band) as Color[];

  const value = computeResistorValue(colors);
  if (value === INVALID_RESISTOR) {
    return "Invalid Resistor Colors";
  } else {
    return `${getResistorDisplayValue(value)} \u2126 \u00b1 ${
      bands[bands.length - 1]!.toleranceInPercent
    }%`;
  }
}

function ResistorInputInner(props: Props) {
  function onColorChange(bandIndex: number, color?: Color) {
    const colorIndex = color
      ? RESISTOR_COLOR_TABLE.indexOf(
          color as (typeof RESISTOR_COLOR_TABLE)[number],
        )
      : -1;
    props.setBand({
      bandIndex,
      colorIndex,
    });
  }

  const bands = props.bands.map((value) => RESISTOR_COLOR_TABLE[value]);
  const colorsWithValue = RESISTOR_COLOR_TABLE.filter((color) =>
    hasResistorValue(color),
  );
  const colorsWithTolerance = RESISTOR_COLOR_TABLE.filter((color) =>
    hasResistorTolerance(color),
  );

  const noneColor: Color = { name: "None", colorCode: "", multiplier: 0 };

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
                  colors={[...colorsWithValue]}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={1}
                  title="Second Band"
                  colors={[...colorsWithValue]}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={2}
                  title="Third Band"
                  colors={[...RESISTOR_COLOR_TABLE]}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={3}
                  title="Fourth Band"
                  colors={[noneColor, ...RESISTOR_COLOR_TABLE]}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={4}
                  title="Tolerance Band"
                  colors={[...colorsWithTolerance]}
                  onChange={onColorChange}
                />
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </Card.Body>
      </Card>
      <Card className={styles.output}>
        <Card.Header>Output</Card.Header>
        <Card.Body>{getResistorValueDisplay(bands)}</Card.Body>
      </Card>
    </div>
  );
}

const ResistorInput = connector(ResistorInputInner);
export default ResistorInput;
