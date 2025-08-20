import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';

@Module({
  imports: [PrismaModule],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class PokemonsModule {}
