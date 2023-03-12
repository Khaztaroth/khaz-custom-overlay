import { useState } from 'react';

export function useColorCorrection (color) {
    var convert = require('color-convert');

    var hsv = convert.hex.hsv(color);

    const useAdjustedColor = () => {
        const h = hsv[0]
        const s = hsv[1]
        const v = hsv[2]

        const maxValue = Math.min( 70, s);
        const [correctedColor, setCorrectedColor] = useState([h,maxValue,v]);

        return correctedColor
    }

    const adjustedColor = useAdjustedColor()
    const adjustedColorToHex = "#" + convert.hsv.hex(adjustedColor)

    return adjustedColorToHex
}