import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AbilitiesService } from './abilities.service';
import { PokemonsService } from 'src/pokemons/pokemons.service';

@Controller('abilities')
export class AbilitiesController {
  constructor(private readonly abilitiesService: AbilitiesService,
              private readonly pokemonService: PokemonsService
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return await this.abilitiesService.findAll();
  }

  @Get('pokemons/:ability')
  @HttpCode(HttpStatus.OK)
  async findAllPokemonsWithAbility(@Param('ability') ability: string) {
    return await this.pokemonService.findAllWithAbility(ability);
  }

}
