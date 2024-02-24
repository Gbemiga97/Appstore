import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import {Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid'
import { storeColors } from '../theme';



const StoreScreen = () => {
  return (
    <LinearGradient
    colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
    style={tw`w-full flex-1`}
    >
      <SafeAreaView>
        <View style={tw`container`}>
        <View style={tw`flex-row justify-between items-center px-4`}>
            <Bars3CenterLeftIcon color={storeColors.text} size="30" />
            <BellIcon color={storeColors.text} size="30" />
        </View>

        {/* categories */}
        <View style={tw`mt-3`}>
            <Text 
            style={tw`ml-4 text-3xl font-bold`}
            >
                Browse Games
            </Text>
        </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default StoreScreen