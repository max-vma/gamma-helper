enum ScaleNames {
    NaturalMinor = 'NaturalMinor'
}

enum ToneStep{
    T = 'tone',
    H = 'half-tone',
}

const { T, H } = ToneStep;

type TScales = {
    [key in ScaleNames]: ToneStep[]
};

const Scales: TScales = {
    [ScaleNames.NaturalMinor]: [T, H, T, H, T, H, T]
}

export {ScaleNames, ToneStep, TScales, Scales}
