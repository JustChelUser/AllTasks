import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    age!: number

    @Column({unique: true,})
    tel!: string

    @Column()
    city!: string
}
