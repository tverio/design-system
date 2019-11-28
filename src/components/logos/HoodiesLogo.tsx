import * as React from "react";
import {Image} from "react-figma";
// @ts-ignore
import * as logo from "./images/Hoodies-logo.png"

export const HoodiesLogo = () => {
    return <Image source={logo} resizeMode={"contain"} style={{width: 80, height: 43}} />
}
