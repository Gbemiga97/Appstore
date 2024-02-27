import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'
import { storeColors } from '../theme'



export default function GameCard({game}) {

  const [isFavorite, setIsFavorite] = useState(false)
  const {id, img, title, downloads, stars} = game

  return (
    <View style={tw`mr-4 relative`} >
      <Image source={img} style={tw`w-80 h-60 rounded-3xl`} />
      <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
      style={tw`absolute p-4 h-full w-full rounded-3xl flex justify-between`}
      >
       <View style={tw`flex-row justify-end`}>
       <TouchableOpacity style={tw`bg-[rgba(225,225,225,0.3)] p-3 rounded-full`}
       onPress={() => setIsFavorite(prev => !prev)}
       >
          <HeartIcon size='25' color={isFavorite ? storeColors.redHeart : 'white'} />
        </TouchableOpacity>
       </View>
       <View>
      
       </View>
      </LinearGradient>
    </View>
  )
}