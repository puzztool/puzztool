export function getContrastingColor(background: String) {
    // Calculate Luma as per Rec. 709: https://en.wikipedia.org/wiki/Luma_(video)
    const hexCode = background.substring(1);  // Remove the leading #
    const color = parseInt(hexCode, 16);
    // tslint:disable no-bitwise
    const red = (color >> 16) & 0xff;
    const green = (color >> 8) & 0xff;
    const blue = (color & 0xff);
    const luma = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    if (luma < 40) {
        // Dark background; use bright foreground
        return '#ffffff';
    } else {
        return '#000000';
    }
}
