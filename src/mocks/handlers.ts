import { login, signup } from "./auth";
import { getTasks } from "./tasks";

export const handlers = [login, signup, getTasks];
