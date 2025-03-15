import { View, Text, Image, TextInput } from "react-native";
import React, { FC } from "react";
import { icons } from "@/constants/icons";

interface SearchBarProps { 
    onPress?: () => void;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({onPress, placeholder, value, onChangeText}) => {

  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#ab8bff"
        className="flex-1 text-white ml-2"
      />
    </View>
  );
};

export default SearchBar;
