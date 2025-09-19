import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    NotFoundException,
} from '@nestjs/common';
import { InventoryService } from '../service/inventory.service';
import { Inventory } from '../models/inventory.model';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    getAll(): Promise<Inventory[]> {
        return this.inventoryService.find();
    }

    @Get(':id')
    async getOne(@Param('id') id: number): Promise<Inventory> {
        const item = this.inventoryService.findOne(id);
        if (!item) throw new NotFoundException('Inventory not found');
        return item;
    }

    @Post()
    create(@Body() data: Partial<Inventory>): Promise<Inventory> {
        return this.inventoryService.create(data);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() data: Partial<Inventory>,
    ): Promise<Inventory> {
        const updated = this.inventoryService.update(id, data);
        if (!updated) throw new NotFoundException('Inventory not found');
        return updated;
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<boolean> {
        this.inventoryService.remove(id);
        return true;
    }
}
