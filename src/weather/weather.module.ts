import {Module} from '@nestjs/common';
import {WeatherResolver} from "./weather.resolver";
import { WeatherService } from './weather.service';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule
    ],
    providers: [
        WeatherResolver,
        WeatherService
    ]
})
export class WeatherModule {

}
