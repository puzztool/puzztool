import { Anchor, Card, Grid, Group, Stack, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import PuzzToolPage from "../../Common/PuzzToolPage";

interface UsefulLink {
  name: string;
  url: string;
  description: string;
}

interface LinkCategory {
  name: string;
  links: UsefulLink[];
}

const linkCategories: LinkCategory[] = [
  {
    name: "Ciphers & Codes",
    links: [
      {
        name: "dCode",
        url: "https://www.dcode.fr/en",
        description:
          "Large collection of cipher and encoding tools including Vigenère, substitution, transposition, and many more.",
      },
      {
        name: "QuipQuid",
        url: "https://quipqiup.com/",
        description:
          "Automated cryptogram solver. Paste in a substitution cipher and it finds likely solutions.",
      },
      {
        name: "Rumkin Ciphers",
        url: "http://rumkin.com/tools/cipher/",
        description:
          "Collection of cipher tools including Affine, Playfair, Rail Fence, and other transposition ciphers.",
      },
    ],
  },
  {
    name: "Word Tools",
    links: [
      {
        name: "OneAcross",
        url: "https://www.oneacross.com/",
        description:
          "Crossword clue solver and pattern matcher. Search by clue text or letter pattern.",
      },
      {
        name: "Nutrimatic",
        url: "https://nutrimatic.org/",
        description:
          "Regex-like word search that finds English words and phrases matching a pattern. Great for partial fills.",
      },
      {
        name: "Anagram Solver",
        url: "https://www.wordplays.com/anagram-solver/",
        description:
          "Find anagrams of words and phrases. Useful for unscrambling letters.",
      },
    ],
  },
  {
    name: "General Puzzle Resources",
    links: [
      {
        name: "Geocaching Toolbox",
        url: "https://www.geocachingtoolbox.com/",
        description:
          "Collection of tools for geocaching puzzles including coordinate converters, cipher tools, and more.",
      },
      {
        name: "Solver Tools (MIT)",
        url: "https://tools.qhex.org/",
        description:
          "Tools from MIT puzzle hunt teams including logic puzzle solvers and word search utilities.",
      },
    ],
  },
];

function UsefulLinks() {
  return (
    <PuzzToolPage
      title="Useful Links"
      description="External tools and resources for puzzle solving."
    >
      <Stack gap="lg">
        {linkCategories.map((category) => (
          <div key={category.name}>
            <Title order={4} mb="sm">
              {category.name}
            </Title>
            <Grid>
              {category.links.map((link) => (
                <Grid.Col key={link.name} span={{ base: 12, sm: 6, lg: 4 }}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    h="100%"
                  >
                    <Group gap="xs" mb="xs">
                      <Anchor
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        fw={500}
                        size="lg"
                      >
                        {link.name}
                      </Anchor>
                      <IconExternalLink size={16} />
                    </Group>
                    <Text size="sm" c="dimmed">
                      {link.description}
                    </Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </div>
        ))}
      </Stack>
    </PuzzToolPage>
  );
}

export default UsefulLinks;
