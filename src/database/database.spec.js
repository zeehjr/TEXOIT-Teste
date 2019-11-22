import {
  createDatabaseFromCSV,
  mapCSVStringToObjectsArray
} from './databaseHelpers'

const SAMPLE_DATA = `name;age
Pessoa 1;40
Pessoa 2;50`

describe('Database CSV Loader', () => {
  it('should load correctly any data', () => {
    const input = mapCSVStringToObjectsArray(SAMPLE_DATA)

    const output = [
      {
        name: 'Pessoa 1',
        age: '40'
      },
      {
        name: 'Pessoa 2',
        age: '50'
      }
    ]

    expect(input).toEqual(output)
  })
})
