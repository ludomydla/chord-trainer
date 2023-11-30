import { Note, NoteMap } from "./types";

export const NUM_OF_STRINGS = 6;
export const NUM_OF_FRETS = 12;

export const NOTES: NoteMap = {
  'C': {name: 'C', otherNames: []},
  'Cis': {name: 'C♯', otherNames: ['Cis','D♭']},
  'D': {name: 'D', otherNames: []},
  'Dis': {name: 'D♯', otherNames: ['Dis','E♭']},
  'E': {name: 'E', otherNames: ['F♭']},
  'F': {name: 'F', otherNames: ['E♯']},
  'Fis': {name: 'F♯', otherNames: ['Fis','G♭']},
  'G': {name: 'G', otherNames: []},
  'Gis': {name: 'G♯', otherNames: ['Gis','A♭']},
  'A': {name: 'A', otherNames: []},
  'B': {name: 'B', otherNames: ['Ais','A♯','H♭']},
  'H': {name: 'H', otherNames: []},
}

export const NOTES_ORDER: Note[] = [
  NOTES.C,
  NOTES.Cis,
  NOTES.D,
  NOTES.Dis,
  NOTES.E,
  NOTES.F,
  NOTES.Fis,
  NOTES.G,
  NOTES.Gis,
  NOTES.A,
  NOTES.B,
  NOTES.H,
]

export const DEFAULT_TUNING: Note[] = [
  NOTES.E,
  NOTES.H,
  NOTES.G,
  NOTES.D,
  NOTES.A,
  NOTES.E
]