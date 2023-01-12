import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as SolidIcon from "react-native-heroicons/solid";
import * as OutlineIcon from "react-native-heroicons/outline";

const RestaurantCard = ({
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
}) => {
  return (
<TouchableOpacity  className="bg-white mr-3 shadow">
<Image 
source = {{uri:imgUrl}}

className="h-36 w-64 rounded-sm"
/>
<View className="px-3 py-4 w-[50vw]">
  <Text className="font-bold text-xl">{title}</Text>
  <View className="w-[80%] flex-row items-center justify-between my-1">
    <SolidIcon.StarIcon size={20} color="green" opacity={0.5}/>
    <Text className="text-gray-400">{rating}</Text>
    <Text className="text-gray-400">{genre}</Text>
  </View>
  <View className=" flex-row items-center justify-between">
    <OutlineIcon.MapPinIcon size={20} color="green" opacity={0.5}/>
    <Text>Nearby. {address}</Text>
  </View>
</View>
</TouchableOpacity>
  )
}

export default RestaurantCard

