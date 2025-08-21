import { Transform } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUrl, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @Transform(({ value }) => value.trim().toLowerCase())
    name: string

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @Transform(({ value }) => value.trim().toLowerCase())
    type: string

    @Min(1)
    generation: number

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @Transform(({ value }) => value.trim().toLowerCase())
    imageUrl: string;

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    @Transform(({ value }) => value.map(ability => ability.trim().toLowerCase()))
    abilities: string[];
}
