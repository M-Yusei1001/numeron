"use client";
import React, { useState } from 'react';
import Keyboard from './Keyboard';

export default function GameLogic(): React.ReactElement {
    const [answer, setAnswer] = useState<number[]>([]);
    const [input, setInput] = useState<number[]>([]);
    const [result, setResult] = useState<{ eat: number, bite: number }>({ eat: 0, bite: 0 });

    /* 
    ヌメロンは3ケタの数字の数当てゲーム。
    1~9の数字を使用し、重複はない。
    */
    const generateAnswer = () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const num = numbers.sort(() => Math.random() - 0.5);
        console.log(num.slice(0, 3));
        setAnswer(num.slice(0, 3));
    };

    //eatとbiteの判定
    const checkEatBite = (input: number[]) => {
        let eat = 0;
        let bite = 0;
        for (let i = 0; i < 3; i++) {
            if (answer[i] === input[i]) {
                eat++;
            } else if (answer.includes(input[i])) {
                bite++;
            }
        }
        return { eat, bite };
    };

    //ゲーム初期化
    const handleInitGame = () => {
        generateAnswer();
        setInput([]);
        setResult({ eat: 0, bite: 0 });
    };

    //キーボードクリック時の処理
    const handleNumberClick = (value: number) => {
        if (input.includes(value)) {
            return
        }
        if (input.length < 3) {
            setInput([...input, value]);
        }
    };

    //入力のクリア
    const handleNumberClear = () => {
        setInput([])
    }

    //入力した数字の判定
    const handleInputSubmit = () => {
        if (input.length === 3) {
            const { eat, bite } = checkEatBite(input);
            setResult({ eat, bite });
            setInput([]);
        };
    };

    return (
        <div>
            <button onClick={handleInitGame} className='btn btn-primary'>Start Game</button>
            <p>Answer: <span>{answer}</span></p>
            <Keyboard onNumberClick={handleNumberClick} clickedNumbers={input} />
            <p>Input: <span>{input}</span></p>
            <button onClick={handleInputSubmit} className='btn btn-primary'>Submit</button>
            <button onClick={handleNumberClear} className='btn btn-secondary btn-outline'>Clear</button>
            <p>Result: <span>{result.eat} eat, {result.bite} bite</span></p>
        </div>
    );
};
