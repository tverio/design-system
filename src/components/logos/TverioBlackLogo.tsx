import * as React from "react";
import {Image} from "react-figma";
// @ts-ignore
import * as logo from "./images/tverio-black-logo.png"

export const TverioBlackLogo = (props) => {
    return <Image source={logo} resizeMode={"contain"} style={[{width: 200, height: 200}, props.style]} />
}
