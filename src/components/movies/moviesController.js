import { Router } from 'express'
import database from '../../database'
import { getProducersMinMaxWinInterval } from './moviesDAL'

const router = Router()

router.get('/', (req, res) => {
  const resource = req.query.resource
  if (resource) {
    if (resource === 'producersMinMaxWinInterval') {
      const data = getProducersMinMaxWinInterval()
      return res.json({ data })
    }
    return res.status(404).json({
      error: `Resource '${resource}' was not found.`
    })
  }

  return res.json({ data: database })
})

export default router
