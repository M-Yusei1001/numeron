"use client";
import { isGameOverAtom, isGamePlayingAtom } from "@/atoms/gameAtoms";
import GameLogic from "@/components/GameLogic";
import { useAtom } from "jotai";
import React from "react";

export default function Game() {
	const [isGamePlaying, setIsGamePlaying] = useAtom(isGamePlayingAtom);
	const [isGameOver, setIsGameOver] = useAtom(isGameOverAtom);

	const handleGameStart = () => {
		setIsGamePlaying(true);
		setIsGameOver(false);
	};

	return (
		<div className="flex flex-col items-center justify-center w-full mx-auto h-screen">
			{isGamePlaying ? (
				<GameLogic />
			) : (
				<button onClick={handleGameStart} className="btn btn-primary" type="button">
					Start Game
				</button>
			)}
		</div>
	);
}
