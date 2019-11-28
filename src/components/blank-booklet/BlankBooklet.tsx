import * as React from "react";
import {Frame, FRAME_PRESETS, StyleSheet, Image, Text, View} from "react-figma";
import {sizing} from "../../tokens/sizing";
import {TverioBlackLogo} from "../logos/TverioBlackLogo";
import {typography} from "../../tokens/typography";
import {Line} from "react-figma/dist";
// @ts-ignore
import * as headerImage from "./tverio-header.png";

const styles = StyleSheet.create({
    container: {
        justifyContent: ("space-between" as any),
        width: 595,
        height: 842,
        alignItems: ("stretch" as any)
    },
    footer: {
        paddingTop: sizing.M,
        paddingRight: sizing.XL,
        paddingLeft: sizing.XL,
        paddingBottom: sizing.XL,
        flexDirection: ("row" as any),
        justifyContent: ("space-between" as any),
        width: "100%"
    },
    separator: {
        width: "100%"
    },
    lineLabel: {
        alignSelf: ("flex-end" as any),
        marginBottom: sizing.S,
        marginRight: sizing.L
    },
    headerImage: {
        width: "100%",
        height: 156
    }
});

export const BlankBooklet = () => {
    return <Frame preset={FRAME_PRESETS.a4} style={styles.container}>
        <Image source={headerImage} style={styles.headerImage} />
        <View>
            <Text style={[typography.XSmallText, styles.lineLabel]}>Линия отрыва</Text>
            <Line
                name="line"
                strokeWeight={4}
                strokeAlign="CENTER"
                strokes={[{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]}
                strokeCap="SQUARE"
                dashPattern={[2, 10, 2, 10]}
                style={styles.separator}
            />
            <Frame style={styles.footer}>
                <Text style={typography.RegularText}>Опрос</Text>
                <TverioBlackLogo style={{width: 100, height: 100}} />
            </Frame>
        </View>

    </Frame>
};
