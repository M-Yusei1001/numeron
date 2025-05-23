import React from "react";
import type { NumeronResult } from "@/lib";

export default function History({
	numeronResult,
}: { numeronResult: NumeronResult[] }) {
	return (
		<div>
			{numeronResult.map((result, index) => (
				<div key={index}>
					<p>{result.number.join("")}</p>
					<p>
						{result.eat}EAT {result.bite}BITE
					</p>
				</div>
			))}
		</div>
	);
}
