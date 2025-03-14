import React from 'react'

interface KeyboardProps {
    onNumberClick: (value: number) => void;
    clickedNumbers: number[];
};

export default function Keyboard({ onNumberClick, clickedNumbers }: KeyboardProps): React.ReactElement {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            {numbers.map((number) => (
                <button
                    key={number}
                    onClick={() => onNumberClick(number)}
                    className={`${clickedNumbers.includes(number) ? 'btn btn-primary' : 'btn'}`}>
                    {number}
                </button>
            ))}
        </div>
    );
};
