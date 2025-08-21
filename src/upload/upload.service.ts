import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ReadUploadDto } from './dto/read-upload.dto';

@Injectable()
export class UploadService {
  constructor(private readonly configService: ConfigService) {}

  processUploadedFile(file?: Express.Multer.File): ReadUploadDto {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    
    const imageUrl = `/uploads/${file.filename}`;

    const uploadDto = new ReadUploadDto();
    uploadDto.url = imageUrl;

    return uploadDto;
  }
}