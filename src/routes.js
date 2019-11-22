import { Router } from 'express'
import moviesController from './components/movies/moviesController'

const router = Router()

router.use('/movies', moviesController)

export default router
