"use client";
import React, { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import History from "./History";
import { NumeronResult } from "../lib";
import { useAtom } from "jotai";
import { isGameOverAtom } from "@/atoms/gameAtoms";

export default function GameLogic() {
    const [answer, setAnswer] = useState<number[]>([]);
    const [input, setInput] = useState<number[]>([]);
    const [result, setResult] = useState<{ eat: number; bite: number }>({
        eat: 0,
        bite: 0,
    });
    const [history, setHistory] = useState<NumeronResult[]>([]);
    const [isGameOver, setIsGameOver] = useAtom(isGameOverAtom);

    /* 
    ヌメロンは3ケタの数字の数当てゲーム。
    1~9の数字を使用し、重複はない。
    */

    //回答の生成
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
        setHistory([]);
        setResult({ eat: 0, bite: 0 });
    };

    //ゲーム開始時の処理
    useEffect(() => {
        if (!isGameOver) {
            handleInitGame();
        }
    }, [isGameOver]);

    //キーボードクリック時の処理
    const handleNumberClick = (value: number) => {
        if (input.length < 3 && !input.includes(value)) {
            setInput([...input, value]);
        }
    };

    //削除ボタンクリック時の処理
    const handleDeleteClick = () => {
        setInput(input.slice(0, -1));
    };

    //クリアボタンクリック時の処理
    const handleClearClick = () => {
        setInput([]);
    };

    //入力した数字の判定
    const handleInputSubmit = () => {
        if (input.length < 3) {
            return;
        }
        const { eat, bite } = checkEatBite(input);
        setResult({ eat, bite });
        if (eat === 3) {
            setIsGameOver(true);
            // setIsGamePlaying(false);
        }
        if (history.length > 5) {
            history.shift();
        }
        setHistory([...history, { number: input, eat, bite }]);
        setInput([]);
    };

    const handlePlayAgain = () => {
        setIsGameOver(false);
    };

    return (
        <div>
            <p>
                Answer: <span>{answer}</span>
            </p>
            <p>
                Game End: <span>{isGameOver ? "Game End" : "Playing"}</span>
            </p>
            <p>
                Input: <span>{input}</span>
            </p>
            <Keyboard onNumberClick={handleNumberClick} clickedNumbers={input} />
            <button
                onClick={handleDeleteClick}
                className={`btn ${input.length === 0 ? "btn-disabled" : "btn-neutral"}`}
            >
                Delete
            </button>
            <button
                onClick={handleClearClick}
                className={`btn ${input.length === 0 ? "btn-disabled" : "btn-error"}`}
            >
                Clear
            </button>
            <button
                onClick={handleInputSubmit}
                className={`btn ${input.length === 3 ? "btn-primary" : "btn-disabled"}`}
            >
                Submit
            </button>
            <button
                onClick={handlePlayAgain}
                className={`btn ${isGameOver ? "btn-success" : "btn-disabled"}`}
            >
                Play Again
            </button>
            <p>
                Result:{" "}
                <span>
                    {result.eat} eat, {result.bite} bite
                </span>
            </p>
            <History numeronResult={history} />
        </div>
    );
}
