import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const Moviecard: FC<Movie> = ({
  title,
  id,
  poster_path,
  vote_average,
  release_date,
}) => {
  return (
    <Link href={`/movies/${id}`} className="w-1/3 my-2" asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <View className="flex-col justify-between gap-y-1 mt-2">
        <View className="mt-4">
        <Text className="text-white font-bold" numberOfLines={1}>{title}</Text>
        </View>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="w-4 h-4" />
          <Text className="text-white text-center">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View>
        <Text className="text-white">{release_date?.split("-")[0]}</Text>
        </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default Moviecard;
