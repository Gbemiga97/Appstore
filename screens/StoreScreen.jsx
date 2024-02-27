import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import {ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid'
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
      stars: 4.5
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


const games = [
  {
      id: 1,
      title: 'Shadow Fight',
      img: require('../assets/images/shadowFight.png') ,
      downloads: '20M',
      stars: 4.5
  },
  {
      id: 2,
      title: 'Valor Arena',
      img: require('../assets/images/valorArena.png') ,
      downloads: '10K',
      stars: 3.4
  },
  {
      id: 3,
      title: 'Frag',
      img: require('../assets/images/frag.png') ,
      downloads: '80K',
      stars: 4.6
  },
  {
      id: 4,
      title: "Zoobs Wildlife",
      img: require('../assets/images/zoobaGame.png') ,
      downloads: '40K',
      stars: 3.5
  },
  {
    id: 5,
    title: "Clash of Clans",
    img: require('../assets/images/clashofclans.png') ,
    downloads: '20K',
    stars: 4.2
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
        <View style={tw`mt-3 gap-y-4`}>
          <Text style={tw`text-lg font-bold ml-4 text-[#0D163A]`}>
            Featured Games
          </Text>
          <View style={tw`pl-4`}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              featuredGames.map((game, i) => (
                <GameCard key={i} game={game}/>
              ))
            }
            </ScrollView>
          </View>
        </View>

        {/* top action games list */}
        <View style={tw`mt-3`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <Text style={tw`text-[#0D163A] ml-4 text-lg font-bold`}>
              Top Action Games
            </Text>
            <TouchableOpacity style={tw`mr-4`}>
              <Text style={tw`text-blue-600 font-bold`}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{height: 320}} showsVerticalScrollIndicator={false}>
            {
              games.map(({id, title, img, stars, downloads}) => (
                <TouchableOpacity style={tw`mx-4 p-2 mb-2 flex-row`} key={id}>
                  <Image source={img} style={tw`rounded-2xl w-[80px] h-[80px]`} />
                  <View style={tw`flex-1 flex justify-center pl-3 gap-y-3`}>
                    <Text style={tw`text-[#0D163A] font-semibold`}>
                      {title}
                    </Text>
                    <View style={tw`flex-row gap-x-3`}>
                      <View style={tw`flex-row gap-x-1`}>
                        <Image style={tw`h-4 w-4 opacity-80`} source={require('../assets/images/fullStar.png')} />
                        <Text style={tw`text-xs text-gray-700`}>
                          {stars} stars
                        </Text>
                      </View>
                      <View style={tw`flex-row gap-x-1`}>
                        <ArrowDownTrayIcon size='15' style={tw`text-blue-500`} />
                        <Text style={tw`text-xs text-gray-700`}>
                          {downloads}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={tw`flex justify-center items-center`}>
                    <GradientButton buttonClass='py-2 px-5' value='Play' />
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default StoreScreen