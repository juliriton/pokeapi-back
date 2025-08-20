import { Module } from '@nestjs/common';
import { AbilitiesService } from './abilities.service';
import { AbilitiesController } from './abilities.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PokemonsModule } from 'src/pokemons/pokemons.module';

@Module({
  imports: [PrismaModule, PokemonsModule],
  controllers: [AbilitiesController],
  providers: [AbilitiesService],
})
export class AbilitiesModule {}
