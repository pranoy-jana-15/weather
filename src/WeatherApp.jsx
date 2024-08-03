import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
import "./WeatherApp.css"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 46,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="bigbox" style={{textAlign: "center"}}>
            <h1 style={{ color: "#063728"}}>Weathero App</h1>
            <SearchBox updateInfo={updateInfo } />
            <InfoBox info={weatherInfo} />
            <h3 style={{ color: "#F83A53" }}>Made with &#10084; by Pranoy</h3>
        </div>
    );
}