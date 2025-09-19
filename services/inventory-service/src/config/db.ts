import { Inventory } from '../models/inventory.model';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Inventory],
    synchronize: true,
    logging: false,
};

