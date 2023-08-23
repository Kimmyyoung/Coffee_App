import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-react-native-classnames';
import { ArrowLeftCircleIcon, HeartIcon, MinusIcon, PlusIcon, ShoppingBagIcon, StarIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';

export default function ProductScreen (props) {
    // data from route
    const item = props.route.params;
    const nav = useNavigation();

    const [size, setSize] = useState('small');


    return (
        <View style={tw`flex-1`}>
            <StatusBar style="light" />
            <Image 
            source={require('../assets/images/beansBackground2.png')} 
            style={[tw`w-full absolute`, {height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}]}
            />

            <SafeAreaView style={[{marginTop:4}]}>
                <View style={tw`mx-4 flex-row justify-between items-center`}>
                    <TouchableOpacity onPress={()=> nav.goBack()}>
                        <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white"/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={tw`rounded-full border-2 border-white p-2`}>
                        <HeartIcon size="24" color="white"/>
                    </TouchableOpacity>
                </View>

                <View style={[tw`flex-row justify-center`, {shadowColor: themeColors.bgDark, shadowRadius: 30, shadowOffeset: {width: 0, height: 30}, shadowOpacity: 0.9}]}>
                    <Image source={item.image} style={tw`h-60 w-60`} />
                </View>

                <View style={[tw`flex-row items-center rounded-3xl p-1 px-2 w-16 mx-4 opacity-90`, {marginTop: 4, backgroundColor: themeColors.bgLight}]}>
                    <StarIcon size="15" color="white"/>
                    <Text style={tw`text-base font-semibold text-white`}>{item.stars}</Text>
                </View>

                <View style={tw`mx-4 flex-row justify-between items-center`}>
                    <Text style={[tw`text-3xl font-semibold`, {color: themeColors.text}]}>
                        {item.name}
                    </Text>
                    <Text style={[tw`text-lg font-semibold`, {color: themeColors.text}]}>
                        $ {item.price}
                    </Text>
                </View>

                <View style={[tw`mx-4`, {marginTop: 8}]}>
                    <Text style={[tw`text-lg font-bold`, {color: themeColors.text}]}>
                        Coffee Size
                    </Text>

                    <View style={tw`flex-row justify-between`}>
                        <TouchableOpacity 
                        onPress={()=>{setSize('small')}}
                        style={[tw`p-3 px-8 rounded-full`,{backgroundColor: size==='small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}]}>
                            <Text style={tw`${size === 'small' ? 'text-white' : 'text-gray-700'}`}>Small</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=>{setSize('medium')}}
                        style={[tw`p-3 px-8 rounded-full`,{backgroundColor: size==='medium' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}]}>
                            <Text style={tw`${size === 'medium' ? 'text-white' : 'text-gray-700'}`}>Medium</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=>{setSize('large')}}
                        style={[tw`p-3 px-8 rounded-full`,{backgroundColor: size==='large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}]}>
                            <Text style={tw`${size === 'large' ? 'text-white' : 'text-gray-700'}`}>Large</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={[tw`mx-4 h-28`, {marginTop: 8}]}>
                        <Text style={[tw`text-lg font-bold`, {color: themeColors.text}]}>
                            About
                        </Text>

                        <Text style={[tw`text-gray-600`, {color: themeColors.text}]}>
                            {item.desc}
                        </Text>
                </View>

                <View style={tw`flex-row justify-between items-center mx-4 mb-2`}>
                    <View style={[tw`flex-row items-center`, {marginLeft: 4}]}>
                        <Text style={tw`text-base text-gray-700 font-semibold opacity-60`}>Volume</Text>
                        <Text style={[tw`text-base text-black font-semibold`, { marginLeft: 8}]}>
                            {item.volume}
                        </Text>
                    </View>

                    <View style={[tw`flex-row items-center border-gray-500 border rounded-full p-1 px-4`, {marginLeft: 8}]}>
                        <TouchableOpacity style={{ marginRight: 16 }}>
                            <MinusIcon size="20" strokeWidth={3} color={themeColors.text} />
                        </TouchableOpacity>
                            <Text style={[tw`font-extrabold text-lg`, {marginRight: 16, color: themeColors.text}]}>2</Text>
                        <TouchableOpacity>
                            <PlusIcon size="20" strokeWidth={3} color={themeColors.text} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* buy now button */}
                <View style={tw`flex-row justify-between items-center mx-4`}>
                    <TouchableOpacity style={tw`p-4 rounded-full border border-gray-400`}>
                        <ShoppingBagIcon size="30" color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[tw`p-5 rounded-full flex-1 ml-3`, {backgroundColor: themeColors.bgLight}]}>
                        <Text style={tw`text-center text-base font-semibold text-white`}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>
    )
};

