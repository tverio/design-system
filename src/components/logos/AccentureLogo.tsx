import * as React from "react";
import {Image} from "react-figma";
// @ts-ignore
import * as logo from "./images/Accenture-logo.png"

export const AccentureLogo = () => {
    return <Image source={logo} resizeMode={"contain"} style={{width: 130, height: 65}} />
}
