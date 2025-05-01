import type { NumeronResult } from "@/lib";
import React from "react";

export default function History({
	numeronResult,
}: { numeronResult: NumeronResult[] }) {
	return (
		<div>
			{numeronResult.map((result) => (
				<div key={result.number.join("")}>
					<p>{result.number.join("")}</p>
					<p>
						{result.eat}EAT {result.bite}BITE
					</p>
				</div>
			))}
		</div>
	);
}
