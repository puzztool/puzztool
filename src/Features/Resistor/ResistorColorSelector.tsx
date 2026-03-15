import type { ResistorColor as Color } from "puzzle-lib/resistor";
import { Button, Menu } from "@mantine/core";

interface ColorSelectorProps {
  colors: Color[];
  index: number;
  title: string;
  onChange?: (index: number, color?: Color) => void;
}

function ResistorColorSelector(props: ColorSelectorProps) {
  function onSelect(color: Color) {
    const handler = props.onChange;
    if (handler) {
      handler(props.index, color);
    }
  }

  return (
    <Menu>
      <Menu.Target>
        <Button>{props.title}</Button>
      </Menu.Target>
      <Menu.Dropdown>
        {props.colors.map((color: Color, itemIndex: number) => {
          return (
            <Menu.Item
              key={`${props.index}-${itemIndex}`}
              onClick={() => onSelect(color)}
            >
              {color.name}
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}

export default ResistorColorSelector;
