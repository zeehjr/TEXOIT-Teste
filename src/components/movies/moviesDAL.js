import { getProducersMinMaxWinInterval } from './moviesHelpers'
import database from '../../database'

export const getProducersMinMaxWinInterval = () => {
  return getProducersMinMaxWinInterval(database)
}
