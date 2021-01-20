type TagItem = {
    name: string;
    value: string;
}
type RecordItem = {
    tags: TagItem;
    notes: string;
    types: string;
    amounts: number;
    createdAt: string;
    id?: number;
}

