enum Notes {
    "C" = 0,
    "C#" = 1,
    "D" = 2,
    "D#" = 3,
    "E" = 4,
    "F" = 5,
    "F#" = 6,
    "G" = 7,
    "G#" = 8,
    "A" = 9,
    "A#" = 10,
    "B" = 11,
  }

  enum Octaves {
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



  export { Octaves, MAX_NOTES_COUNT, NOTES_LAST_INDEX }

  export default Notes