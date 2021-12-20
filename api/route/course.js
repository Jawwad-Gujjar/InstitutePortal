import express from 'express'

import {courseSaveData,courseFind} from '../controller/course.js'

const courseRouter = express.Router()

courseRouter.post('/',courseSaveData)
courseRouter.get('/',courseFind)

export default courseRouter