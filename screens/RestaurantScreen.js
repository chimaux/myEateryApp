import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as Icons from "react-native-heroicons/outline";
import * as SolidIcons from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"Testing",
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 pi4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5  rounded-full p-2"
          style={{ backgroundColor: "rgba(128,128,128,0.8)" }}
        >
          <SolidIcons.ArrowLeftIcon size={20} color="#00ccbb" />
        </TouchableOpacity>
      </View>
      <View className="bg-white p-4">
        <Text className="font-bold text-xl ">{title}</Text>
        <View className="flex-row items-center  ">
          <View className="flex-row items-center">
            <SolidIcons.StarIcon size={20} color="green" opacity={0.5} className="mb-1" />
            <Text className="text-green-500">{rating}</Text>
          </View>
          <Text className="px-2 text-gray-400">{genre}</Text>
          <View className="flex-row items-center">
            <SolidIcons.MapPinIcon size={20} color="gray" opacity={0.3} />
            <Text className=" text-gray-400">Nearby. {address}</Text>
          </View>
        </View>
        <Text className=" text-gray-400 pt-2">{short_description}</Text>
      </View>
      <TouchableOpacity
        className="bg-white flex-row justify-between items-center py-2 border-y border-y-gray-300"
      >
    <View className="flex-row items-center">
    <Icons.QuestionMarkCircleIcon
        color="gray" opacity={0.6} size={20}
      className="ml-4"
        />
        <Text className="font-bold pl-2 text-md">
          Have a food allergy?
        </Text>
    </View>
    <SolidIcons.ChevronRightIcon 
    size={15}
    color="#00ccbb"
    className="mr-4"
    />
      </TouchableOpacity>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
      {/** Dishrows */}
    {dishes.map(dish=>{

return(
  <DishRow
  key = {dish._id}
  id = {dish._id}
  name = {dish.name}
  description = {dish.short_description}
  price = {dish.price}
  image = {dish.image}
  />
)

    })}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
