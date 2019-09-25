export class User {
    id: number;
    name: string;
    picture: string;
    login: string;
    email: string;
    location: string;
}

export interface ProgrammingLanguages {
    name: string;
}

export interface Project {
    name: string;
    description: string;
    programmingLanguages: Array<ProgrammingLanguages>;
}



