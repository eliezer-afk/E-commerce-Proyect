import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../models/product.model';
import { CatalogController } from '../controllers/catalog.controller';
import { CatalogRoutes } from '../routes/catalog.routes';
import { CatalogService } from '../service/catalog.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [CatalogRoutes],
    providers: [CatalogService, CatalogController]
})
export class CatalogModule {}