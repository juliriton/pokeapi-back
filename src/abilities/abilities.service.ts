import { Injectable } from '@nestjs/common';
import { handlePrismaError } from 'src/common/utils/prisma-error.util';
import { ReadAbilityDto } from './dto/read-ability.dto';
import { Ability } from 'generated/prisma';
import { PrismaRepository } from 'src/prisma/prisma.repository';

@Injectable()
export class AbilitiesService {
  constructor(private prisma: PrismaRepository) {}

  private mapToReadAbilityDto(ability: Ability): ReadAbilityDto {
    const abilityDto = new ReadAbilityDto();
    abilityDto.name = ability.name;
    return abilityDto;
  }

  async findAll() {
    try {
      const abilities = await this.prisma.ability.findMany();
      return abilities.map((ability) => this.mapToReadAbilityDto(ability)); 
    } catch (e) {
      handlePrismaError(e);
    }
  }
}
