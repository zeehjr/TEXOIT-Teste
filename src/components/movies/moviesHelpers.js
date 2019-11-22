export const getAllProducersNames = data => {
  const names = data.reduce((producers, movie) => {
    if (!movie.producers) return producers
    const movieProducers = movie.producers.split(/,\s|\sand\s/g)
    let producersToAdd = movieProducers.reduce((accumulator, producer) => {
      if (producers.indexOf(producer) === -1) {
        return [...accumulator, producer]
      }
      return accumulator
    }, [])
    return [...producers, ...producersToAdd]
  }, [])

  return names
}

const getProducersMovies = data => {
  const producersNames = getAllProducersNames(data)

  const producersMovies = producersNames.map(producer => {
    const movies = data.filter(
      movie => movie.producers && movie.producers.indexOf(producer) >= 0
    )

    return {
      name: producer,
      movies
    }
  })

  return producersMovies
}

const getProducerIntervals = producer => {
  let intervals = []
  for (let i = 0; i < producer.movies.length - 1; i++) {
    const previous = producer.movies[i]
    const following = producer.movies[i + 1]

    const previousYear = parseInt(previous.year)
    const followingYear = parseInt(following.year)

    const interval = followingYear - previousYear

    intervals.push({
      interval,
      previousWin: previousYear,
      followingWin: followingYear
    })
  }

  return intervals
}

const getProducersIntervals = data => {
  const producersWithMovies = getProducersMovies(data)

  const producersIntervals = producersWithMovies.map(producer => ({
    name: producer.name,
    intervals: getProducerIntervals(producer)
  }))

  return producersIntervals
}

const getFlattenedProducersIntervals = data => {
  const producersWithIntervals = getProducersIntervals(data)

  const flattenedProducers = producersWithIntervals.reduce(
    (flattened, producer) => {
      const intervals = producer.intervals.map(interval => ({
        producer: producer.name,
        ...interval
      }))

      return [...flattened, ...intervals]
    },
    []
  )

  return flattenedProducers
}

export const getProducersMinMaxWinInterval = movies => {
  const data = movies.filter(movie => movie.winner === 'yes')

  const flattenedIntervals = getFlattenedProducersIntervals(data).filter(
    interval => interval.interval > 0
  )

  const result = flattenedIntervals.reduce((prev, current, index, arr) => {
    if (prev == null) {
      return {
        min: [current],
        max: [current]
      }
    }

    let min = prev.min
    let max = prev.max

    if (min[0].interval > current.interval) {
      min = arr.filter(movie => movie.interval === current.interval)
    }

    if (max[0].interval < current.interval) {
      max = arr.filter(movie => movie.interval === current.interval)
    }

    return { min, max }
  }, null)

  return result
}
