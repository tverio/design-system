import * as React from "react";
import {Image} from "react-figma";
// @ts-ignore
import * as logo from "./images/tverio-white-logo.png"

export const TverioWhiteLogo = () => {
    return <Image source={logo} resizeMode={"contain"} style={{width: 200, height: 200}} />
};
