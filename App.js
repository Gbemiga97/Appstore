import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import {Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid'


export default function App() {
  return (
    <LinearGradient
    colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
    style={tw`w-full flex-1`}
    >
      <SafeAreaView>
        <View style={tw`container`}>
        
        </View>
      </SafeAreaView>
      <StatusBar style='light'/>
    </LinearGradient>
  );
}

