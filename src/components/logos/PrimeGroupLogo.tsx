import * as React from "react";
import {Image} from "react-figma";
// @ts-ignore
import * as logo from "./images/PrimeGroup-logo.png"

export const PrimeGroupLogo = () => {
    return <Image source={logo} resizeMode={"contain"} style={{width: 110, height: 32}} />
}
