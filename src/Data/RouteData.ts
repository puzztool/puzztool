export class RouteData {
    public static getCategories() {
        return RouteData.getRoutes().categories;
    }

    private static getRoutes() {
        const routes = {
            'name': 'Puzztool',
            'categories': [
                {
                    'name': 'Ciphers - Scrambled Letters',
                    'children': [
                        {
                            'name': 'Caesar',
                            'url': '/cipher/caesar',
                            'description': 'Letters are shifted by a fixed value'
                        },
                        {
                            'name': 'Vignere',
                            'url': '/cipher/vigenere',
                            'description': 'Letters are mapped based on a key word'
                        },
                        {
                            'name': 'Caesar',
                            'url': '/cipher/autokey',
                            'description': ' A Vignere cipher which uses plaintext as the key'
                        }
                    ]
                },
                {
                    'name': 'Encoding - Different Ways To Represent Letters',
                    'children': [
                        {
                            'name': 'AutoConvert',
                            'url': '/encoding/autoconvert',
                            'description': 'Mapping numbers to letters (ASCII, Binary, Ordinal)'
                        },
                        {
                            'name': 'Braille',
                            'url': '/encoding/braille',
                            'description': 'Six dots in a two-by-three grid'
                        },
                        {
                            'name': 'Morse Code',
                            'url': '/encoding/morse',
                            'description': 'Dots and dashes with separations'
                        },
                        {
                            'name': 'Semaphore',
                            'url': '/encoding/semaphore',
                            'description': ' Positions of two different flags'
                        },
                        {
                            'name': 'Pigpen',
                            'url': '/encoding/pigpen',
                            'description': 'Parts of a tic-tac-toe grid or X, some with dot'
                        }
        
                    ]
                },
                {
                    'name': 'Reference - Misc information',
                    'children': [
                        {
                            'name': 'Character Encodings',
                            'url': '/reference/characterencodings',
                            'description': 'Static display of number to letter mapping'
                        },
                        {
                            'name': 'NATO Alphabet',
                            'url': '/reference/nato',
                            'description': 'Words used to clearly identify a letter'
                        },
                        {
                            'name': 'Naval Flags',
                            'url': '/reference/navalflags',
                            'description': 'Different simple flags which convey a letter'
                        },
                        {
                            'name': 'Resistors',
                            'url': '/reference/resistors',
                            'description': 'Find a resistor value using different colored bands'
                        }
                    ]
                }
            ]
        };
        return routes;
    }
}
