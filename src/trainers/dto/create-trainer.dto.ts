import { Transform } from "class-transformer";
import {IsNotEmpty, IsString, IsUrl, MinLength } from "class-validator";

export class CreateTrainerDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @Transform(({ value }) => value.trim())
    name: string

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @Transform(({ value }) => value.trim())
    type: string

    @IsNotEmpty()
    @IsString()
    imageUrl: string;
}
