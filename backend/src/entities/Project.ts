import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity("projects")
export class Project {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type: 'text'
    })
    name: string;

    @Column({
        type: 'text'
    })
    url: string;

    @ManyToOne(() => User, user => user.projects)
    @JoinColumn({ name: "sentby"})
    sentBy: Project
}