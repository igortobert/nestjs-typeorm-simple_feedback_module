import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Timestamp, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    title: string

    @Column('text')
    description: string

    @Column('text')
    location: string

    @Column('text')
    url: string

    @Column({ type: 'bool', default: false })
    isSent?: boolean

    @Column({ type: 'int' })
    emmiterId: number

    @CreateDateColumn({ select: false })
    created?: Timestamp;
}