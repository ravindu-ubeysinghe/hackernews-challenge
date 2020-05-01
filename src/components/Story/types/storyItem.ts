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
};

export default StoryItem;
