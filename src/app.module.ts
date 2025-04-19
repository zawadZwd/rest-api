import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', // nazwa kontenera z docker-compose
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true, // tylko do dev, NIE na produkcji
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
