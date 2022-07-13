import { Button, VStack, Text, Icon, HStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import "weather-react-icons/lib/css/weather-icons.css";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from "react-router-dom";
import { WeatherIcon } from "weather-react-icons";

interface WeatherData {
    city: {
        id: number;
        name: string;
        country: string;
        coord: {
            lat: number;
            lon: number;
        };
        timezone: number;
        sunrise: number;
        sunset: number;
    };
    cnt: number;
    cod: string;
    list: Array<{
        clouds: {
            all: number;
        };
        dt: number;
        dt_txt: string;
        main: {
            feels_like: number;
            humidity: number;
            pressure: number;
            temp: number;
            temp_max: number;
            temp_min: number;
        };
        pop: number;
        sys: {
            pod: string;
        };
        visibility: number;
        weather: Array<{
            description: string;
            icon: string;
            id: number;
            main: string;
        }>;
        wind: {
            speed: number;
            deg: number;
            gust: number;
        };
    }>;
}

const WeatherButton = () => {
    const [currentConditions, setCurrentConditions] = useState<WeatherData>();
    // const convertKelvinToFahrenheit = (kelvin?: number) => {
    //     if (kelvin) {
    //         return Math.round((kelvin * 9) / 5 - 459.67);
    //     }
    //     return "loading";
    // };
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "32b9f13634msha69678ce2655e1ap1711c9jsn8befea941d17",
            "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        },
    };
    useEffect(() => {
        fetch(
            "https://community-open-weather-map.p.rapidapi.com/forecast?q=reston%2Cus",
            options
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setCurrentConditions(response);
            })
            .catch((err) => console.error(err));
    }, []);
    if (currentConditions) {
        return (
            <Button flex={1} height="100%" as={Link} to="/weather">
                <VStack spacing={2}>
                    {/* change icon depending on current weather */}
                    <HStack as={motion.div} layoutId="weather-text">
                        <WeatherIcon iconId={802} name="owm" night />
                        <Text fontSize="4xl">Weather</Text>
                    </HStack>
                    <HStack as={motion.div}>
                        <VStack>
                            <Text fontSize="lg">
                                feels like:
                                {currentConditions?.list[0]?.main?.feels_like}
                            </Text>
                        </VStack>
                        {/* <VStack>
                        <Text>
                            precipitation: {currentConditions?.list[0].pop}
                        </Text>
                        <Text>
                            humidity: {currentConditions?.list[0].main.humidity}
                            %
                        </Text>
                        <Text>
                            wind: {currentConditions?.list[0].wind.speed} mph
                        </Text>
                    </VStack> */}
                    </HStack>
                </VStack>
            </Button>
        );
    }
    return <></>;
};

export default WeatherButton;
