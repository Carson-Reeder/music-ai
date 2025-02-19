import { create } from "zustand";

type Chord = {
  id: string;
  notes: string[];
  startPosition: number;
  length: number;
  chordTimingBeat: number;
};
type Instrument = {
  id: string;
  category: string;
  name: string;
  knownNotes: string[];
};

export type MeasureStoreType = {
  chords: Chord[];
  setChords: (chords: Chord[]) => void;
  bpm: number;
  setBpm: (bpm: number) => void;
  instrument: Instrument;
  setInstrument: (instrument: Instrument) => void;
  isInstrumentClicked: boolean;
  setIsInstrumentClicked: (isInstrumentClicked: boolean) => void;

  setChordNotes: (id: string, notes: string[]) => void;
  setChordTiming: (id: string, chordTimingBeat: number) => void;
  setChordLength: (id: string, length: number) => void;
  setChordStartPosition: (id: string, startPosition: number) => void;
};
// define default chords for array
const initialChords: Chord[] = [
  {
    id: "1",
    notes: ["C4", "E4", "G4"],
    startPosition: 0,
    length: 1,
    chordTimingBeat: 0,
  },
  {
    id: "2",
    notes: ["D4", "F4", "A4"],
    startPosition: 1,
    length: 1,
    chordTimingBeat: 0,
  },
  {
    id: "3",
    notes: ["G3", "B3", "D4"],
    startPosition: 2,
    length: 0.75,
    chordTimingBeat: 0,
  },
  {
    id: "4",
    notes: ["F4", "A4", "C5"],
    startPosition: 2,
    length: 1,
    chordTimingBeat: 3,
  },
];
const initialInstrument: Instrument = {
  id: "1",
  category: "brass",
  knownNotes: ["A1", "C2", "C4"],
  name: "french-horn",
};
// create store instance
export const createChordPlaybackStore = () => {
  return create<MeasureStoreType>((set) => ({
    chords: initialChords,
    setChords: (chords) =>
      set({
        chords,
      }),

    bpm: 120,
    setBpm: (bpm: number) => set({ bpm }),

    instrument: initialInstrument,
    setInstrument: (instrument: Instrument) => {
      set({ instrument }), console.log("Instrument set to:", instrument);
    },

    isInstrumentClicked: true,
    setIsInstrumentClicked: (isInstrumentClicked: boolean) =>
      set({ isInstrumentClicked }),

    setChordNotes: (id: string, notes: string[]) =>
      set((state) => {
        const updatedChords = state.chords.map((chord) =>
          chord.id === id ? { ...chord, notes } : chord
        );
        return {
          chords: updatedChords,
        };
      }),
    setChordTiming: (id: string, chordTimingBeat: number) =>
      set((state) => {
        const updatedChords = state.chords.map((chord) =>
          chord.id === id ? { ...chord, chordTimingBeat } : chord
        );
        return {
          chords: updatedChords,
        };
      }),
    setChordLength: (id: string, length: number) =>
      set((state) => {
        const updatedChords = state.chords.map((chord) =>
          chord.id === id ? { ...chord, length } : chord
        );
        return {
          chords: updatedChords,
        };
      }),
    setChordStartPosition: (id: string, startPosition: number) =>
      set((state) => {
        const updatedChords = state.chords.map((chord) =>
          chord.id === id ? { ...chord, startPosition } : chord
        );
        return {
          chords: updatedChords,
        };
      }),
  }));
};
