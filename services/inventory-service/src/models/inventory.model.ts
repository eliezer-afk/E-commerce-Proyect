import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number; // FK al catálogo

    @Column()
    quantity: number;

    @Column({ default: true })
    available: boolean;
}
