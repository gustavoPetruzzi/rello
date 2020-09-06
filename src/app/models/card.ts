import { User } from './user';

export interface Card{
    id: string;
    title: string;
    content: string;
    userOwner: User;
    relatedUsers: User[];
}