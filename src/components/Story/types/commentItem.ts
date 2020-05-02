type CommentItem = {
    id: number;
    by?: string;
    kids?: number[];
    parent: number;
    text?: string;
    time?: number;
    type?: string;
    deleted?: boolean;
};

export default CommentItem;
