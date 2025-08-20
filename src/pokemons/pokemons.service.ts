import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaRepository } from 'src/prisma/prisma.repository';
import { ReadPokemonDto } from './dto/read-pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaRepository) {}

  create(createPokemonDto: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data: createPokemonDto
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany();
  }

  async findOne(pokemonId: number) {
    const pokemon = await this.prisma.pokemon.findUnique({
      where: {
        id: pokemonId
      }
    });

    if (!pokemon) {
      return null;
    }

    const pokemonDto = new ReadPokemonDto();
    pokemonDto.name = pokemon.name;
    pokemonDto.generation = pokemon.generation;

    return pokemonDto;
  }

  update(pokemonId: number, updatePokemonDto: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: {
        id: pokemonId
      },
      data: updatePokemonDto
    })
  }

  remove(pokemonId: number) {
    return this.prisma.pokemon.delete({
      where: {
        id: pokemonId
      }
    })
  }
}
