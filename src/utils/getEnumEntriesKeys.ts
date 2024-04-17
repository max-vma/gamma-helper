import { EnumDeclaration } from 'typescript'

export const getEnumEntriesKeys = (_enum: any) => {
	return Object.entries(_enum).filter(([_, k]) => Number.isInteger(k))
}
