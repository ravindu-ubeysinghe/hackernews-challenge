type StoryItem = {
    id: number;
    by?: string;
    descendants?: number;
    kids?: number[];
    score?: number;
    time?: number;
    title?: string;
    type?: string;
    url?: string;
    deleted?: boolean;
};

export default StoryItem;
