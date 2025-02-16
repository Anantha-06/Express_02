import express from 'express'
import { toDoCreate, toDoGetTask, toDoTaskDelete, toDoUpdateTask } from '../controller/toDoController.js'

const router = express.Router()

router.post("/create",toDoCreate)
router.get("/:id/get",toDoGetTask)
router.put("/:id/update",toDoUpdateTask)
router.delete("/:id/delete",toDoTaskDelete)

export const toDoRouter = router

