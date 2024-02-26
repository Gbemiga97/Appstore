import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import {Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid'
import { storeColors } from '../theme';
import { useState } from 'react';
import GradientButton from '../components/GradientButton';
import GameCard from '../components/GameCard';

const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'others']


const featuredGames = [
  {
      id: 1,
      title: 'Zooba',
      img: require('../assets/images/zooba.png') ,
      downloads: '200K',
      stars: 4
  },
  {
      id: 2,
      title: 'Subway Surfer',
      img: require('../assets/images/subway.png') ,
      downloads: '5M',
      stars: 4
  },
  {
      id: 3,
      title: 'Free Fire',
      img: require('../assets/images/freeFire.png') ,
      downloads: '100M',
      stars: 3
  },
  {
      id: 4,
      title: "Alto's Adventure",
      img: require('../assets/images/altosAdventure.png') ,
      downloads: '20K',
      stars: 4
  },
]

const StoreScreen = () => {

const [activeCategory, setActiveCategory] = useState('Action')

  return (
    <LinearGradient
    colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
    style={tw`w-full flex-1 pt-8`}
    >
      <SafeAreaView>
        <View style={tw`container`}>
        <View style={tw`flex-row justify-between items-center px-4`}>
            <Bars3CenterLeftIcon color={storeColors.text} size="30" />
            <BellIcon color={storeColors.text} size="30" />
        </View>

        {/* categories */}
        <View style={tw`mt-4`}>
            <Text 
            style={tw`ml-4 text-3xl font-bold text-[#0D163A]`}
            >
                Browse Games
            </Text>
            <View style={tw`my-3`}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                 categories.map(cat => (
                    <>
                   {
                    cat === activeCategory ?
                     (
                     <GradientButton key={cat} containerClass='mr-2' value={cat} />
                     ) : (
                      <TouchableOpacity
                      key={cat}
                      style={tw`bg-blue-200 p-3 px-4 rounded-full mr-2`}
                      onPress={() => setActiveCategory(cat)}
                      >
                        <Text>
                          {cat}
                        </Text>
                      </TouchableOpacity>
                    )
                   }
                      </>
                  ))
                }
              </ScrollView>
            </View>
        </View>

        {/* featured row */}
        <View style={tw`mt-3 space-y-4`}>
          <Text style={tw`text-lg font-bold ml-4 text-[#0D163A]`}>
            Featured Games
          </Text>
          <View style={tw`pl-4`}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            hajja
            </ScrollView>
          </View>
        </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default StoreScreen