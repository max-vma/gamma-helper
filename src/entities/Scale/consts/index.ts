enum ScaleNames {
  NaturalMinor, // Эолийский (Aeolian)
  NaturalMajor, // Ионийский (Ionian)
  Dorian,
  Phrygian,
  Lydian,
  Mixolydian,
  Locrian,
}

enum ScaleTypes {
  Minor,
  Major,
  Dorian,
  Phrygian,
  Lydian,
  Mixolydian,
  Locrian,
}

enum ToneStep {
  T = 2, // Тон (2 полутона)
  H = 1, // Полутон (1 полутон)
}

const { T, H } = ToneStep;

export type TScales = {
  [key in ScaleNames]: ToneStep[];
};

const Scales: TScales = {
  [ScaleNames.NaturalMinor]: [T, H, T, T, H, T, T], // Эолийский (Aeolian) — Натуральный минор
  [ScaleNames.NaturalMajor]: [T, T, H, T, T, T, H], // Ионийский (Ionian) — Натуральный мажор
  [ScaleNames.Dorian]: [T, H, T, T, T, H, T], // Дорийский (Dorian)
  [ScaleNames.Phrygian]: [H, T, T, T, H, T, T], // Фригийский (Phrygian)
  [ScaleNames.Lydian]: [T, T, T, H, T, T, H], // Лидийский (Lydian)
  [ScaleNames.Mixolydian]: [T, T, H, T, T, H, T], // Миксолидийский (Mixolydian)
  [ScaleNames.Locrian]: [H, T, T, H, T, T, T], // Локрийский (Locrian)
};

export { ScaleNames, ScaleTypes, Scales, ToneStep };
