import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState} from 'react'
import Custom_Header from '../../../components/header/Custom_Header'
import Custom_Footer from '../../../components/footer/Custom_Footer'
import Custom_ItemScrollView from './components/Custom_ItemScrollView'
import Custom_HomepageProd from '../../../components/products/CustomHomepageProd'
import Color from '../../../constants/color'
import scale from '../../../constants/responsive'
import { IMG_Collection, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../../assets/images'
import { LineBottom } from '../../../components/footer/images'
import { Image } from 'react-native-svg'
import FONT_FAMILY from '../../../constants/fonts'

const HomeScreen = (props) => {
  const [categoryData, setCategoryData] = useState([]);
  const itemData = [
    {
      img: IMG_ModelOne,
      key: '1',
      name: '21WN reversible angora cardigan',
      price: '$120',
    },
    {
      img: IMG_ModelTwo,
      key: '2',
      name: '21WN reversible angora cardigan',
      price: '$120',
    },
    {
      img: IMG_ModelThree,
      key: '3',
      name: '21WN reversible angora cardigan',
      price: '$120',
    },
    {
      img: IMG_ModelFour,
      key: '4',
      name: 'Oblong bag',
      price: '$120',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <Custom_Header/>
        <ScrollView >
        {/* Banner */}
          <View style={styles.collection}>
            <Image source={IMG_Collection}/>
          </View>
        {/* New Arrival */}
        <View style={styles.arrivalContainer}>
          <Text style={styles.arrivalText}>NEW ARRIVAL</Text>
          <Image source={LineBottom} style={styles.lineBottom}/>
          <Custom_ItemScrollView style={{alignSelf:'center'}}/>
          <FlatList
          contentContainerStyle={{alignContent: 'space-around'}}
          horizontal={false}
          data={itemData}
          keyExtractor={item => `${item.key}`}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.wrapper}
          renderItem={({item}) => (
            <View>
              <Custom_HomepageProd
                image={item.img}
                prodName={item.name}
                prodPrice={item.price}
                {...props}
                categoryData={item}
              />
              {/* <View style={{height: scale(20)}} /> */}
            </View>
          )}></FlatList>
        </View>
          <Custom_Footer style={{justifyContent: 'flex-end'}}/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: Color.OffWhite,
    },
    collection:{
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute',
    },
    arrivalContainer:
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: scale(32),
      paddingHorizontal: scale(16),
    },
    arrivalText: {
      fontWeight: '400',
      fontSize: scale(18),
      lineHeight: scale(40),
      textAlign: 'center',
      fontFamily: FONT_FAMILY.JoseFinSansRegular,
      color: Color.TitleActive,
    },
    lineBottom:{
      alignSelf: 'center',
  },
    wrapper:{
      marginBottom: scale(5),
  },


})