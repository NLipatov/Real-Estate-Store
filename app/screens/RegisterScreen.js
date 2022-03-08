import React from 'react';
import {SafeAreaView ,View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const [login, onChangeLogin] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const buttonIsActive = () => {
        if(login.length > 0 && password.length > 0){
            return false;
        }
        else{
            return true;
        }
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                value={login}
                placeholder={`Login`}
                onChangeText={text => onChangeLogin(text)}>
            </TextInput>
            <TextInput
                style={styles.input}
                value={password}
                placeholder={'Password'}
                onChangeText={text => onChangePassword(text)}>
            </TextInput>
            <Button
                onPress={(e) =>
                    {
                        navigation.navigate(
                            {
                                name: 'Welcome',
                                // params: { post: "CHLENPIZDA" },
                                params: {login: login, password: password},
                                merge: true
                            }
                        )
                    }}
                title="Submit"
                disabled={buttonIsActive()}
                />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});

export default RegisterScreen;