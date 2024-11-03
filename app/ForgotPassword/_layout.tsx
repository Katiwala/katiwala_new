import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPasswordLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Reset Your Password", // Changed title
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaView>
  );<></>
};

export default ForgotPasswordLayout;
