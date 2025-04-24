import React from "react";
import type { KeyboardProps } from "@/lib";

export default function Keyboard({
	onNumberClick,
	clickedNumbers,
}: KeyboardProps) {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const btnConfig = "flex cursor-pointer select-none";

	return (
		<div className="grid grid-cols-3 gap-4 max-w-sm mx-auto p-4 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
			{numbers.map((number) => (
				<div className="flex justify-center items-center" key={number}>
					<button
						key={number}
						onClick={() => onNumberClick(number)}
						className={`btn btn-square ${btnConfig} ${clickedNumbers.includes(number) ? "btn-primary" : ""}`}
					>
						{number}
					</button>
				</div>
			))}
		</div>
	);
}
