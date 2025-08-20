import { Module } from '@nestjs/common';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { TrainersModule } from 'src/trainers/trainers.module';
import { AbilitiesModule } from 'src/abilities/abilities.module';

@Module({
  imports: [PokemonsModule, TrainersModule, AbilitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}