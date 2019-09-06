import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        paddingHorizontal: 20
    },
    icon: {
        marginTop: 10
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    title: {
        color: 'white',
        fontWeight: '300',
        fontSize: 34,
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24
    }
});

class Weather extends React.Component {
    options = {
        Thunderstorm: {
            icon: 'ios-thunderstorm',
            gradients: ['#373B44', '#4286f4'],
            title: '폭풍우가 내리고 있어요',
            subtitle: '우산 꼭 챙기세요'
        },
        Drizzle: {
            icon: 'cloud-drizzle',
            iconTag: Feather,
            gradients: ['#8bf6fe', '#66a6ff'],
            title: '보슬비가 내리고 있어요',
            subtitle: '우산 꼭 챙기세요'
        },
        Rain: {
            icon: 'ios-rainy',
            gradients: ['#00c4fa', '#005aeb'],
            title: '비가 오고 있어요',
            subtitle: '우산 꼭 챙기세요'
        },
        Snow: {
            icon: 'md-snow',
            gradients: ['#7ee2fc', '#bbb8e5'],
            title: '눈이 오고 있어요',
            subtitle: '따뜻하게 입고 우산 챙기세요'
        },
        Clear: {
            icon: 'ios-sunny',
            gradients: ['#ff7300', '#fef352'],
            title: '맑아요',
            subtitle: '산책하기 좋은 날씨에요'
        },
        Clouds: {
            icon: 'md-cloud',
            gradients: ['#d7d2cc', '#2f4250'],
            title: '구름이 많아요',
            subtitle: '비가 올수도 있어요'
        },
        Haze: {
            icon: 'weather-hail',
            iconTag: MaterialCommunityIcons,
            gradients: ['#4ea1b1', '#d39c36'],
            title: '습도가 낮아요',
            subtitle: '공기가 뿌옇게 보일 수 있어요'
        },
        Mist: {
            icon: 'weather-hail',
            iconTag: MaterialCommunityIcons,
            gradients: ['#4ea1b1', '#d39c36'],
            title: '흐려요',
            subtitle: '비가 올 수도 있겠네요'
        },
        Smoke: {
            icon: 'md-cloud',
            gradients: ['#2c3e50', '#bdc3c7'],
            title: '하늘이 뿌옇네요',
            subtitle: ''
        },
        Dust: {
            icon: 'md-cloud',
            gradients: ['#2c3e50', '#fd746c'],
            title: '먼지가 많아요',
            subtitle: '마스크 챙겨요'
        },
        Fog: {
            icon: 'weather-fog',
            iconTag: MaterialCommunityIcons,
            gradients: ['#808080', '#3fada8'],
            title: '안개 자욱하네요',
            subtitle: '습도가 많이 높은가봐'
        },
        Sand: {
            icon: 'weather-windy-variant',
            iconTag: MaterialCommunityIcons,
            gradients: ['#ffd89b', '#19547b'],
            title: '모래바람이 휘날리고 있어요',
            subtitle: '외출을 자제하고 나가시려면 마스크 꼭 챙겨요'
        },
        Ash: {
            icon: 'weather-fog',
            iconTag: MaterialCommunityIcons,
            gradients: ['#808080', '#3fada8'],
            title: '공기에 재가 있어요',
            subtitle: '마스크 챙기세요'
        },
        Squall: {
            icon: 'wind',
            iconTag: Feather,
            gradients: ['#2c3e50', '#4ca1af'],
            title: '돌풍이 불고 있어요',
            subtitle: '마스크 챙기세요'
        },
        Tornado: {
            icon: 'wind',
            iconTag: Feather,
            gradients: ['#2c3e50', '#4ca1af'],
            title: '토네이도 경보에요',
            subtitle: '외출은 자제하세요'
        }
    };

    render() {
        const { temp, condition } = this.props;
        const IconTag = this.options[condition].iconTag || Ionicons;

        return (
            <LinearGradient
                colors={this.options[condition].gradients}
                style={styles.container}>
                    <StatusBar barStyle="light-content" />

                    <View style={styles.halfContainer}>
                        <IconTag name={this.options[condition].icon} size={96} color="white" style={styles.icon} />
                        <Text style={styles.temp}>{Math.round(temp)}°</Text>
                    </View>

                    <View style={{...styles.halfContainer, ...styles.textContainer}}>
                        <Text style={styles.title}>{this.options[condition].title}</Text>
                        <Text style={styles.subtitle}>{this.options[condition].subtitle}</Text>
                    </View>
            </LinearGradient>
        );
    }
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Smoke',
        'Dust',
        'Fog',
        'Sand',
        'Ash',
        'Squall',
        'Tornado'
    ]).isRequired
};

export default Weather;