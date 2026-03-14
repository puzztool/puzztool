import {
  Anchor,
  Divider,
  Drawer,
  SegmentedControl,
  Stack,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import ClearButton from "../../Common/ClearButton";
import { clearLocalStorage } from "../../Data/LocalStorage";
import PuzztoolBannerDark from "../../Images/puzztool_banner_dark.svg";
import PuzztoolBannerWhite from "../../Images/puzztool_banner_white.svg";
import styles from "./index.module.scss";

interface Props {
  opened: boolean;
  onClose: () => void;
}

function SettingsDrawer(props: Props) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  function onClearClick() {
    clearLocalStorage();
  }

  return (
    <Drawer
      opened={props.opened}
      onClose={props.onClose}
      title="Settings"
      position="right"
      size="sm"
    >
      <Stack gap="lg">
        <Stack gap="xs">
          <Text fw={500}>Appearance</Text>
          <Text size="sm">Color scheme</Text>
          <SegmentedControl
            value={colorScheme}
            onChange={(value) =>
              setColorScheme(value as "light" | "dark" | "auto")
            }
            data={[
              { label: "Light", value: "light" },
              { label: "Dark", value: "dark" },
              { label: "Auto", value: "auto" },
            ]}
          />
        </Stack>

        <Divider />

        <Stack gap="xs">
          <Text fw={500}>Saved state</Text>
          <Text size="sm">
            The most recent inputs to each tool are stored in the browser's
            local storage. In the event that state becomes corrupted it can be
            cleared using the button below.
          </Text>
          <ClearButton
            onClear={onClearClick}
            label="Clear saved state"
            confirmMessage="This will clear all saved tool inputs from your browser. This action cannot be undone."
            buttonProps={{ size: "sm" }}
          />
        </Stack>

        <Divider />

        <Stack gap="xs">
          <Text fw={500}>About</Text>
          <img
            className={styles.logo}
            src={
              computedColorScheme === "dark"
                ? PuzztoolBannerWhite
                : PuzztoolBannerDark
            }
            alt="PuzzTool logo"
          />
          <Text size="sm">
            Version: {__APP_VERSION__} ({__COMMIT_HASH__})
          </Text>
          <Anchor
            href="https://github.com/puzztool/puzztool/"
            rel="noreferrer"
            target="_blank"
            size="sm"
          >
            Project page
          </Anchor>
        </Stack>

        <Divider />

        <Stack gap="xs">
          <Text fw={500}>Credits</Text>
          <Text size="sm">
            Phone to Text bigram frequency data derived from Peter Norvig's
            analysis of the{" "}
            <Anchor
              href="http://norvig.com/ngrams/"
              rel="noreferrer"
              target="_blank"
              size="sm"
            >
              Google Web Trillion Word Corpus
            </Anchor>{" "}
            (public domain).
          </Text>
        </Stack>
      </Stack>
    </Drawer>
  );
}

export default SettingsDrawer;
