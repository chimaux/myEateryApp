import { View, Text,ScrollView } from "react-native";
import React from "react";
import * as SolidIcon from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="px-4 ">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-xl font-bold text-zinc-700">{title}</Text>
            <Text className=" text-zinc-700">{description}</Text>
          </View>
          <SolidIcon.ArrowRightIcon size={25} color="#00ccbb" />
        </View>
      </View>

      <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    horizontal 
    showsHorizontalScrollIndicator={false}
    className="pt-4"
    >
      {/**RestaurantCard */}
 <RestaurantCard  
     id ={1}
     imgUrl={"https://links.papareact.com/gn7"}
     title={"Yo! Sushi"}
     rating={4.5}
     genre ={"Japanese"}
     address={"123 Main St"}
     short_description={"Food for the body and soul"}
     dishes={"[]"}
     long={20}
     lat={0}
 />

<RestaurantCard  
     id ={1}
     imgUrl={"https://links.papareact.com/gn7"}
     title={"Yo! Sushi"}
     rating={4.5}
     genre ={"Japanese"}
     address={"123 Main St"}
     short_description={"Food for the body and soul"}
     dishes={"[]"}
     long={20}
     lat={0}
 />


<RestaurantCard  
     id ={1}
     imgUrl={"https://links.papareact.com/gn7"}
     title={"Yo! Sushi"}
     rating={4.5}
     genre ={"Japanese"}
     address={"123 Main St"}
     short_description={"Food for the body and soul"}
     dishes={"[]"}
     long={20}
     lat={0}
 />
     
    </ScrollView>

    </View>
  );
};

export default FeaturedRow;
