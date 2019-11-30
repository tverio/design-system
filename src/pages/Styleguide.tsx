import * as React from 'react';
import {Page, StyleSheet, Text, Frame, Component, View} from "react-figma";
import {sizing} from "../tokens/sizing";
import {AccentureLogo} from "../components/logos/AccentureLogo";
import {EpamLogo} from "../components/logos/EpamLogo";
import {HoodiesLogo} from "../components/logos/HoodiesLogo";
import {JetRocketsLogo} from "../components/logos/JetRocketsLogo";
import {PrimeGroupLogo} from "../components/logos/PrimeGroupLogo";
import {TverioBlackLogo} from "../components/logos/TverioBlackLogo";
import {TverioWhiteLogo} from "../components/logos/TverioWhiteLogo";
import {typography} from "../tokens/typography";

export const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    heading1: {
        fontFamily: "FuturaMediumC",
        fontSize: 14
    },
    heading2: {
        fontFamily: "FuturaBookC",
        fontSize: 14
    },
    sizingBlock: {
        backgroundColor: "#C4C4C4"
    },
    logoContainer: {
        marginLeft: 10
    },
    logosContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export const Styleguide = () => {
    return (
        <Page isCurrent name="Styleguide">
            <Frame name="Styleguide" style={styles.container}>
                <Text style={styles.heading1}>Styleguide</Text>
                <Text style={[styles.heading2, {marginTop: 10}]}>Sizing</Text>
                {Object.keys(sizing).map((sizingKey) => (
                    <Component key={sizingKey} name={sizingKey} style={{marginTop: 10}}>
                        <View style={[styles.sizingBlock, {width: sizing[sizingKey], height: sizing[sizingKey]}]} />
                    </Component>
                ))}
                <Text style={[styles.heading2, {marginTop: 20}]}>Logos</Text>
                <View style={styles.logosContainer}>
                    <Component name="Accenture-logo">
                        <AccentureLogo />
                    </Component>
                    <Component name="Epam-logo" style={styles.logoContainer}>
                        <EpamLogo />
                    </Component>
                    <Component name="Hoodies-logo" style={styles.logoContainer}>
                        <HoodiesLogo />
                    </Component>
                    <Component name="JetRockets-logo" style={styles.logoContainer}>
                        <JetRocketsLogo />
                    </Component>
                    <Component name="PrimeGroup-logo" style={styles.logoContainer}>
                        <PrimeGroupLogo />
                    </Component>
                </View>
                <View style={[styles.logosContainer, {marginTop: 10}]}>
                    <Component name="Tverio-logo-black">
                        <TverioBlackLogo />
                    </Component>
                    <Component name="Tverio-logo-white" style={{marginLeft: 30}}>
                        <TverioWhiteLogo />
                    </Component>
                </View>
                <Text style={[styles.heading2, {marginTop: 20}]}>Text styles</Text>
                {Object.keys(typography).map((typographyKey) => (
                    <Component key={typographyKey} name={typographyKey} style={{marginTop: 20}}>
                        <Text style={typography[typographyKey]}>{typographyKey}</Text>
                    </Component>
                ))}
            </Frame>
        </Page>
    );
};
