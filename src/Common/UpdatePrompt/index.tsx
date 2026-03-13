import { useRef, useEffect } from "react";
import { Alert, Button, Group } from "@mantine/core";
import { useRegisterSW } from "virtual:pwa-register/react";

function UpdatePrompt() {
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_swUrl, registration) {
      if (registration) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        // Check for updates every 8 hours
        intervalRef.current = setInterval(
          () => {
            registration.update();
          },
          8 * 60 * 60 * 1000,
        );
      }
    },
  });

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!needRefresh) {
    return null;
  }

  return (
    <Alert color="blue" title="Update available" withCloseButton={false}>
      <Group gap="sm" mt="xs">
        A new version of PuzzTool is available.
        <Button size="xs" onClick={() => updateServiceWorker(true)}>
          Refresh
        </Button>
      </Group>
    </Alert>
  );
}

export default UpdatePrompt;
