import { View, Text, TouchableOpacity, Image } from 'react-native'
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency"
import React,{ useState } from 'react'
import { urlFor } from '../sanity';
import * as SolidIcons from "react-native-heroicons/solid";
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice';

console.log(getSupportedCurrencies())

const DishRow = ({id,name,description,price,image}) => {
  const [inputValue, setInputValue] = useState(price);
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
      formatCurrency({ amount: Number(inputValue), code: "USD" });
      const [isPressed,setIsPressed] = useState(false)
const items=useSelector(state => selectBasketItemsWithId(state, id))
      const dispatch = useDispatch()


      const removeItemFromBasket =() => {
        if(!items.length > 0) return;
        dispatch(removeFromBasket({id}))
      }


      const addItemToBasket =() =>{
        dispatch(addToBasket({id,name,description,price,image}))
      }
      console.log(items)
 return (
<>
<TouchableOpacity onPress={()=>setIsPressed(!isPressed)} 
className={
  `mx-4 my-[6px] flex-row space-x-4 justify-center 
items-center border-b-[1px] border-gray-200 pb-2
${isPressed && "border-b-0"}
`
}
>
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

{isPressed && 
  <View className="flex-row items-center space-x-4 mx-4">
    {/* Your View content here */}
    <TouchableOpacity onPress={removeItemFromBasket}>
<SolidIcons.MinusCircleIcon
// color={ItemList.length > 0? "#00ccbb":"gray"}
size={40}
className="text-green-500"
/>
    </TouchableOpacity>

    <Text>{items.length}</Text>

    <TouchableOpacity onPress={addItemToBasket}>
<SolidIcons.PlusCircleIcon
// color={ItemList.length > 0? "#00ccbb":"gray"}
size={40}
className="text-green-500"
/>
    </TouchableOpacity>
  </View>
}
</>
  )
}

export default DishRow


