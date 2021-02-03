# puzztool

![puzztool CI](https://github.com/puzztool/puzztool/workflows/puzztool%20CI/badge.svg)
![puzztool Deploy](https://github.com/puzztool/puzztool/workflows/puzztool%20Deploy/badge.svg)

This is the UI for a tool to help with encodings and ciphers used in puzzle competitions such as [Puzzle Hunt](https://en.wikipedia.org/wiki/Microsoft_Puzzle_Hunt), [Mystery Hunt](http://www.mit.edu/~puzzle/), [Puzzled Pint](http://www.puzzledpint.com/), and many others.

## Features

Supported Ciphers and Encodings include:

* Braille
* Morse Code
* Semaphore Flags
* Caesar Ciphers
* Vigenere Ciphers
* Autokey Ciphers
* ASCII and Ordinal Encodings (Binary, Ternary, Hexadecimal, etc.)

## Contributing

This is the UI for the tool, written in TypeScript and React.  Most of the decoding logic is provided by the [puzzle-lib](https://github.com/kfarnung/puzzle-lib) npm package.

This project is intended to work offline without internet access whenever possible to to be able to be packaged as a progressive web app.  As such, online-only components are discouraged unless there is a clear requirement.
