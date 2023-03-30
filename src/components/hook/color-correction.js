export function useColorCorrection (color) {
    var convert = require('color-convert');

    let uglyColor = color
    console.log("incoming color for correction:", color)
    const hsv = convert.hex.hsv(uglyColor);

    const useAdjustedColor = () => {
        const h = hsv[0]
        const s = hsv[1]
        const v = hsv[2]

        const maxValue = Math.min( 70, s);
        
        let correctedColor = [h,maxValue,v]

        return correctedColor
    }

    const adjustedColor = useAdjustedColor()
    const adjustedColorToHex = "#" + convert.hsv.hex(adjustedColor)

    return adjustedColorToHex
}