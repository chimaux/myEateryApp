import {
  View,
  Text,
  Header,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { setStatusBarTranslucent } from "expo-status-bar";
import * as Icons from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity"
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState()
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"Testing",
      headerShown: false,
    });
  }, []);
  //SafeAreaView instructions for android
  useLayoutEffect(() => {
    setStatusBarTranslucent(false);
  }, []);

useEffect(()=>{
   client.fetch(`
   *[_type == "featured"]{
    ...,
    restaurants[] -> {
      ...,
      distance[] ->
    }
  }
    `
   ).then(data =>{
    setFeaturedCategories(data)
   })
},[])


  return (
    //SafeAreaView for IOS
    <SafeAreaView>
      {/**Header */}
      <View className="px-4 py-1 bg-white">
        <View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-2">
                <Image
                  source={{
                    uri: "https://links.papareact.com/wru",
                  }}
                  className="h-10 w-10 bg-gray-300 rounded-full"
                />
              </View>
              <View>
                <Text className="text-zinc-500">Deliver now</Text>
                <View className="flex-row items-center  ">
                  <Text className="text-zinc-600 font-bold text-xl">
                    current location
                  </Text>
                  <Icons.ChevronDownIcon
                    size={25}
                    color="#00ccbb"
                    className="mt-0.5"
                  />
                </View>
              </View>
            </View>
            <Icons.UserIcon size={25} color="#00ccbb" />
          </View>
          <View className="w-full flex-row items-center justify-center mt-3">
            <View className="flex-row items-center bg-gray-200 flex-1 p-2 rounded overflow-hidden">
              <Icons.MagnifyingGlassIcon size={25} color="#00ccbb" />
              <TextInput
                placeholder="Enter location"
                className="pl-2 text-xl w-[90%]"
              />
            </View>
            <Icons.AdjustmentsVerticalIcon size={25} color="#00ccbb" />
          </View>
        </View>
      </View>
      {/**Body */}


<ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/**Categories */}
          <Categories />
        
        {/**Featured row */}
    

  <View className="my-4">
  {featuredCategories?.map((category)=>{
return(
  <FeaturedRow
  key={category._id}
  id={category._id}
  title={category.name}
  description = {category.short_description}
  
/>
)
  }
      
      )}

  

  </View>
  </ScrollView>



    </SafeAreaView>
  );
};

export default HomeScreen;
