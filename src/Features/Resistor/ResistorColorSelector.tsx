import { ResistorColorEntry as Color, Resistor } from "puzzle-lib";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

interface ColorSelectorProps {
  colors: Color[];
  index: number;
  title: string;
  onChange?: (index: number, color?: Color) => void;
}

function colorByName(name: string | null) {
  for (const color of Resistor.colorTable) {
    if (name === color.name) {
      return color;
    }
  }

  return undefined;
}

function ResistorColorSelector(props: ColorSelectorProps) {
  function onSelect(eventKey: string | null) {
    const handler = props.onChange;
    if (handler) {
      handler(props.index, colorByName(eventKey));
    }
  }

  return (
    <DropdownButton
      title={props.title}
      key={props.index}
      id={`color-select-${props.index}`}
      onSelect={onSelect}
    >
      {props.colors.map((color: Color, itemIndex: number) => {
        return (
          <Dropdown.Item
            key={`${props.index}-${itemIndex}`}
            eventKey={color.name}
          >
            {color.name}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}

export default ResistorColorSelector;
