import React from 'react';
import { StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/constants/theme";

const BackButton = ({ size=26, router }: { size: number, router: any }) => {
    return (
        <Pressable onPress={() => router.back()} style={styles.button}>
            <MaterialIcons name="keyboard-arrow-left" size={size} color={theme.colors.darkLight} />
        </Pressable>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    button: {
        alignSelf: "flex-start",
        padding: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
    }
});