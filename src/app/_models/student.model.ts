export interface IStudent{
    Id: number;
    Name: string;
    Class: string;
}


export class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}

export enum Role{
    Admin = "admin",
    Student = 'Student',
    Teacher = 'Teacher'
}



