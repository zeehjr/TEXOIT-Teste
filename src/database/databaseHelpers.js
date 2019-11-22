import path from 'path'
import fs from 'fs'
import Bluebird from 'bluebird'

const readFileAsync = Bluebird.promisify(fs.readFile)
const fileExistsAsync = Bluebird.promisify(fs.exists)

/*
  Fiz uma simples leitura do CSV, pois não há necessidade de uma biblioteca só para isso...
  Utilizei UTF-8 como codificação, apesar disso não ter sido relevante aqui por os dados não conterem caracteres especiais.
*/

export const mapCSVStringToObjectsArray = csv => {
  // Quebra CSV em linhas
  const csvLines = csv.split(/\r?\n/)

  // Pega o header, que é a definição das colunas, e joga em um array para uso posterior
  const header = csvLines[0].split(';')

  // Cria um novo array de linhas, sem o header
  const lines = csvLines.slice(1)

  // Percorre cada linha do CSV
  const data = lines.map(line =>
    // Para cada linha do CSV, cria um array com as colunas
    // Faz um reduce para criar um objeto para a linha atual,
    //   setando como chave do objeto a definition com mesmo index de coluna,
    //   e o valor sendo o valor da coluna atual
    line.split(';').reduce(
      (prev, current, index) => ({
        ...prev,
        [header[index]]: current
      }),
      {}
    )
  )

  return data
}

export const createDatabaseFromCSV = filePath => {
  const doFileExists = fs.existsSync(filePath)

  // Checa existencia do CSV
  if (!doFileExists) {
    throw new Error('CSV file not found.')
  }

  const csvFile = fs.readFileSync(filePath, {
    encoding: 'UTF-8'
  })

  const data = mapCSVStringToObjectsArray(csvFile)

  return data
}
