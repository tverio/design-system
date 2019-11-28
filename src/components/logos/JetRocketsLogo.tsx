import * as React from "react";
import {Image} from "react-figma";
// @ts-ignore
import * as logo from "./images/JetRockets-logo.png"

export const JetRocketsLogo = () => {
    return <Image source={logo} resizeMode={"contain"} style={{width: 120, height: 50}} />
}
