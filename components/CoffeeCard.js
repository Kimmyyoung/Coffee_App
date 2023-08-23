import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import tw from 'tailwind-react-native-classnames';
import { PlusIcon, StarIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

export default function CoffeeCard ({item}) {

    const navigation = useNavigation();


    return (
        <View style={{
            borderRadius: 40,
            backgroundColor: themeColors.bgDark,
            height: 350,
            width: 250
        }}>

            <View style={[tw`flex-row justify-center -mt-14`,{
                shadowColor: 'black',
                shadowRadius: 30,
                shadowOffset: {width: 0, height: 40},
                shadowOpacity: 0.8
            }]}>
                <Image source={item.image} style={tw`h-40 w-40`} />
            </View>
            
            <View style={[tw`px-5 mt-5`, {marginTop: 16}]}>
                <Text style={[tw`text-3xl text-white font-semibold z-10`, {marginBottom: 8}]}>
                    {item.name}
                </Text>

                <View style={[tw`flex-row items-center rounded-3xl p-1 px-2 w-16` ,{backgroundColor: 'rgba(255, 255, 255, 0.2)'}, {marginBottom: 4}]}>
                    <StarIcon size="15" color="white" />
                    <Text style={tw`text-base font-semibold text-white`}>{item.stars}</Text>
                </View>

                <View style={[tw`flex-row z-10 mb-6`, {marginRight: 4}]}>
                    <Text style={[tw`text-base font-semibold text-white opacity-60`, {marginLeft: 4}]}>
                        Volume
                    </Text>
                    <Text style={[tw`text-base font-semibold text-white`, {marginLeft: 4}]}>
                        {item.volume}
                    </Text>
                </View>

                <View style={[tw`flex-row justify-between items-center`, {
                    backgroundColor: themeColors.bgDark,
                    shadowColor: themeColors.bgDark,
                    shadowRadius: 25,
                    shadowOffset: {width: 0, height: 40},
                    shadowOpacity: 0.8
                }]}>
                        <Text style={tw`text-white font-bold text-lg`}>$ {item.price}</Text>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Product', {...item})}}
                         style={[tw`p-4 bg-white rounded-full`, {
                            shadowColor: 'black',
                            shadowRadius: 40,
                            shadowOffset: {width: -20, height: -10},
                            shadowOpacity: 1
                        }]}>
                            <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
                          </TouchableOpacity>
                </View>

               
            </View>
        </View>
    );
}