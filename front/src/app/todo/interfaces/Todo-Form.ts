import { Status } from "./Todo";

export interface TodoForm{
    id: number;
    name?: string;
    description?: string;
    status?: Status | null;
}