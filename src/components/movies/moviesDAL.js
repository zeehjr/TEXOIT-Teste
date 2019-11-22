import { getProducerMinMaxWinInterval } from './moviesHelpers'
import database from '../../database'

export const getProducerMinMaxWinInterval = () => {
  return getProducerMinMaxWinInterval(database)
}
