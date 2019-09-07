import React from "react";
import Weather from "./Weather";
import axios from "axios";
import {stringify} from "query-string";
import Loading from "./Loading";
import Location from "./Location";

export default class App extends React.Component {
    static OPENWEATHERMAP_KEY = '7ff3c3145761ca9fd4179dd880ae574c';

    static OPENWEATHERMAP_GET_WEATHER_URI = 'http://api.openweathermap.org/data/2.5/weather';

    state = {
        isLoading: true
    };

    componentDidMount() {
        setInterval(async () =>
            this.setWeather(
                ...await Location.get()
            )
        , 10000);
    }

    /**
     * 주어진 위도와 경도의 날씨를 저장합니다.
     *
     * @param {string} latitude
     * @param {string} longitude
     * @returns {Promise<void>}
     */
    async setWeather(latitude, longitude) {
        const {
            data: {
                main: { temp },
                weather
            }
        } = await axios.get(`${App.OPENWEATHERMAP_GET_WEATHER_URI}?${stringify({
            lat: latitude,
            lon: longitude,
            units: 'metric',
            APPID: App.OPENWEATHERMAP_KEY
        })}`);

        this.setState({
            isLoading: false,
            temp,
            condition: weather[0].main
        });
    }

    render() {
        const { isLoading, temp, condition } = this.state;

        return (
            isLoading
                ? <Loading />
                : <Weather temp={temp} condition={condition} />
        );
    }
}