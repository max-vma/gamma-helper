enum NoteNames {
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
}

enum OctaveNames {
  Minus1 = -1,
  Zero = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
}

const MAX_NOTES_COUNT = 12;
const NOTES_LAST_INDEX = 11;

export { MAX_NOTES_COUNT, NOTES_LAST_INDEX, NoteNames, OctaveNames };
