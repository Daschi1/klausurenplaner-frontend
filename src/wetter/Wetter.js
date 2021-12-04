import { faCloud, faCloudRain, faCloudShowersHeavy, faPooStorm, faSmog, faSnowflake, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Wetter.css";

class Wetter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            main: props.main,
            degrees: props.degrees
        };
    }

    icon() { let icon;
        switch (this.state.main) {
            case "Thunderstorm":
                icon=faPooStorm;
                break;
            case "Drizzle":
                icon=faCloudRain;
                break;
            case "Rain":
                icon=faCloudShowersHeavy;
                break;
            case "Snow":
                icon=faSnowflake;
                break;
            case "Fog":
                icon=faSmog;
                break;
            case "Clear":
                icon=faSun;
                break;
            case "Clouds":
                icon=faCloud;
                break;
            default:
                break;
        }
        return (
            <FontAwesomeIcon className={"wetterIcon"} icon={icon}/>
        );
    };

    render() {
        return (
            <div className={"wetter"}>
                {this.icon()}
                <h4 className={"mainWetter"}>{this.state.main}</h4>
                <h4 className={"degreesWetter"}>{this.state.degrees}</h4>
            </div>
        );
    }
}

export default Wetter;