import { useState } from "react";
import { Button, type ButtonProps, Group, Modal, Text } from "@mantine/core";

interface Props {
  onClear: () => void;
  label?: string;
  confirmMessage?: string;
  buttonProps?: Omit<ButtonProps, "onClick" | "color">;
}

function ClearButton({
  onClear,
  label = "Clear",
  confirmMessage = "This will clear your current inputs. This action cannot be undone.",
  buttonProps,
}: Props) {
  const [opened, setOpened] = useState(false);

  function onConfirm() {
    onClear();
    setOpened(false);
  }

  return (
    <>
      <Button onClick={() => setOpened(true)} color="red" {...buttonProps}>
        {label}
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Confirm clear"
        centered
      >
        <Text size="sm" mb="lg">
          {confirmMessage}
        </Text>
        <Group justify="flex-end">
          <Button variant="default" onClick={() => setOpened(false)}>
            Cancel
          </Button>
          <Button color="red" onClick={onConfirm}>
            {label}
          </Button>
        </Group>
      </Modal>
    </>
  );
}

export default ClearButton;
