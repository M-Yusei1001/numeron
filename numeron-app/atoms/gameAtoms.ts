import { atom } from 'jotai';

// ゲームが終了したかどうかを示すAtom
export const isGameOverAtom = atom(true);

// ゲームをプレイ中かどうかを示すAtom
export const isGamePlayingAtom = atom(false);