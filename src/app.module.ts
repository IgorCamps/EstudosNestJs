import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { CatsController } from './cats/cats.controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CrudModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
