import {
  type Icon,
  IconAntenna,
  IconArrowsShuffle,
  IconBraille,
  IconCode,
  IconColorSwatch,
  IconExternalLink,
  IconFileText,
  IconFlag,
  IconFlagFilled,
  IconKey,
  IconLetterCase,
  IconLock,
  IconPuzzle,
  IconSearch,
  IconSpeakerphone,
} from "@tabler/icons-react";

export interface RouteChild {
  description: string;
  icon?: Icon;
  name: string;
  url: string;
}

export interface RouteCategory {
  children: RouteChild[];
  description: string;
  name: string;
  rootUrl: string;
}

export function getCategories(): RouteCategory[] {
  return [
    {
      children: [
        {
          description: "Word Search Solver",
          icon: IconSearch,
          name: "Word Search",
          url: "/wordsearch",
        },
      ],
      description: "Automated puzzle solvers",
      name: "Solvers",
      rootUrl: "/solvers",
    },
    {
      children: [
        {
          description: "A Vigenere cipher which uses plaintext as the key",
          icon: IconKey,
          name: "Autokey",
          url: "/autokey",
        },
        {
          description: "Letters are shifted by a fixed value",
          icon: IconArrowsShuffle,
          name: "Caesar",
          url: "/caesar",
        },
        {
          description: "Letters are mapped based on a key word",
          icon: IconLock,
          name: "Vigenere",
          url: "/vigenere",
        },
      ],
      description: "Scrambled letters",
      name: "Ciphers",
      rootUrl: "/cipher",
    },
    {
      children: [
        {
          description: "Mapping numbers to letters (ASCII, Binary, Ordinal)",
          icon: IconCode,
          name: "AutoConvert",
          url: "/autoconvert",
        },
        {
          description: "Text to Base64 and Base64 to text conversion",
          icon: IconFileText,
          name: "Base64",
          url: "/base64",
        },
        {
          description: "Six dots in a two-by-three grid",
          icon: IconBraille,
          name: "Braille",
          url: "/braille",
        },
        {
          description: "Dots and dashes with separations",
          icon: IconAntenna,
          name: "Morse Code",
          url: "/morse",
        },
        {
          description: "Suggest words from telephone keypad digits",
          name: "Phone to Text",
          url: "/phone",
        },
        {
          description: "Parts of a tic-tac-toe grid or X, some with dot",
          icon: IconPuzzle,
          name: "Pigpen",
          url: "/pigpen",
        },
        {
          description: "Positions of two different flags",
          icon: IconFlag,
          name: "Semaphore",
          url: "/semaphore",
        },
      ],
      description: "Different ways to represent letters",
      name: "Encodings",
      rootUrl: "/encoding",
    },
    {
      children: [
        {
          description: "Static display of number to letter mapping",
          icon: IconLetterCase,
          name: "Character Encodings",
          url: "/characterencodings",
        },
        {
          description: "Words used to clearly identify a letter",
          icon: IconSpeakerphone,
          name: "NATO Alphabet",
          url: "/nato",
        },
        {
          description: "Different simple flags which convey a letter",
          icon: IconFlagFilled,
          name: "Naval Flags",
          url: "/navalflags",
        },
        {
          description: "Find a resistor value using different colored bands",
          icon: IconColorSwatch,
          name: "Resistors",
          url: "/resistors",
        },
        {
          description: "External tools and resources for puzzle solving",
          icon: IconExternalLink,
          name: "Useful Links",
          url: "/links",
        },
      ],
      description: "Miscellaneous information",
      name: "Reference",
      rootUrl: "/reference",
    },
  ];
}
