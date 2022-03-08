import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const WelcomeScreen = ({route}) => {
    React.useEffect(()=>{
        console.log('effect');
        if(route.params?.login)
        {
            console.log('parameter spotted!')
            console.log(route.params)


            console.log('credentials');
            credentials.push(route.params)
            console.log(credentials);
        }
        else{
            console.log('no parameter spotted!')
        }
    }, [route.params?.login])

    const [credentials] = useState([]);

    const navigation = useNavigation();
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.png")}>
            
            <View style={styles.stripe} >
                <Image 
                style={styles.logo}
                source={require("../assets/BSOLogo.png")}>

                </Image>
            </View>

            <TouchableOpacity 
                activeOpacity={0.8}
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login', credentials)}>
                <Text 
                    // onPress={() => navigation.navigate('Login')}
                    style={[styles.centerByMaringLNR, styles.blackColor]}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                activeOpacity={0.8}
                style={styles.registerButton}
                onPress={()=> navigation.navigate('Register')}>
                <Text 
                    style={[styles.centerByMaringLNR, styles.whiteColor]}>
                    Register
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(255,223,0, 0.7)',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(0,0,0, 0.8)',
    },
    logo: {
        width: '95%',
        height: 100,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    stripe: {
        width: '100%',
        height: 150,
        position: 'absolute',
        top: '15%',
        backgroundColor: 'rgba(245,245,245, 0.5)'
    },
    centerByMaringLNR: {
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 25,
        fontWeight: 'bold',
    },
    whiteColor: {
        color: 'white'
    },
    blackColor: {
        color: 'black'
    }

})

export default WelcomeScreen;