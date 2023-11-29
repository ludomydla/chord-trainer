

export type Note = {
  name: string;
  otherNames: string[];
}

export type GuitarString = {
  tuning: Note;
  notes: Note[];
}

export type Results = {
  all: number;
  correct: number;
  fails: number;
  missed: number;
}

export enum Pages {
  GAME = 'Game',
  SETTINGS = 'Settings'
}

export enum GameState {
  START_PROMPT = 'StartPrompt',
  COUNTDOWN = 'Countdown',
  GAME_IN_PROGRESS = 'GameInProgress',
  RESULTS = 'Results'
}