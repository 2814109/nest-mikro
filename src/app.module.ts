import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookEntity } from './entities/book.entity';
import { AuthorEntity } from './entities/author.entity';
@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [BookEntity, AuthorEntity],
      dbName: 'postgres',
      password: 'postgres',
      type: 'postgresql',
      host: 'localhost',
      port: 5432,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
