import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as SolidIcon from "react-native-heroicons/solid";
import * as OutlineIcon from "react-native-heroicons/outline";
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

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
    // lat,
}) => {
  const navigation = useNavigation()
  return (
<TouchableOpacity  
onPress={()=>{
  navigation.navigate('Restaurant',{
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    // lat,
  })
}

}
className="bg-white mr-3 shadow">
<Image 
source = {{
  uri:urlFor(imgUrl).url(),
}}

className="h-36 w-64 rounded-sm"
/>
<View className="px-3 py-4 w-[50vw]">
  <Text className="font-bold text-xl">{title}</Text>
  <View className="w-[80%] flex-row  my-1 ">
    <SolidIcon.StarIcon size={20} color="green" opacity={0.5} className="mb-1"/>
<View className="flex-row items-center">
<Text className="text-gray-400">{rating}</Text>
  <Text className="text-gray-400 pl-2">{genre}</Text>
</View>
  </View>
  <View className=" flex-row items-center ">
    <OutlineIcon.MapPinIcon size={20} color="green" opacity={0.5}/>
    <Text>{address}</Text>
  </View>
</View>
</TouchableOpacity>
  )
}

export default RestaurantCard

