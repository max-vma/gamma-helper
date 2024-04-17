enum ScaleNames {
	NaturalMinor,
	NaturalMajor,
}
enum ScaleTypes {
	Minor,
	Major,
}

enum ToneStep {
	T = 2,
	H = 1,
}

const { T, H } = ToneStep

export type TScales = {
	[key in ScaleNames]: ToneStep[]
}

const Scales: TScales = {
	[ScaleTypes.Minor]: [T, H, T, T, H, T, T],
	[ScaleTypes.Major]: [T, T, H, T, T, T, H],
}

export { ScaleNames, ToneStep, Scales, ScaleTypes }
