import type { NumeronStandings } from "@/lib";
import { mock_standings } from "./mock_data";
import { NextResponse } from "next/server";

export function GET(start: number, end: number) {
    if (start < 0 || end < 0 || start > end || start > mock_standings.length) {
        return new NextResponse(
            JSON.stringify({ error: "Invalid range" }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-store",
                },
            }
        );
    }
    if (end > mock_standings.length) {
        end = mock_standings.length;
    }
    if (start === end) {
        return new NextResponse(
            JSON.stringify({ error: "No standings found" }),
            {
                status: 404,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-store",
                },
            }
        );
    }

    const sortedStandings = mock_standings.sort((a, b) => b.score - a.score);
    const filteredStandings: NumeronStandings[] = sortedStandings.slice(start, end);

    if (filteredStandings.length !== 0) {
        return new NextResponse(
            JSON.stringify(mock_standings),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-store",
                },
            }
        );
    }
}