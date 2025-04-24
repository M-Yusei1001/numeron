export type NumeronResult = {
    number: number[];
    eat: number;
    bite: number;
};

export interface KeyboardProps {
    onNumberClick: (value: number) => void;
    clickedNumbers: number[];
}
