import { AxiosError } from "axios";
import useSWR from "swr";
import { getTasks, ITask } from "../api/tasks";

export const useTasks = (limit?: number) => {
  const { data, error } = useSWR([limit], getTasks);
  const _error: AxiosError | undefined = error;
  return {
    tasks: data,
    isLoading: !_error && !data,
    error: _error,
  };
};
