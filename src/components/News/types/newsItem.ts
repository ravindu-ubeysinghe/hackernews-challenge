type NewsItem = {
    id: string;
    by?: string;
    descendants?: string;
    kids?: string[];
    score?: number;
    time?: number;
    title?: string;
    type?: string;
    url?: string;
};

export default NewsItem;
