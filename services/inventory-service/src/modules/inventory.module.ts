import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from '../models/inventory.model';
import { InventoryService } from '../service/inventory.service';
import { InventoryController } from '../controller/inventory.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Inventory])],
    providers: [InventoryService],
    controllers: [InventoryController],
})
export class InventoryModule { }
