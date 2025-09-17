import { Product } from '../models/product.model';
import { CatalogService } from '../service/catalog.service';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

export class CatalogController {
    constructor(private readonly catalogService: CatalogService) {}

    async getAllProducts(): Promise<Product[]> {
        return this.catalogService.findAll();
    }
    
    async createProduct(productData: CreateProductDto): Promise<Product> {
        return this.catalogService.createProduct(productData);
    }

    async getProductById(id: number): Promise<Product> {
        return this.catalogService.findOne(id);
    }

    async updateProduct(id: number, productData: UpdateProductDto): Promise<Product> {
        return this.catalogService.updateProduct(id, productData);
    }

    async deleteProduct(id: number): Promise<void> {
        return this.catalogService.deleteProduct(id);
    }
}