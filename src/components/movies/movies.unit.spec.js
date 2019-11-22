import { getProducersMinMaxWinInterval } from './moviesHelpers'

describe('Movies Helpers', () => {
  test('should calc resource correctly', () => {
    // year;title;studios;producers;winner

    const input = [
      {
        year: 1990,
        title: 'Filme 1',
        studios: 'Estudio 1',
        producers: 'Produtor 1',
        winner: 'yes'
      },
      {
        year: 1991,
        title: 'Filme 2',
        studios: 'Estudio 2',
        producers: 'Produtor 1',
        winner: 'yes'
      },
      {
        year: 1990,
        title: 'Filme 3',
        studios: 'Estudio 3',
        producers: 'Produtor 2',
        winner: 'yes'
      },
      {
        year: 1992,
        title: 'Filme 4',
        studios: 'Estudio 4',
        producers: 'Produtor 2',
        winner: 'yes'
      },
      {
        year: 1992,
        title: 'Filme 5',
        studios: 'Estudio 5',
        producers: 'Produtor 3',
        winner: 'yes'
      },
      {
        year: 1994,
        title: 'Filme 6',
        studios: 'Estudio 6',
        producers: 'Produtor 3',
        winner: 'yes'
      }
    ]

    // {"min":[{"producer":"Joel Silver","interval":1,"previousWin":1990,"followingWin":1991}],"max":[{"producer":"Matthew Vaughn","interval":13,"previousWin":2002,"followingWin":2015}]}

    const output = {
      min: [
        {
          producer: 'Produtor 1',
          interval: 1,
          previousWin: 1990,
          followingWin: 1991
        }
      ],
      max: [
        {
          producer: 'Produtor 2',
          interval: 2,
          previousWin: 1990,
          followingWin: 1992
        },
        {
          producer: 'Produtor 3',
          interval: 2,
          previousWin: 1992,
          followingWin: 1994
        }
      ]
    }

    const result = getProducersMinMaxWinInterval(input)

    expect(result).toEqual(output)
  })
})
