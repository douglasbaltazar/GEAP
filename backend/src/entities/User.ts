import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Project } from "./Project";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type: 'text'
    })
    name: string;

    @Column({
        type: 'text'
    })
    email: string;

    @Column({
        type: 'text'
    })
    password: string;

    @OneToMany(() => Project, project => project.sentBy)
    projects: Array<Project>
}