import * as BaseLocation from "expo-location";
import {Alert} from "react-native";

export default class Location {
    /**
     * 위치 서비스를 사용하는 권한을 얻습니다.
     *
     * @returns {Promise<void>}
     */
    static getPermission() {
        return BaseLocation.requestPermissionsAsync();
    }

    /**
     * 현재 위치의 위도와 경도를 반환합니다.
     *
     * @return {Promise<string[]>}
     */
    static get() {
        return this.getPermission()
            .then(async () => {
                const {
                    coords: {latitude, longitude}
                } = await BaseLocation.getCurrentPositionAsync();

                return [latitude, longitude];
            })
            .catch(() => Alert.alert('Can\'t find you.', 'So sad'));
    }
}