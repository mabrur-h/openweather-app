import {BadRequestException, Injectable} from '@nestjs/common';
import axios, {AxiosInstance} from 'axios';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class WeatherService {
    private client: AxiosInstance;

    constructor(
        private configService: ConfigService
    ) {
        this.client = axios.create({
            baseURL: configService.get('WEATHER_URL'),
            params: {
                units: 'metric',
                exclude: 'current',
                appid: configService.get('APPID')
            }
        })
    }

    async getWeather(lat, lon, date): Promise<Object> {
        const startDate = new Date()
        let endDate = new Date()
        endDate.setDate(endDate.getDate() + 7);

        if (new Date(date) > endDate || new Date(date) < startDate)
            throw new BadRequestException(`Date must be within last 7 days`)

        const res = await this.client.get('onecall', {
            params: {
                lat,
                lon,
            }
        });
        res.data.daily = this.findDate(res.data.daily, new Date(date).getDate());
        return res.data
    }

    findDate(data, day): Promise<Object> {
        return data.filter(el => {
            return new Date(el.dt * 1000).getDate() == day
        })
    }
}
