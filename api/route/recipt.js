import express from 'express'
import {studentFindForRecipt,recipts} from '../controller/recipt.js'
const reciptRouter = express.Router()

reciptRouter.get('/',studentFindForRecipt)
reciptRouter.post('/',recipts)

export default reciptRouter