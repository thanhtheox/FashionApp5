import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions,Modal } from 'react-native'
import React,{useState} from 'react'
import Custom_Header from '../../../components/header/Custom_Header'
import Custom_Footer from '../../../components/footer/Custom_Footer'
import color from '../../../constants/color'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import CollectionProduct from './components/collectionProducts'
import {IMG_Collection, IMG_ModelFour,IMG_ModelThree,IMG_ModelOne,IMG_ModelTwo } from '../../../assets/images'
import { LineBottom } from '../../../components/footer/images'
import SuggestiveCollection from './components/suggestiveCollections'


const CollectionDetailScreen = (props) => {
    const collectionProducts = [
      {
        img: IMG_ModelOne,
        key: '1',
        name: '21WN',
        description:'reversible angora cardigan',
        price: '$120',
      },
      {
        img: IMG_ModelTwo,
        key: '2',
        name: '21WN',
        description:'reversible angora cardigan',
        price: '$120',
      },
      {
        img: IMG_ModelThree,
        key: '3',
        name: '21WN',
        description:'reversible angora cardigan',
        price: '$120',
      },
      {
        img: IMG_ModelFour,
        key: '4',
        name: 'Oblong bag',
        description:'reversible angora cardigan',
        price: '$120',
      },
      {
        img: IMG_ModelThree,
        key: '5',
        name: '21WN',
        description:'reversible angora cardigan',
        price: '$120',
      },
      {
        img: IMG_ModelFour,
        key: '6',
        name: 'Oblong bag',
        description:'reversible angora cardigan',
        price: '$120',
      },
  ];
  const collections = [
    {
      img: IMG_Collection,
      key: '1',
      name: 'OCTOBER COLLECTION',
    },
    {
      img: IMG_Collection,
      key: '2',
      name: 'BLACK COLLECTION',
    },
    {
      img: IMG_Collection,
      key: '3',
      name: 'HAE BY HAEKIM',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
        {/* Collection */}
        <ScrollView>
          <View style={{backgroundColor:color.TitleActive}}>
            <Text style={styles.nameCollectionText}>OCTOBER</Text>
            <Text style={styles.collectionText}>COLLECTION</Text>
            <View style={styles.imgContainer}>
              <Image source={IMG_Collection} style={styles.img} />
            </View>
          </View>
          <View style={styles.collectionContainer}>          
            <FlatList
              contentContainerStyle={{alignContent: 'space-around', marginTop:scale(20)}}
              horizontal={false}
              data={collectionProducts}
              keyExtractor={item => `${item.key}`}
              numColumns={2}
              scrollEnabled={false}
              columnWrapperStyle={{marginBottom:scale(5)}}
              renderItem={({item}) => (
                  <CollectionProduct
                    image={item.img}
                    prodName={item.name}
                    prodDescription={item.description}
                    prodPrice={item.price}
                  />
              )}
            />      
          </View>
          {/* You May Also Like */}
          <View style={styles.likeProductContainer}>
            <Text style={styles.likeProductText}>YOU MAY ALSO LIKE</Text>
            <Text style={styles.line}>━━━━━━━━◆━━━━━━━━</Text>
            <FlatList
              contentContainerStyle={{alignContent: 'space-around', marginTop:scale(20)}}
              data={collections}
              horizontal={true}
              keyExtractor={item => `${item.key}`}
              renderItem={({item}) => (
                  <SuggestiveCollection
                    image={item.img}
                    prodName={item.name}
                    {...props}
                    categoryData={item}
                  />
              )}
            />      
          </View>
          {/* Footer */}
          <Custom_Footer style={{justifyContent: 'flex-end', marginTop:scale(37)}}
          onAboutPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'OurStoryScreen' })}
          onContactPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'ContactUsScreen' })}
          />
        </ScrollView>
    </SafeAreaView>
  )
}

export default CollectionDetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: color.OffWhite,
    },
    imgContainer: {
      height: scale(300),
      marginHorizontal:scale(16),
    },
    img: {
      width: '100%',
    },
    wrapDot: {
      flexDirection: 'row',
      position:'absolute',
      alignSelf: 'center',   
      width: '100%',
      bottom:0,
      top: scale(540),
    },
    dotActive: {
      marginHorizontal: scale(3),
      bottom:scale(50),
      width: scale(7),
      height: scale(7),
    },
    dot: {
      marginHorizontal: scale(3),
      bottom:scale(50),
      opacity: 0.27,
      size: 3,
      width: scale(7),
      height: scale(7),
    },
    collectionContainer:
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: scale(10),
      paddingHorizontal: scale(16),
      backgroundColor:color.TitleActive,
    },
    collectionText: {
      fontSize: scale(16),
      lineHeight: scale(16),
      letterSpacing:scale(3),
      textAlign: 'center',
      fontFamily: FONT_FAMILY.Regular,
      color: color.OffWhite,
    },
    nameCollectionText: {
      fontSize: scale(30),
      lineHeight: scale(40),
      textAlign: 'center',
      fontFamily: FONT_FAMILY.Italic,
      color: color.OffWhite,
    },
    likeProductContainer:
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: scale(32),
      paddingHorizontal: scale(16),
      backgroundColor:color.TitleActive,
    },
    likeProductText: {
      fontSize: scale(18),
      lineHeight: scale(36),
      letterSpacing:scale(4),
      textAlign: 'center',
      fontFamily: FONT_FAMILY.Regular,
      color: color.OffWhite,
    },
    lineBottom:{
      alignSelf: 'center',
  },
  line: {
    color: color.OffWhite,
    opacity:0.4,
    fontFamily: FONT_FAMILY.Regular,
    fontSize:scale(10),
    lineHeight:scale(10),
    alignSelf:'center',
    textAlign:'center'
  },
})