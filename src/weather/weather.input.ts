import {Field, InputType} from "@nestjs/graphql";
import {IsDateString, IsNumber} from "class-validator";

@InputType()
export class WeatherInput {
    @IsNumber()
    @Field()
    lat: number

    @IsNumber()
    @Field()
    lon: number

    @IsDateString()
    @Field({defaultValue: new Date(Date.now())})
    date: string
}