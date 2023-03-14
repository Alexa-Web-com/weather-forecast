

export const LANG = "en"

export const getUrl = (lat, lng) => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode,pressure_msl,cloudcover,windspeed_10m,winddirection_10m&daily=apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=auto`
}
