import React from "react";
import Weather from "./Weather";
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios";
import {stringify} from "query-string";
import Loading from "./Loading";

export default class extends React.Component {
    OPENWEATHERMAP_KEY = '7ff3c3145761ca9fd4179dd880ae574c';

    OPENWEATHERMAP_GET_WEATHER_URI = 'http://api.openweathermap.org/data/2.5/weather';

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    async componentDidMount() {
        this.setWeather(
            ...await this.getLocation()
        );
    }

    /**
     * 위치 서비스를 사용하는 권한을 얻습니다.
     *
     * @returns {Promise<void>}
     */
    getPermissionForLocation() {
        return Location.requestPermissionsAsync();
    }

    /**
     * 현재 위치의 위도와 경도를 반환합니다.
     *
     * @return {Promise<string[]>}
     */
    getLocation() {
        return this.getPermissionForLocation()
            .then(async () => {
                const {
                    coords: {latitude, longitude}
                } = await Location.getCurrentPositionAsync();

                return [latitude, longitude];
            })
            .catch(() => Alert.alert('Can\'t find you.', 'So sad'));
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
        } = await axios.get(`${this.OPENWEATHERMAP_GET_WEATHER_URI}?${stringify({
            lat: latitude,
            lon: longitude,
            units: 'metric',
            APPID: this.OPENWEATHERMAP_KEY
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