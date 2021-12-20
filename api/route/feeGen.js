import express from 'express'
import {createDues} from '../controller/feeGen.js'

const feeRouter = express.Router()

feeRouter.post('/',createDues)

export default feeRouter;