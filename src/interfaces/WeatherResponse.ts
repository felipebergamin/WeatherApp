interface CommonProps {
  /** Time of the forecasted data, Unix, UTC */
  dt: number;
  /** Sunrise time, Unix, UTC */
  sunrise: number;
  /** Sunset time, Unix, UTC */
  sunset: number;
  /** Atmospheric pressure on the sea level, hPa */
  pressure: number;
  /** Humidity, % */
  humidity: number;
  /** Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. */
  dew_point: number;
  /** UV index */
  uvi: number;
  /** Cloudiness, % */
  clouds: number;
  /** Average visibility, metres */
  visibility: number;
  /** Wind speed */
  wind_speed: number;
  /** (where available) Wind gust. */
  wind_gust: number;
  /** Wind direction, degrees (meteorological) */
  wind_deg: number;
}

interface WeatherCondition {
  id: number;
  /** Group of weather parameters (Rain, Snow, Extreme etc.) */
  main: string;
  /** Weather condition within the group */
  description: string;
  /** Weather icon id */
  icon: string;
}

interface CurrentWeather extends CommonProps {
  /** Temperature */
  temp: number;
  /** Temperature. This accounts for the human perception of weather. */
  feels_like: number;

  rain: {
    /** (where available) Rain volume for last hour, mm */
    '1h': number;
  };
  snow: {
    /** (where available) Snow volume for last hour, mm */
    '1h': number;
  };
  weather: WeatherCondition[];
}

interface DailyWeather extends CommonProps {
  /** Probability of precipitation */
  pop: number;
  /** Precipitation volume, mm */
  rain: number;
  /** Snow volume, mm */
  snow: number;

  weather: WeatherCondition[];

  temp: {
    /** Morning temperature */
    morn: number;
    /** Day temperature */
    day: number;
    /** Evening temperature */
    eve: number;
    /** Night temperature */
    night: number;
    /** Min daily temperature */
    min: number;
    /** Max daily temperature */
    max: number;
  };

  /** This accounts for the human perception of weather. */
  feels_like: {
    /** Morning temperature */
    morn: number;
    /** Day temperature */
    day: number;
    /** Evening temperature */
    eve: number;
    /** Night temperature */
    night: number;
  };
}

export default interface WeatherResponse {
  /** Geographical coordinates of the location (latitude) */
  lat: number;
  /** Geographical coordinates of the location (longitude)  */
  lon: number;
  /** Timezone name for the requested location */
  timezone: string;
  /** Shift in seconds from UTC */
  timezone_offset: number;

  /** Current weather data API response */
  current: CurrentWeather;
  /** Hourly forecast weather data API response */
  hourly: CurrentWeather[];
  /** Daily forecast weather data API response */
  daily: DailyWeather;
}
