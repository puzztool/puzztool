import { Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { type RouteChild, getCategories } from "../../Data/RouteData";
import styles from "./index.module.scss";

function ToolCard({ tool, baseUrl }: { tool: RouteChild; baseUrl: string }) {
  const Icon = tool.icon;

  return (
    <Card
      component={Link}
      to={baseUrl + tool.url}
      className={styles.card}
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
    >
      <Group gap="sm">
        {Icon && <Icon size={32} />}
        <Text fw={500}>{tool.name}</Text>
      </Group>
      <Text size="sm" c="dimmed" mt={4}>
        {tool.description}
      </Text>
    </Card>
  );
}

function Home() {
  return (
    <Stack className={styles.container} gap="xl">
      {getCategories().map((category) => {
        return (
          <div key={category.name}>
            <Title order={2} mb={4}>
              {category.name}
            </Title>
            <Text c="dimmed" mb="md">
              {category.description}
            </Text>
            <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
              {category.children.map((child) => (
                <ToolCard
                  key={child.name}
                  tool={child}
                  baseUrl={category.rootUrl}
                />
              ))}
            </SimpleGrid>
          </div>
        );
      })}
    </Stack>
  );
}

export default Home;
