export interface Todo{
    name: string;
    description?: string;
    status?: Status | null;
    id?: number;
}

export enum Status{
    open = 'open',
    onProgress = 'onProgress',
    done = 'done'
}

export function getStatus(status?: string | null){
    switch (status){
        case 'done':
            return Status.done;
        case 'onProgress':
            return Status.onProgress;
        case 'open':
            return Status.open;
        default:
            return null;
    }
}