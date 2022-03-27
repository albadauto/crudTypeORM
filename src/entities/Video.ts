import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Category } from "./Category";

@Entity("videos")
export class Video{
    @PrimaryColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    duration:number;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category; //Refencia outra tabela (relacionamento)

}