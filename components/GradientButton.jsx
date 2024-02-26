
import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'


export default function GradientButton({containerClass, buttonClass, value}) {
  return (
    <LinearGradient
    colors={['rgba(9, 181, 211, 0.9)', 'rgba(58, 131, 244,0.9)']}
    end={{x:1, y:1}}
    start={{x: 0.1, y: 0.2}}
    style={tw`rounded-full ${containerClass}`}
    >
        <TouchableOpacity style={tw`p-3 px-4 ${buttonClass}`}>
            <Text style={tw`text-white font-bold`}>
                {value}
            </Text>
        </TouchableOpacity>
    </LinearGradient>
  )
}