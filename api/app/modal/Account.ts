import * as Buffer from "node:buffer";
import type {Post} from "./Post.ts";

export class Account {
    AccountID: number;
    CreateAt: string;
    IsLooked: boolean;
    Name: string;
    Avatar: Buffer;
    BirthDay: string;
    Introduction: Buffer;
    Frame: Buffer;
    Follower: number[];
    Profile: AccountProfile;
    Posts: Post[];

    constructor(AccountID: number, CreateAt: string, IsLooked: boolean, Name: string, Avatar: Buffer, BirthDay: string, Introduction: Buffer, Frame: Buffer, Follower: number[], Profile: AccountProfile, Posts: Post[]) {
        this.AccountID = AccountID;
        this.CreateAt = CreateAt;
        this.IsLooked = IsLooked;
        this.Name = Name;
        this.Avatar = Avatar;
        this.BirthDay = BirthDay;
        this.Introduction = Introduction;
        this.Frame = Frame;
        this.Follower = Follower;
        this.Profile = Profile;
        this.Posts = Posts;
    }

}
export class AccountProfile {

}

