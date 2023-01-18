import { View, Text,ScrollView } from "react-native";
import React, { useEffect,useState } from "react";
import * as SolidIcon from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
const [restaurant, setRestaurants] = useState()
 
useEffect(()=>{
client.fetch(`
*[_type == "featured" &&
  _id == $id]{
    ...,
    restaurant[]->{
    ...,
    dishes[] ->, 
    type -> {
      name
    }
    },
  }[0]
`,
{id}
).then((data)=>{
  setRestaurants(data?.restaurant)
})
},[id])


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
        //paddingTop:10
    }}
    horizontal 
    showsHorizontalScrollIndicator={false}
    className="py-4"
    >
      {/**RestaurantCard */}
      {restaurant?.map((restaurant)=>{
return(
  <RestaurantCard 
  key = {restaurant._id} 
  id ={restaurant._id}
  imgUrl={restaurant.image}
  title={restaurant.name}
  rating={restaurant.rating}
  genre ={restaurant.genre}
  address={restaurant.address}
  short_description={restaurant.short_description}
  dishes={restaurant.dishes}
  long={restaurant.long}
  lat={restaurant.lat}
 />
)
      })}





     
    </ScrollView>

    </View>
  );
};

export default FeaturedRow;
