import { Injectable } from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { PrismaRepository } from 'src/prisma/prisma.repository';
import { handlePrismaError } from 'src/common/utils/prisma-error.util';
import { Trainer } from 'generated/prisma';
import { ReadTrainerDto } from './dto/read-trainer.dto';

@Injectable()
export class TrainersService {
  constructor(private prisma: PrismaRepository) {}

  private mapToReadTrainerDto(trainer: Trainer): ReadTrainerDto {
    const trainerDto = new ReadTrainerDto();
    trainerDto.uuid = trainer.uuid;
    trainerDto.name = trainer.name;
    trainerDto.type = trainer.type;
    trainerDto.imageUrl = trainer.imageUrl
    return trainerDto;
  }

  async create(createTrainerDto: CreateTrainerDto) {
    try {
      const createdTrainer = await this.prisma.trainer.create({
        data: createTrainerDto
      });
      return this.mapToReadTrainerDto(createdTrainer);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async findAll() {
    try {
      const trainers = await this.prisma.trainer.findMany();
      return trainers.map((trainer) => this.mapToReadTrainerDto(trainer));
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async findOne(trainerId: number) {
    try {
      const trainer = await this.prisma.trainer.findUniqueOrThrow({
        where: {
          id: trainerId
        }
      });
      return this.mapToReadTrainerDto(trainer);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async update(trainerId: number, updateTrainerDto: UpdateTrainerDto) {
    try {
      const updatedTrainer = await this.prisma.trainer.update({
        where: {
          id: trainerId
        },
        data: updateTrainerDto
      });
      return this.mapToReadTrainerDto(updatedTrainer);
    } catch (e) {
      handlePrismaError(e); 
    }
  }

  async remove(trainerId: number) {
    try {
      const deletedTrainer = await this.prisma.trainer.delete({
        where: {
          id: trainerId
        }
      });
      return this.mapToReadTrainerDto(deletedTrainer);
    } catch (e) {
      handlePrismaError(e);
    }
  }
  
}
