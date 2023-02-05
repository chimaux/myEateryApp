import { View, Text, TouchableOpacity, Image } from 'react-native'
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency"
import React,{ useState } from 'react'
import { urlFor } from '../sanity';


console.log(getSupportedCurrencies())

const DishRow = ({id,name,description,price,image}) => {
  const [inputValue, setInputValue] = useState(price);
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
      formatCurrency({ amount: Number(inputValue), code: "USD" });
 return (
    <TouchableOpacity className="mx-4 my-[6px] flex-row space-x-4 justify-center items-center ">
      <View className="w-[65vw]">
      <Text className="text-lg mb-1">{name}</Text>
      <Text className="text-gray-400">{description}</Text>
    <Text className="text-gray-400 mt-2">
    {valueFormattedWithSymbol}
    </Text>
    </View>

   <Image
      source = {{ uri:urlFor(image).url(),}}
      className ="h-20 w-20 bg-gray-300 p-4 rounded"
      />
  

  
    </TouchableOpacity>
  )
}

export default DishRow


