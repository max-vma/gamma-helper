import { expect, test } from '@jest/globals'
import { NotesCollection } from './../NotesCollection'

test('Тестирование класса NotesCollection', () => {
	const collection = new NotesCollection()

	expect(collection.notes).toEqual([])
})
