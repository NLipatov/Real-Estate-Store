import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.png")}>
            
            <Image 
            style={styles.logo}
            source={require("../assets/BSOLogo.png")}>

            </Image>
            <View style={styles.loginButton}>
                <Text style={styles.centerByMaringLNR}>
                    Login
                </Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.centerByMaringLNR}>
                    Register
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'lightgrey',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
    },
    logo: {
        width: '100%',
        height: 100,
        position: 'absolute',
        top: '15%'
    },
    centerByMaringLNR: {
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default WelcomeScreen;