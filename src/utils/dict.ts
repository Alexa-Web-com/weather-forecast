export const languages: string[] = ['en', 'es', 'pl']

interface IWeekDay {
    [key: number]: string;
}

interface ILang {
    headTitle: string;
    headYourCity: string;
    headYourCoordinates: string;
    latitude: string;
    longitude: string;

    byCityNamePlaceholder: string;

    dailyCurrentWeather: string;
    dailyTemperature: string;
    dailyApparentTemperature: string;

    dailySunrise: string;
    dailySunset: string;

    dailyApparentTemperatureMin: string;
    dailyApparentTemperatureMax: string;
    dailyPressure: string;
    dailyWind: string;
    dailyPrecipitation: string;
    dailyPrecipitationProbability: string;

    weekDay: IWeekDay;

    spinnerText: string;
}

interface IDict {
    [key: string]: ILang
}

export const DICT: IDict = {
    en: {
        headTitle: "Your weather",
        headYourCity: "Your city:",
        headYourCoordinates: "Your current location:",
        latitude: "latitude: ",
        longitude: "longitude: ",

        byCityNamePlaceholder: "Enter a city (min. 2 characters)",

        dailyCurrentWeather: "Current weather",
        dailyTemperature: "Temperature:",
        dailyApparentTemperature: "Apparent temperature:",

        dailySunrise: "Sunrise",
        dailySunset: "Sunset",

        dailyApparentTemperatureMin: "Apparent temp. (min): ",
        dailyApparentTemperatureMax: "Apparent temp. (max): ",
        dailyPressure: "Pressure: ",
        dailyWind: "Wind: ",
        dailyPrecipitation: "Precipitation: ",
        dailyPrecipitationProbability: "Precipitation probability: ",

        weekDay: {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
            0: "Sunday",
        },

        spinnerText: "Loading...",
    },

    es: {
        headTitle: "Tu clima",
        headYourCity: "Tu ciudad:",
        headYourCoordinates: "Su ubicación actual:",
        latitude: "latitud: ",
        longitude: "longitud: ",

        byCityNamePlaceholder: "Introduce una ciudad (mín. 2 chars.)",

        dailyCurrentWeather: "Clima actual",
        dailyTemperature: "Temperatura:",
        dailyApparentTemperature: "Temperatura aparente:",

        dailySunrise: "Amanecer",
        dailySunset: "Atardecer",

        dailyApparentTemperatureMin: "Temp. aparente (min): ",
        dailyApparentTemperatureMax: "Temp. aparente (max): ",
        dailyPressure: "Presión: ",
        dailyWind: "Viento: ",
        dailyPrecipitation: "Precipitación: ",
        dailyPrecipitationProbability: "Probabilidad de precipitación: ",

        weekDay: {
            1: "Lunes",
            2: "Martes",
            3: "Miércoles",
            4: "Jueves",
            5: "Viernes",
            6: "Sábado",
            0: "Domingo",
        },

        spinnerText: "Cargando...",
    },

    pl: {
        headTitle: "Twoja pogoda",
        headYourCity: "Twoje miasto:",
        headYourCoordinates: "Twoja aktualna lokalizacja:",
        latitude: "szerokość: ",
        longitude: "długość: ",

        byCityNamePlaceholder: "Wpisz miejscowość (min. 2 znaki)",

        dailyCurrentWeather: "Aktualna pogoda",
        dailyTemperature: "Temperatura:",
        dailyApparentTemperature: "Odczuwalna temperatura:",

        dailySunrise: "Wschód słońca",
        dailySunset: "Zachód słońca",

        dailyApparentTemperatureMin: "Odczuwalna temp. (min): ",
        dailyApparentTemperatureMax: "Odczuwalna temp. (max): ",
        dailyPressure: "Ciśnienie: ",
        dailyWind: "Wiatr: ",
        dailyPrecipitation: "Suma opadów: ",
        dailyPrecipitationProbability: "Prawdopodobieństwo opadów: ",

        weekDay: {
            1: "Poniedziałek",
            2: "Wtorek",
            3: "Środa",
            4: "Czwartek",
            5: "Piątek",
            6: "Sobota",
            0: "Niedziela",
        },

        spinnerText: "Ładuję...",
    },


}

