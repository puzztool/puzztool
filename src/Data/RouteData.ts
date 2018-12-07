export interface RouteChild {
    description: string;
    name: string;
    url: string;
}

export interface RouteCategory {
    children: RouteChild[];
    description: string;
    name: string;
    rootUrl: string;
}

export interface RoutesInfo {
    categories: RouteCategory[];
    name: string;
}

export class RouteData {
    public static getCategories() {
        return RouteData.getRoutes().categories;
    }

    private static getRoutes(): RoutesInfo {
        return {
            categories: [
                {
                    children: [
                        {
                            description: 'Word Search Solver',
                            name: 'Word Search',
                            url: '/wordsearch',
                        },
                    ],
                    description: 'Automated puzzle solvers',
                    name: 'Solvers',
                    rootUrl: '/solvers',
                },
                {   
                    children: [
                        {
                            description: ' A Vignere cipher which uses plaintext as the key',
                            name: 'Autokey',
                            url: '/autokey',
                        },
                        {
                            description: 'Letters are shifted by a fixed value',
                            name: 'Caesar',
                            url: '/caesar',
                        },
                        {
                            description: 'Letters are mapped based on a key word',
                            name: 'Vignere',
                            url: '/vigenere',
                        },
                    ],
                    description: 'Scrambled letters',
                    name: 'Ciphers',
                    rootUrl: '/cipher',
                },
                {
                    children: [
                        {
                            description: 'Mapping numbers to letters (ASCII, Binary, Ordinal)',
                            name: 'AutoConvert',
                            url: '/autoconvert',
                        },
                        {
                            description: 'Six dots in a two-by-three grid',
                            name: 'Braille',
                            url: '/braille',
                        },
                        {
                            description: 'Dots and dashes with separations',
                            name: 'Morse Code',
                            url: '/morse',
                        },
                        {
                            description: 'Parts of a tic-tac-toe grid or X, some with dot',
                            name: 'Pigpen',
                            url: '/pigpen',
                        },
                        {
                            description: ' Positions of two different flags',
                            name: 'Semaphore',
                            url: '/semaphore',
                        },
                    ],
                    description: 'Different ways to represent letters',
                    name: 'Encodings',
                    rootUrl: '/encoding',
                },
                {
                    children: [
                        {
                            description: 'Static display of number to letter mapping',
                            name: 'Character Encodings',
                            url: '/characterencodings',
                        },
                        {
                            description: 'Words used to clearly identify a letter',
                            name: 'NATO Alphabet',
                            url: '/nato',
                        },
                        {
                            description: 'Different simple flags which convey a letter',
                            name: 'Naval Flags',
                            url: '/navalflags',
                        },
                        {
                            description: 'Find a resistor value using different colored bands',
                            name: 'Resistors',
                            url: '/resistors',
                        }
                    ],
                    description: 'Miscellaneous information',
                    name: 'Reference',
                    rootUrl: '/reference',
                }
            ],
            name: 'Puzztool',
        };
    }
}
