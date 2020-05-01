type CommentItem = {
    id: number;
    by?: string;
    kids?: number[];
    parent: number;
    text?: string;
    time?: number;
    type?: string;
};

export default CommentItem;
