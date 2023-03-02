import {Router} from 'express'
import {createFisiometria, deleteFisiometria, getFisiometriaById, getFisiometrias, updateFisiometria} from '../controllers/fisiometria.controller'
const router = Router()

router.post('/api/fisiometria',createFisiometria)
router.get('/api/fisiometria',getFisiometrias)
router.get('/api/fisiometria/:id',getFisiometriaById)
router.put('/api/fisiometria/:id',updateFisiometria)
router.delete('/api/fisiometria/:id',deleteFisiometria)

export default router