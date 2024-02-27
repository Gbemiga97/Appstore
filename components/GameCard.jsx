import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ArrowDownTrayIcon, HeartIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'
import { storeColors } from '../theme'
import StarRating from 'react-native-star-rating-widget'


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
       <View style={tw`gap-y-1`}>
       <StarRating
                rating={stars}
                starSize={20}
                maxStars={5}
            />
            <Text style={tw`text-xl font-bold text-gray-300`}>
              {title}
            </Text>
      
       <View style={tw`flex-row gap-x-2`}>
        <ArrowDownTrayIcon size='18' color='lightgray' />
        <Text style={tw`text-sm text-gray-300 font-semibold`}>
          {downloads} Downloads
        </Text>
       </View>
       </View>
      </LinearGradient>
    </View>
  )
}