import type Buffer from "node:buffer";

export class Post { _PostID: number;
    _CreateAt: string;
    _AccountID: number;
    _Emotes: EmotePost[];
    _Comments: Comment[];

    constructor(PostID: number, CreateAt: string, AccountID: number, Emotes: EmotePost[], Comments: Comment[]) {
        this._PostID = PostID;
        this._CreateAt = CreateAt;
        this._AccountID = AccountID;
        this._Emotes = Emotes;
        this._Comments = Comments;
    }
}

export class EmotePost {
    OwnerID: number;
    Emoji: string;

    constructor(OwnerID: number, Emoji: string) {
        this.OwnerID = OwnerID;
        this.Emoji = Emoji;
    }
}

export class Comment {
    _CommentID: number;
    _CreateAt: string;
    _AccountID: number;
    _Emotes: EmoteComment[];
    _Replies: ReplyComment[];

    constructor(CommentID: number, CreateAt: string, AccountID: number, Emotes: EmoteComment[], Replies: ReplyComment[]) {
        this._CommentID = CommentID;
        this._CreateAt = CreateAt;
        this._AccountID = AccountID;
        this._Emotes = Emotes;
        this._Replies = Replies;
    }
}

export class EmoteComment {
    OwnerID: number;
    Emoji: string;

    constructor(OwnerID: number, Emoji: string) {
        this.OwnerID = OwnerID;
        this.Emoji = Emoji;
    }
}

export class ReplyComment {
    _OriginCommentID: number;
    _ReplyCommentID: number;
    _Content: string;
    _AttachFile: Buffer;

    constructor(OriginCommentID: number, ReplyCommentID: number, Content: string, AttachFile: Buffer) {
        this._OriginCommentID = OriginCommentID;
        this._ReplyCommentID = ReplyCommentID;
        this._Content = Content;
        this._AttachFile = AttachFile;
    }
}
