import express from 'express'

import {saveData,studentFind} from '../controller/admission.js'

const router = express.Router()

router.post('/',saveData)
router.get('/',studentFind)

export default router

