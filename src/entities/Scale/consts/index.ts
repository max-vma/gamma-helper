enum ScaleNames {
  Lydian,
  NaturalMajor,
  Mixolydian,
  Dorian,
  NaturalMinor,
  Phrygian,
  Locrian,
  BluesMinor,
  BluesMajor,
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
  [ScaleNames.Lydian]: [T, T, T, H, T, T, H], // Лидийский (Lydian) — самый светлый
  [ScaleNames.NaturalMajor]: [T, T, H, T, T, T, H], // Ионийский (Ionian) — натуральный мажор
  [ScaleNames.Mixolydian]: [T, T, H, T, T, H, T], // Миксолидийский (Mixolydian)
  [ScaleNames.Dorian]: [T, H, T, T, T, H, T], // Дорийский (Dorian) — нейтральный
  [ScaleNames.NaturalMinor]: [T, H, T, T, H, T, T], // Эолийский (Aeolian) — натуральный минор
  [ScaleNames.Phrygian]: [H, T, T, T, H, T, T], // Фригийский (Phrygian) — тёмный
  [ScaleNames.Locrian]: [H, T, T, H, T, T, T], // Локрийский (Locrian) — самый тёмный
  [ScaleNames.BluesMinor]: [T + H, T, H, H, T + H, T],
  [ScaleNames.BluesMajor]: [T, H, H, T + H, T, T],
};

export { ScaleNames, Scales, ToneStep };
