import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerModule } from './owner/owner.module';
import { PetService } from './pet/pet.service';

@Module({
  imports: [
    PetModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pet',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    OwnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
