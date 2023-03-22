import { useEffect, useState } from "react";

export function useCreateColor() {
    const [createColor, setCreateNewColor] = useState('#FFFFFF');
    useEffect(() => {
        const randomColor = () => {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random()*16)]
            }
            return color
        }
        setCreateNewColor(randomColor())
    }, []);

    return createColor
}
