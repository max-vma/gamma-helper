import { expect, test } from '@jest/globals'
import { NoteCollection } from '../../entities/note/model/NoteCollection'

test('Тестирование класса NoteCollection', () => {
  const collection = new NoteCollection()

  expect(collection.notes).toEqual([])
})
