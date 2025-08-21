import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaRepository } from 'src/prisma/prisma.repository';
import { ReadPokemonDto } from './dto/read-pokemon.dto';
import { handlePrismaError } from 'src/common/utils/prisma-error.util';
import { Prisma } from 'generated/prisma';

type PokemonWithAbilities = Prisma.PokemonGetPayload<{
  include: { abilities: true }
}>;

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaRepository) {}

  private mapToReadPokemonDto(pokemon: PokemonWithAbilities): ReadPokemonDto {
    const pokemonDto = new ReadPokemonDto();
    pokemonDto.uuid = pokemon.uuid;
    pokemonDto.name = pokemon.name;
    pokemonDto.type = pokemon.type;
    pokemonDto.generation = pokemon.generation;
    pokemonDto.imageUrl = pokemon.imageUrl
    pokemonDto.abilities = pokemon.abilities.map(ability => ability.name);
    return pokemonDto;
  }

  async create(createPokemonDto: CreatePokemonDto) {
    const { abilities, ...pokemonData } = createPokemonDto;

    try {
      const createdPokemon = await this.prisma.pokemon.create({
        data: {
          ...pokemonData,
          abilities: {
            connectOrCreate: abilities.map(name => ({
              where: { name },
              create: { name },
            })),
          },
        },
        include: { abilities: true },
      });

      return this.mapToReadPokemonDto(createdPokemon);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async findAll() {
    try {
      const pokemons = await this.prisma.pokemon.findMany({
        include: { abilities: true },
      });
      return pokemons.map(this.mapToReadPokemonDto);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async findAllWithAbility(ability: string) {
    try {
      const pokemons = await this.prisma.pokemon.findMany({
        where: {
          abilities: {
            some: {
              name: ability,
            },
          },
        },
        include: { abilities: true },
      });
      return pokemons.map(this.mapToReadPokemonDto);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async findOne(pokemonId: number) {
    try {
      const pokemon = await this.prisma.pokemon.findUniqueOrThrow({
        where: { id: pokemonId },
        include: { abilities: true }
      });
      return this.mapToReadPokemonDto(pokemon);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async update(pokemonId: number, updatePokemonDto: UpdatePokemonDto) {
    try {
      const { abilities, ...pokemonData } = updatePokemonDto;

      const newPokemonData: any = {
        ...pokemonData,
      };

      if (abilities !== undefined) {
        newPokemonData.abilities = {
          connectOrCreate: abilities.map(name => ({
            where: { name },
            create: { name },
          })),
        };
      }

      const updatedPokemon = await this.prisma.pokemon.update({
        where: { id: pokemonId },
        data: newPokemonData,
        include: { abilities: true },
      });

      return this.mapToReadPokemonDto(updatedPokemon);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async remove(pokemonId: number) {
    try {
      const deletedPokemon = await this.prisma.pokemon.delete({
        where: { id: pokemonId },
        include: { abilities: true },
      });
      return this.mapToReadPokemonDto(deletedPokemon);
    } catch (e) {
      handlePrismaError(e);
    }
  }
}