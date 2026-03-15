import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Menu,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMessageReport, IconSettings } from "@tabler/icons-react";
import { Link, useLocation, useMatch } from "react-router-dom";
import { getCategories, RouteCategory } from "../../Data/RouteData";
import PuzztoolBannerWhite from "../../Images/puzztool_banner_white.svg";
import styles from "./index.module.scss";

function NavCategoryMenu({ category }: { category: RouteCategory }) {
  const routeMatch = useMatch(category.rootUrl + "/*");
  return (
    <Menu trigger="click-hover" shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton
          className={styles.navLink}
          data-active={!!routeMatch || undefined}
        >
          {category.name}
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {category.children.map((child) => (
          <Menu.Item
            key={child.name}
            component={Link}
            to={category.rootUrl + child.url}
            leftSection={child.icon && <child.icon size={16} />}
          >
            {child.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

function MobileNavCategory({
  category,
  onClose,
}: {
  category: RouteCategory;
  onClose: () => void;
}) {
  const location = useLocation();
  return (
    <div className={styles.mobileCategory}>
      <div className={styles.mobileCategoryTitle}>{category.name}</div>
      {category.children.map((child) => {
        const to = category.rootUrl + child.url;
        const isActive = location.pathname === to;
        return (
          <UnstyledButton
            key={child.name}
            className={styles.mobileLink}
            data-active={isActive || undefined}
            component={Link}
            to={to}
            onClick={onClose}
          >
            {child.icon && <child.icon size={16} />}
            {child.name}
          </UnstyledButton>
        );
      })}
    </div>
  );
}

function AppNav({ onSettingsOpen }: { onSettingsOpen: () => void }) {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <AppShell.Header className={styles.header}>
      <Group h="100%" px="md" justify="space-between">
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color="white"
            aria-label="Toggle navigation menu"
          />
          <Link to="/" onClick={close}>
            <img
              className={styles.logo}
              src={PuzztoolBannerWhite}
              alt="PuzzTool logo"
            />
          </Link>
          <Group gap="xs" visibleFrom="sm">
            {getCategories().map((category) => (
              <NavCategoryMenu key={category.name} category={category} />
            ))}
          </Group>
        </Group>
        <Group gap="xs">
          <Tooltip label="Feedback">
            <ActionIcon
              variant="subtle"
              color="gray"
              component="a"
              href="https://github.com/puzztool/puzztool/issues/new"
              rel="noreferrer"
              target="_blank"
              aria-label="Feedback"
            >
              <IconMessageReport size={24} color="white" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Settings">
            <ActionIcon
              variant="subtle"
              color="gray"
              onClick={onSettingsOpen}
              aria-label="Settings"
            >
              <IconSettings size={24} color="white" />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>

      {opened && (
        <>
          <div
            className={styles.overlay}
            role="button"
            tabIndex={0}
            aria-label="Close navigation menu"
            onClick={close}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" ||
                event.key === " " ||
                event.key === "Escape"
              ) {
                event.preventDefault();
                close();
              }
            }}
          />
          <AppShell.Navbar className={styles.mobileNav} hiddenFrom="sm">
            {getCategories().map((category) => (
              <MobileNavCategory
                key={category.name}
                category={category}
                onClose={close}
              />
            ))}
          </AppShell.Navbar>
        </>
      )}
    </AppShell.Header>
  );
}

export default AppNav;
