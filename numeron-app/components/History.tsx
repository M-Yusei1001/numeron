import React from 'react';
import { NumeronResult } from '../index.d';

export default function History({ numeronResult }: { numeronResult: NumeronResult[] }): React.ReactElement {

    return (
        <div>
            {numeronResult.map((result, index) => (
                <div key={index}>
                    <p>{result.number.join('')}</p>
                    <p>{result.eat}EAT {result.bite}BITE</p>
                </div>
            ))}
        </div>
    )
}
