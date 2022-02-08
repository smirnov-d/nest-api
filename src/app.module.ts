import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { DepartmentsModule } from './departments/departments.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [CoreModule, ProductsModule, DepartmentsModule, CompaniesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
