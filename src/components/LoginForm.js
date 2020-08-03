import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { validateEmail } from "../utils/validations";
import firebase from "../utils/firebase";

export default function LoginForm(props) {
    const { changeForm } = props;

    const login = () => {
        console.log("Iniciando sesión");
    }

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#969696" />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true} />

            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}  >Iniciar sesión</Text>
            </TouchableOpacity>

            <View style={styles.register}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}  >Registrate</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: "#fff",
        fontSize: 18,
    },
    input: {
        height: 50,
        color: "#fff",
        width: "80%",
        marginBottom: 25,
        backgroundColor: "#1e3040",
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1e3040",
    },
    register: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
    },
})
