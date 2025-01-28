create table Post
(
    PostID integer primary key autoincrement,
    CreateAt datetime default (datetime('now')),
    AccountID integer not null
);
create table EmotePost
(
    OwnerID integer not null ,
    PostID integer,
    Emoji text,
    foreign key (PostID) references Post(PostID )
);
create table Comment
(
    CommentID integer primary key autoincrement,
    CreateAt date default (datetime('now')),
    AccountID integer not null ,
    PostID integer,
    foreign key (PostID) references Post(PostID)
);
create table EmoteComment
(
    OwnerID integer not null ,
    CommentID integer,
    Emoji text,
    foreign key (CommentID) references Comment(CommentID)
);
create table ReplyComment
(
    OriginCommentID integer not null ,
    ReplyCommentID integer not null
);
create table ContentComment
(
    CommentID integer ,
    Content text ,
    AttachFile blob,
    foreign key (CommentID) references Comment(CommentID)
);
create table Follower
(
    OwnerID integer not null ,
    TargetID integer not null
);
