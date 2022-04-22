import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType('Weather')
export class WeatherType {
    @Field()
    lat: number;

    @Field()
    lon: number;

    @Field()
    timezone: string

    @Field()
    timezone_offset: number

    @Field(type => [DailyType])
    daily: object[]
}

@ObjectType()
export class DailyType {
    @Field()
    dt: number

    @Field()
    sunrise: number

    @Field()
    sunset: number

    @Field()
    moonrise: number

    @Field()
    moonset: number

    @Field()
    moon_phase: number

    @Field(type => tempType)
    temp: object

    @Field(type => feelsLikeType)
    feels_like: object

    @Field()
    pressure: number

    @Field()
    humidity: number

    @Field()
    dew_point: number

    @Field()
    wind_speed: number

    @Field()
    wind_deg: number

    @Field()
    wind_gust: number

    @Field(type => WeatherType)
    weather: object[]

    @Field()
    clouds: number

    @Field()
    pop: number

    @Field()
    uvi: number
}

@ObjectType()
export class tempType {
    @Field()
    day: number

    @Field()
    min: number

    @Field()
    max: number

    @Field()
    night: number

    @Field()
    eve: number

    @Field()
    morn: number
}

@ObjectType()
export class feelsLikeType {
    @Field()
    day: number

    @Field()
    night: number

    @Field()
    eve: number

    @Field()
    morn: number
}

@ObjectType()
export class weatherType {
    @Field()
    id: number

    @Field()
    main: string

    @Field()
    description: string

    @Field()
    icon: string
}