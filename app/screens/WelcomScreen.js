import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';


function WelcomScreen(props) {
    return (
        <ImageBackground
        blurRadius={2}
        style={styles.background}
        source={require("../assets/background.jpg")}>
             <View style={styles.logoContainer}>
                <Image source={require("../assets/logo-red.png")} 
                style={styles.logo}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
             </View>
             <View style={styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
             </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    logo: {
        width: 100,
        height: 100,
       
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight:"bold",
        paddingVertical: 20
    }
})

export default WelcomScreen;