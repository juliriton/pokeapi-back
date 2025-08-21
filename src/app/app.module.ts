import { Module } from '@nestjs/common';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { TrainersModule } from 'src/trainers/trainers.module';
import { AbilitiesModule } from 'src/abilities/abilities.module';
import { UploadModule } from 'src/upload/upload.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PokemonsModule, 
    TrainersModule, 
    AbilitiesModule, 
    UploadModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', '..', 'uploads'),
      serveRoot: '/uploads',
      serveStaticOptions: {
        index: false,
        fallthrough: false
      }
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}