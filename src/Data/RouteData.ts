export class RouteData {
    public static getCategories() {
        return RouteData.getRoutes().categories;
    }

    private static getRoutes() {
        const routes = {
            'name': 'Puzztool',
            'categories': [
                {
                    'name': 'Ciphers',
                    'description': 'Scrambled letters',
                    'rootUrl': '/cipher',
                    'children': [
                        {
                            'name': 'Caesar',
                            'url': '/caesar',
                            'description': 'Letters are shifted by a fixed value'
                        },
                        {
                            'name': 'Vignere',
                            'url': '/vigenere',
                            'description': 'Letters are mapped based on a key word'
                        },
                        {
                            'name': 'Caesar',
                            'url': '/autokey',
                            'description': ' A Vignere cipher which uses plaintext as the key'
                        }
                    ]
                },
                {
                    'name': 'Encodings',
                    'description': 'Different ways to represent letters',
                    'rootUrl': '/encoding',
                    'children': [
                        {
                            'name': 'AutoConvert',
                            'url': '/autoconvert',
                            'description': 'Mapping numbers to letters (ASCII, Binary, Ordinal)'
                        },
                        {
                            'name': 'Braille',
                            'url': '/braille',
                            'description': 'Six dots in a two-by-three grid'
                        },
                        {
                            'name': 'Morse Code',
                            'url': '/morse',
                            'description': 'Dots and dashes with separations'
                        },
                        {
                            'name': 'Semaphore',
                            'url': '/semaphore',
                            'description': ' Positions of two different flags'
                        },
                        {
                            'name': 'Pigpen',
                            'url': '/pigpen',
                            'description': 'Parts of a tic-tac-toe grid or X, some with dot'
                        }
        
                    ]
                },
                {
                    'name': 'Reference',
                    'description': 'Miscellaneous information',
                    'rootUrl': '/reference',
                    'children': [
                        {
                            'name': 'Character Encodings',
                            'url': '/characterencodings',
                            'description': 'Static display of number to letter mapping'
                        },
                        {
                            'name': 'NATO Alphabet',
                            'url': '/nato',
                            'description': 'Words used to clearly identify a letter'
                        },
                        {
                            'name': 'Naval Flags',
                            'url': '/navalflags',
                            'description': 'Different simple flags which convey a letter'
                        },
                        {
                            'name': 'Resistors',
                            'url': '/resistors',
                            'description': 'Find a resistor value using different colored bands'
                        }
                    ]
                }
            ]
        };
        return routes;
    }
}
