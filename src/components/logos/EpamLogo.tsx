import * as React from "react";
import {Image} from "react-figma";
// @ts-ignore
import * as logo from "./images/Epam_Systems-logo.png"

export const EpamLogo = () => {
    return <Image source={logo} resizeMode={"contain"} style={{width: 120, height: 44}} />
}
