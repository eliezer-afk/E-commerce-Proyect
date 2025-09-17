import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CatalogController } from '../controllers/catalog.controller';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

@Controller('catalog')
export class CatalogRoutes {
    constructor(private readonly catalogController: CatalogController) {}

    @Get('products')
    async getProducts() {
        return this.catalogController.getAllProducts();
    }
    
    @Post('products')
    async createProduct(@Body() createProductDto: CreateProductDto) {
        return this.catalogController.createProduct(createProductDto);
    }

    @Get('products/:id')
    async getProductById(@Param('id') id: number) {
        return this.catalogController.getProductById(id);
    }

    @Put('products/:id')
    async updateProduct(
        @Param('id') id: number,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return this.catalogController.updateProduct(id, updateProductDto);
    }

    @Delete('products/:id')
    async deleteProduct(@Param('id') id: number) {
        return this.catalogController.deleteProduct(id);
    }
}