import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryModule } from './modules/inventory.module';
import { AppDataSource } from './config/db';

@Controller()
class AppController {
    @Get()
    getHello() {
        return 'REST API';
    }
}

@Module({
    imports: [
        TypeOrmModule.forRoot(AppDataSource),
        InventoryModule,
    ],
    controllers: [AppController],
})
export class AppModule { }

async function createServer() {
    const app = await NestFactory.create(AppModule);

    // Configurar CORS
    app.enableCors({
        origin: 'http://localhost:5000'
    });

    return app;
}

export default createServer;