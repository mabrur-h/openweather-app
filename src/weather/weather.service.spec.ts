import { Test } from '@nestjs/testing'
import {WeatherService} from "./weather.service";
import {WeatherResolver} from "./weather.resolver";
import {WeatherType} from "./weather.type";

describe('WeatherService', () => {
    let weatherService: WeatherService;
    let weatherResolver: WeatherResolver;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [
                WeatherResolver
            ],
            providers: [
                WeatherService
            ],
        }).compile()

        weatherService = moduleRef.get<WeatherService>(WeatherService);
        weatherResolver = moduleRef.get<WeatherResolver>(WeatherResolver);
    });

    describe('getWeather', () => {
        it('calls weatherService.weather and returns the result',  async () => {
            const res: WeatherType = {
                "lat": 41.3164,
                "lon": 69.2949,
                "timezone": "Asia/Tashkent",
                "timezone_offset": 18000,
                "daily": [
                    {
                        "dt": 1650697200,
                        "clouds": 59,
                        "temp": {
                            "day": 27.57,
                            "min": 17.53,
                            "max": 28.75
                        }
                    }
                ]
            }

            jest.spyOn(weatherService, 'getWeather').mockImplementation(async () => res)

            console.log(res)
        });
    })
})