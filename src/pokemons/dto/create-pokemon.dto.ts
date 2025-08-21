import { Transform } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUrl, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
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

    @Min(1)
    generation: number

    @IsNotEmpty()
    @IsString()
    imageUrl: string;

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    abilities: string[];
}
