import { Axios, AxiosError } from 'axios'
import axios from '../helper/axios'

export interface ITask {
  id: number
  title: string
  description: string
}

export const getTasks = async (limit: number) => {
  try {
    const tasks = (
      await axios.get<ITask[]>('tasks', {
        params: {
          limit: limit
        }
      })
    ).data
    return tasks
  } catch (error) {
    throw error
  }
}
