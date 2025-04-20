import React, { useRef, useState } from 'react';
import {Text, View, StyleSheet, Pressable, Alert} from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";
import { heightPercentage, widthPercentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Input from "@/components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/Button";

const Login = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);
    const onSubmit = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Login', 'Please fill all the fields!');
            return;
        }
    }
    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                <BackButton router={router} size={26} />

                <View>
                    <Text style={styles.welcomeText}>Hey,</Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>

                <View style={styles.form}>
                    <Text style={{ fontSize: heightPercentage(1.5), color: theme.colors.text }}>Please login to continue</Text>
                    <Input
                        icon={<MaterialIcons name="mail" size={26} color={theme.colors.darkLight} />}
                        placeholder='Enter your email address'
                        onChangeText={(value: any) => emailRef.current = value}
                    />
                    <Input
                        icon={<MaterialIcons name="lock" size={26} color={theme.colors.darkLight} />}
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        onChangeText={(value: any) => passwordRef.current = value}
                    />
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    <Button title='Login' onPress={onSubmit} loading={loading} buttonStyle={undefined} textStyle={undefined} hasShadow={true} />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Don't have an account?
                    </Text>
                    <Pressable onPress={() => router.push("/signUp")}>
                        <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: "700" }]}>
                            Sign Up
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: widthPercentage(5)
    },
    welcomeText: {
        fontSize: heightPercentage(4),
        fontWeight: "700",
        color: theme.colors.text
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: "600",
        color: theme.colors.text,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    footerText: {
        textAlign: "center",
        color: theme.colors.text,
        fontSize: heightPercentage(1.6),
    }
});