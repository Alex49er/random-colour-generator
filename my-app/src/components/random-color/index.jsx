import { useState } from "react";



export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#'

        function randomColorUtility(length) {
            return Math.floor(Math.random() * length)
        }

        for (let i = 0; i < 6; i++) {
            hexColor++
        }
    }

    function handleCreateRandomRgbColor() {

    }



    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,

        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Colour</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Colour</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Colour</button>
        </div>
    );
}