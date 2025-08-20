import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ConflictException, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';

export function handlePrismaError(error: unknown) {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        throw new ConflictException('A record with the same unique value already exists.');
      case 'P2025':
        throw new NotFoundException('The requested record was not found.');
      default:
        throw new HttpException('An unexpected database error occurred.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  throw error;
}