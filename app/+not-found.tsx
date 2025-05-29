import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-xl font-bold">This screen does not exist.</Text>
        <Link href="/" className="mt-4 py-4">
          <Text className="text-blue-500">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
