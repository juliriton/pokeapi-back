import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @Transform(({ value }) => value.trim())
    name: string

    @Min(0)
    generation: number
}
