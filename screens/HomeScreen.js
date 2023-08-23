import React, {useState} from 'react'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme';
import tw from 'tailwind-react-native-classnames';
import { categories, coffeeItems } from '../data';
import { Carousel } from 'react-native-snap-carousel';
import CoffeeCard from '../components/CoffeeCard';
import { MapPinIcon } from 'react-native-heroicons/solid'

const {width, height} = Dimensions.get('window');

export default function HomeScreen () {

  const [activeCategory, setActiveCategory] = useState(1);

    return (
        <View style={tw`flex-1 relative bg-white`}>
          <StatusBar />
        <Image 
          source={require('../assets/images/beansBackground1.png')} 
          style={[tw`w-full absolute -top-5 opacity-10`, {height: 220}]} />

          <SafeAreaView style={tw`flex-1`}>
            <View style={tw`mx-4 flex-row justify-between items-center`}>
              <Image style={tw`h-9 w-9 rounded-full`} source={require('../assets/images/avatar.png')} />


              <View style={[tw`flex-row items-center`, {marginTop: 4}]}>
                <MapPinIcon size="25" color={themeColors.bgLight} />
                <Text style={tw`font-semibold text-base`}>
                  New York, NYC
                </Text>
            </View>
          <BellIcon size="27" color="black" />
          </View>

    
              {/* Search Bar */}
              <View style={[tw`mx-5 shadow`, {marginTop: height*0.06}]}>
                <View style={[tw`flex-row items-center rounded-full p-1`, { backgroundColor: '#e6e6e6' }]}>
                    <TextInput style={tw`p-4 flex-1 font-semibold text-gray-700`} placeholder="Search"  />
                    <TouchableOpacity style={[tw`rounded-full p-2`, {backgroundColor : themeColors.bgLight} ]}>
                        <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
              </View>

              {/* categories */}
              <View style={tw`px-5 mt-6`}>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} keyExtractor={item=> item.id} 
                style={tw`overflow-visible`} renderItem={({item})=>{
                  let isActive = item.id == activeCategory;
                  let activeTextClass = isActive? 'text-white' : 'text-gray-700';

                  return (
                    <TouchableOpacity 
                    onPress={()=>setActiveCategory(item.id)}
                    style={[tw`p-4 px-5 rounded-full mr-2 shadow`, {backgroundColor : isActive? themeColors.bgLight : 'rgba(0,0,0,0.07)'}]}>
                        <Text style={[tw`font-semibold`, activeTextClass]}>
                          {item.title}
                        </Text>
                    </TouchableOpacity>
                  )
                }} />
              </View>
              

              {/* coffee card */}
              <View style={tw`mt-16 py-2`}>
                <Carousel containerCustomStyle={{overflow: 'visible'}} 
                  data={coffeeItems} 
                  loop={true}
                  renderItem={({item}) => <CoffeeCard item={item} />}
                  firstItem={1}
                  inactiveSlideOpacity={0.75}
                  inactiveSlideScale={0.77}
                  sliderWidth={400}
                  itemWidth={260}
                  slideStyle={{display: 'flex', alignItems: 'center'}}
                />
              </View>

          </SafeAreaView>
        </View>
      );
}