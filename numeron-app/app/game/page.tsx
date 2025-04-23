"use client";
import React from 'react';
import GameLogic from "@/components/GameLogic";
import { useAtom } from 'jotai';
import { isGameOverAtom, isGamePlayingAtom } from '@/atoms/gameAtoms';

export default function Game() {
    const [isGamePlaying, setIsGamePlaying] = useAtom(isGamePlayingAtom);
    const [isGameOver, setIsGameOver] = useAtom(isGameOverAtom);

    const handleGameStart = () => {
        setIsGamePlaying(true);
        setIsGameOver(false);
    };

    return (
        < div >
            {isGamePlaying
                ?
                <GameLogic />
                :
                <button onClick={handleGameStart} className='btn btn-primary'>
                    Start Game
                </button>
            }
        </div >
    )
}
