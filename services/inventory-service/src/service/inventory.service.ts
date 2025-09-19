import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from '../models/inventory.model';

@Injectable()
export class InventoryService {
    constructor(
        @InjectRepository(Inventory)
        private readonly inventoryRepo: Repository<Inventory>,
    ) { }

    async find(): Promise<Inventory[]> {
        return this.inventoryRepo.find();
    }

    async findOne(id: number): Promise<Inventory | null> {
        return this.inventoryRepo.findOneBy({ id });
    }

    async create(data: Partial<Inventory>): Promise<Inventory> {
        const inv = this.inventoryRepo.create(data);
        return this.inventoryRepo.save(inv);
    }

    async update(id: number, data: Partial<Inventory>): Promise<Inventory | null> {
        const inv = await this.inventoryRepo.findOneBy({ id });
        if (!inv) return null;
        this.inventoryRepo.merge(inv, data);
        return this.inventoryRepo.save(inv);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.inventoryRepo.delete(id);
        return result.affected !== 0;
    }
}