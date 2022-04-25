import {Args, Query, Resolver} from "@nestjs/graphql";
import {WeatherType} from "./weather.type";
import {WeatherService} from "./weather.service";
import {GetWeatherDto} from "./dto/get-weather.dto";
import {BadRequestException} from "@nestjs/common";

@Resolver(of => WeatherType)
export class WeatherResolver {
    constructor(private weatherService: WeatherService) {
    }

    @Query(returns => WeatherType)
    weather(
        @Args('weatherInput') weatherInput: GetWeatherDto
    ): Promise<WeatherType> {
        const { lat, lon, date } = weatherInput;
        return this.weatherService.getWeather(lat, lon, date);
    }
}
