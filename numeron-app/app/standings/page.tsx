"use client";

import type { NumeronStandings } from "@/lib";
import { useEffect, useState } from "react";

export default function Standings() {
	const [standings, setStandings] = useState<NumeronStandings[]>([]);
	const [range, setRange] = useState({ start: 0, end: 10 });
	const [isLoading, setIsLoading] = useState(true);

	//Load More ボタンクリック時の処理
	const handleOnClick = () => {
		setRange((prevRange) => ({
			start: prevRange.start,
			end: prevRange.end + 10,
		}));
	};

	//ページ読み込みと同時に上位10件を取得
	useEffect(() => {
		let ignore = false;
		setIsLoading(true);
		const fetchStandings = async ({
			start,
			end,
		}: { start: number; end: number }) => {
			try {
				const response = await fetch(
					`/api/mock/standings?start=${start}&end=${end}`,
					{ method: "GET" },
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data: NumeronStandings[] = await response.json();
				setStandings(data);
			} catch (error) {
				console.error("Error fetching standings:", error);
			}
			if (!ignore) {
				setIsLoading(false);
			}
		};
		fetchStandings(range);
		setIsLoading(false);
		return () => {
			ignore = true;
		};
	}, [range]);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold mb-4">Standings</h1>
			<div className="overflow-x-auto">
				<table className="table table-xs table-pin-rows table-pin-cols">
					<thead>
						<tr>
							<th />
							<td>Name</td>
							<td>Score</td>
							<th />
						</tr>
					</thead>
					<tbody>
						{isLoading ? (
							<tr>
								<td colSpan={3} className="text-center">
									<span className="loading loading-spinner loading-md" />
								</td>
							</tr>
						) : (
							standings.map((standing, index) => (
								<tr key={standing.username}>
									<td>{index + 1}</td>
									<td>{standing.username}</td>
									<td>{standing.score}</td>
								</tr>
							))
						)}
						{standings.length === 0 && !isLoading && (
							<tr>
								<td colSpan={3} className="text-center">
									No standings found
								</td>
							</tr>
						)}
					</tbody>
				</table>
				<div>
					{standings.length === 0 || isLoading ? (
						<button className="btn btn-primary" disabled={true} type="button">
							<span className="loading loading-spinner" />
							Loading...
						</button>
					) : (
						<button
							className="btn btn-primary"
							onClick={handleOnClick}
							type="button"
						>
							Load More
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
