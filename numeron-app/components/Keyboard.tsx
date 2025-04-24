import React from "react";
import type { KeyboardProps } from "@/lib";

export default function Keyboard({
	onNumberClick,
	clickedNumbers,
}: KeyboardProps) {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div>
			{numbers.map((number) => (
				<button
					key={number}
					onClick={() => onNumberClick(number)}
					className={`${clickedNumbers.includes(number) ? "btn btn-primary" : "btn"}`}
				>
					{number}
				</button>
			))}
		</div>
	);
}
