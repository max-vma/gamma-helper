enum ScaleNames {
    NaturalMinor = 'NaturalMinor'
}

enum ToneStep{
    whole = 'whole',
    half = 'half',
}

const { whole, half } = ToneStep;

type TScales = {
    [key in ScaleNames]: ToneStep[]
};

const Scales: TScales = {
    [ScaleNames.NaturalMinor]: [whole, half, whole, whole, half, whole, whole]
}

