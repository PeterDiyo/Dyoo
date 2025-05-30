import { GoogleInputProps } from "@/types/type";
import React from "react";
import { Text, View } from "react-native";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle}`}
    >
      <Text>Search</Text>
    </View>
  );
};

export default GoogleTextInput;
