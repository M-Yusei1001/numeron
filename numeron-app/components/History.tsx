import React, { useState } from 'react'
import { NumeronResult } from '../index.d';

export default function History({ numeronResult }: { numeronResult: NumeronResult[] }): React.ReactElement {
    const [history, setHistory] = useState<NumeronResult[]>([]);

    return (
        <div>History</div>
    )
}
