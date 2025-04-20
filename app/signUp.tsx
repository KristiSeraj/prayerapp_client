import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import { heightPercentage, widthPercentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/Button";
import {useRouter} from "expo-router";

const SignUp = () => {
    const router = useRouter();
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);
    const onSubmit = async () => {

    }
    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                <BackButton router={router} size={26} />

                <View>
                    <Text style={styles.welcomeText}>Let's</Text>
                    <Text style={styles.welcomeText}>Get Started</Text>
                </View>

                <View style={styles.form}>
                    <Text style={{ fontSize: heightPercentage(1.5), color: theme.colors.text }}>Please fill the details to create an account</Text>
                    <Input
                        icon={<MaterialIcons name="person" size={26} color={theme.colors.darkLight} />}
                        placeholder='Enter your name'
                        onChangeText={(value: any) => nameRef.current = value}
                    />
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
                    <Button title='Sign Up' onPress={onSubmit} loading={loading} buttonStyle={undefined} textStyle={undefined} hasShadow={true} />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Already have an account?
                    </Text>
                    <Pressable onPress={() => router.push("/login")}>
                        <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: "700" }]}>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default SignUp;

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