export interface Todo{
    name: string;
    description?: string;
    status?: Status | null;
    id?: number;
}

export enum Status{
    open,
    onProgress,
    done
}

export function getStatus(status?: string | null){
    switch (status){
        case 'Done':
            return Status.done;
        case 'On Progress':
            return Status.onProgress;
        case 'Open':
            return Status.open;
        default:
            return null;
    }
}