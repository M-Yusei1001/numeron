"use client";
import React, { createContext, useState } from 'react';
import GameLogic from "@/components/GameLogic";

export const GameEndContext = createContext<{
    isGameEnd: boolean;
    setIsGameEnd: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    isGameEnd: false,
    setIsGameEnd: () => { },
});

export const GamePlayingContext = createContext<{
    isGamePlaying: boolean;
    setIsGamePlaying: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    isGamePlaying: false,
    setIsGamePlaying: () => { },
});

export default function Game(): React.ReactElement {
    const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
    const [isGamePlaying, setIsGamePlaying] = useState<boolean>(false);

    return (
        < div >
            <h1>This is Game Page</h1>
            <GameEndContext.Provider value={{ isGameEnd, setIsGameEnd }}>
                <GamePlayingContext.Provider value={{ isGamePlaying, setIsGamePlaying }}>
                    {isGamePlaying
                        ?
                        <GameLogic />
                        :
                        <button onClick={() => setIsGamePlaying} className='btn btn-primary'>
                            Start Game
                        </button>
                    }
                </GamePlayingContext.Provider>
            </GameEndContext.Provider>
        </div >
    )
}
