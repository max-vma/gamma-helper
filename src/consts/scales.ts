enum ScaleNames {
    NaturalMinor,
    NaturalMajor,
}

enum ToneStep{
    T = 2,
    H = 1,
}

const { T, H } = ToneStep;

type TScales = {
    [key in ScaleNames]: ToneStep[]
};

const Scales: TScales = {
    [ScaleNames.NaturalMinor]: [T, H, T, T, H, T, T],
    [ScaleNames.NaturalMajor]: [T, T, H, T, T, T, H],
}

export {ScaleNames, ToneStep, TScales, Scales}
