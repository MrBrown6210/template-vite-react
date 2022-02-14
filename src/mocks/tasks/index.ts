import { rest } from 'msw'
import { ITask } from '../../api/tasks'
import tasks from './tasks.json'

const API_URL = import.meta.env.VITE_API_URL

export const getTasks = rest.get<{}, { limit?: string }, ITask[]>(
  `${API_URL}/tasks`,
  (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get('limit'))
    let _tasks = tasks
    if (limit) _tasks = _tasks.filter((_, index) => index < limit)
    return res(ctx.status(200), ctx.json(_tasks))
  }
)
