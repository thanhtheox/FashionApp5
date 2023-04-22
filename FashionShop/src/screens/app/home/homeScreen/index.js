import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Custom_Header from '../../../../components/header/Custom_Header'
import Custom_Footer from '../../../../components/footer/Custom_Footer'
import Custom_ItemScrollView from './components/Custom_ItemScrollView'
import Custom_HomepageProd from '../../../../components/products/CustomHomepageProd'
import Custom_Tag1 from '../../../../components/tags/fill'
import scale from '../../../../constants/responsive'
import { IMG_Collection, IMG_Logo, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../../../assets/images'
import {Sticker1,Sticker2,Sticker3,Sticker4,Sticker5} from './images'
import { LineBottom } from '../../../../components/footer/images'
import FONT_FAMILY from '../../../../constants/fonts'
import color from '../../../../constants/color'
import { SwiperFlatList } from 'react-native-swiper-flatlist'




const HomeScreen = (props) => {
  const banners = [
    {
      key: '1',
      banner: IMG_Collection,
    },
    {
      key: '2',
      banner: IMG_Collection,
    },
    {
      key: '3',
      banner: IMG_Collection,
    },
  ];
  const products = [
    {
      id: 1,
      name: ' reversible angora cardigan',
      price: 120,
      img: IMG_ModelOne,
    },
    {
      id: 2,
      name: '21WN reversible cardigan',
      price: 140,
      img: IMG_ModelTwo,
    },
    {
      id: 3,
      name: '21WN angora cardigan',
      price: 180,
      img: IMG_ModelThree,
    },
    {
      id: 4,
      name: 'Oblong bag',
      price: 220,
      img: IMG_ModelFour,
    },
  ];
  const tags = [
    {
      key: '1',
      value: '#Boss',
    },
    {
      key: '2',
      value: '#Burberry',
    },
    {
      key: '3',
      value: '#Catier',
    },
    {
      key: '4',
      value: '#Gucci',
    },
    {
      key: '5',
      value: '#Prada',
    },
    {
      key: '6',
      value: '#Tiffany',
    },
    {
      key: '7',
      value: '#Prada',
    },
    {
      key: '8',
      value: '#Tiffany',
    },
  ];
  const stickers = [
    {
      key: '1',
      image: Sticker1,
      text:'Fast shipping. Free on orders over $25.',
    },
    {
      key: '2',
      image:Sticker2,
      text: 'Sustainable process from start to finish.',
    },
    {
      key: '3',
      image:Sticker3,
      text: 'Unique designs and high-quality materials.',
    },
    {
      key: '4',
      image:Sticker4,
      text: 'Fast shipping. Free on orders over $25.',
    },
  ];


  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        {/* <Custom_Header/> */}
        <ScrollView >
          {/* Banner */}
          <View style={styles.bannerContainer}>
            <SwiperFlatList
              showPagination
              paginationStyle={styles.wrapDot}
              paginationStyleItemActive={styles.dotActive}
              paginationStyleItemInactive={styles.dot}
              data={banners}
              renderItem={({ item }) => (
                <TouchableOpacity style={{width:Dimensions.get('window').width}} 
                key={item => `${item.key}`}
                onPress={() => props.navigation.navigate('CollectionStackScreen', { screen: 'CollectionDetailScreen' })} >
                  <Image source={item.banner} style={styles.bannerWrap} resizeMode='stretch'></Image>
                </TouchableOpacity>
              )}
            />     
            <View style={styles.exploreButton}>
              <TouchableOpacity onPress={() => props.navigation.navigate('CollectionStackScreen', { screen: 'CollectionScreen' })}>
                <Text style={styles.exploreButtonText}>Explore Collection</Text>
              </TouchableOpacity>
            </View> 
          </View>
          {/* New Arrival */}
          <View style={styles.arrivalContainer}>
            <Text style={styles.arrivalText}>NEW ARRIVAL</Text>
            <Image source={LineBottom} style={{alignSelf: 'center'}} resizeMode='stretch'/>
            <Custom_ItemScrollView style={{marginTop:scale(24),alignSelf:'center'}}/>
            <FlatList
            contentContainerStyle={{alignContent: 'space-around'}}
            horizontal={false}
            data={products}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={styles.wrapperArrival}
            renderItem={({item}) => (
              <View>
                <Custom_HomepageProd
                  width={165}
                  image={item.img}
                  prodName={item.name}
                  prodPrice={item.price}
                  onPress={() => props.navigation.navigate('ProductDetailsScreen', {
                    // categoryName: props.categoryName,
                    data: item,
                  })}
                  // {...props}
                  // categoryData={item}
                />
              </View>
            )}></FlatList>
            <TouchableOpacity><Text style={styles.exploreText}>Explore More ⇒</Text></TouchableOpacity>
          </View>
          {/* Collection */}
          <View style={styles.collectionContainer}>
            <Text style={styles.collectionText}>COLLECTIONS</Text>
            <TouchableOpacity style={{alignItems:'center', width:'100%'}} 
            onPress={() => props.navigation.navigate('CollectionStackScreen', { screen: 'CollectionDetailScreen' })}>
              <Image source={IMG_ModelOne} resizeMode='stretch' style={{width:'100%', marginTop:scale(15)}}/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => props.navigation.navigate('CollectionStackScreen', { screen: 'CollectionDetailScreen' })}>
              <Image source={IMG_ModelFour} resizeMode='stretch' style={{marginTop:scale(35)}}/>
            </TouchableOpacity>
          </View>        
          {/* Product */}
          <View style={styles.productContainer}>
            <Text style={styles.productText}>JUST FOR YOU</Text>
            <Image source={LineBottom} style={styles.lineBottom} resizeMode='stretch'/>
            <SwiperFlatList
              showPagination
              paginationStyle={styles.wrapDot}
              paginationStyleItemActive={styles.dotActive}
              paginationStyleItemInactive={styles.dot}
              data={products}
              renderItem={({ item }) => (
                <View key={item => `${item.key}`} style={styles.productWrap}>
                  <Custom_HomepageProd
                  height={387}
                  width={255}
                  image={item.img}
                  prodName={item.name}
                  prodPrice={item.price}
                  onPress={() => props.navigation.navigate('ProductDetailsScreen', {
                    // categoryName: props.categoryName,
                    data: item,
                  })}
                  // {...props}
                  // categoryData={item}
                  />
                </View>
              )}
            />      
          </View>
          {/* Trending */}
          <View style={styles.trendContainer}>
              <Text style={styles.trendingText}>@Trending</Text>
              <View style={styles.tagView}>
                {tags.map(item =>            
                      <Custom_Tag1
                        {...props}  
                        key={item.key}
                        value={item.value}
                      />
                )}
              </View>
              
          </View>
          {/* Open Fashion */}
          <View style={styles.openFashionContainer}>
            <Image source={IMG_Logo} style={styles.openFashionText}/>
            <Image source={LineBottom} style={{alignSelf: 'center',marginTop: scale(5),}} resizeMode='stretch'/>
            <FlatList
            contentContainerStyle={{alignContent: 'space-around'}}
            horizontal={false}
            data={stickers}
            keyExtractor={item => `${item.key}`}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={styles.wrapperArrival}
            renderItem={({item}) => (
                <View key={item.key} style={styles.stickerView}>
                  <Image source={item.image}></Image>
                  <Text>{item.text}</Text>
                </View>
              )}></FlatList> 
            <Image source={Sticker5}></Image>
          </View>
          <Custom_Footer style={{justifyContent: 'flex-end'}} 
          onAboutPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'OurStoryScreen' })}
          onContactPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'ContactUsScreen' })}
          onBlogPress={() => props.navigation.navigate('BlogStackScreen', { screen: 'BlogGridViewScreen' })}
          />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: color.OffWhite,
    },
    bannerContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    bannerWrap: {
      justifyContent:'center',
      alignSelf:'center',
      width:'100%',
    },
    exploreButton:{
      position:'absolute',
      borderRadius:scale(30),
      paddingHorizontal:scale(30),
      paddingVertical:scale(8),
      flexDirection:'row',
      display:'flex',
      alignItems:'center',
      bottom: scale(43),
      backgroundColor:'rgba(0, 0, 0, 0.4)',
    },
    exploreButtonText: {

      fontFamily:FONT_FAMILY.Regular,
      fontSize:scale(16),
      lineHeight:scale(24),
      color:color.OffWhite,
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
      fontSize: scale(18),
      lineHeight: scale(40),
      textAlign: 'center',
      fontFamily: FONT_FAMILY.Regular,
      color: color.TitleActive,
    },
    lineBottom:{
      alignSelf: 'center',
      marginTop: scale(30),
  },
    wrapperArrival:{
      marginBottom: scale(5),
  },
    wrapperBrand:{
      marginBottom: scale(35),
  },
  exploreText: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
    lineHeight: scale(24),
    textAlign: 'center',
    color: color.TitleActive,
  },
  brandContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectionContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: scale(60),
  },
  collectionText: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize:scale(18),
    lineHeight:scale(40),
    color:color.TitleActive,
    letterSpacing:scale(4),
  },
  videoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  trendContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  trendingText: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(24),
    lineHeight: scale(60),
    textAlign: 'center',
    color: color.TitleActive,
  },
  tagView: {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
    paddingHorizontal: scale(30),
  },
  productWrap: {
    justifyContent:'space-around',
    height:scale(380), 
    width: scale(265),
    alignItems:'center',
    flexDirection:'column', 
  },
  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',   
    width: '100%',
  },
  dotActive: {
    margin: scale(1),
    color: color.TitleActive,
    width: scale(7),
    height: scale(7),
  },
  dot: {
    margin: scale(1),
    opacity: 0.27,
    color: color.White,
    size: 3,
    width: scale(7),
    height: scale(7),
  },
  productContainer:
  {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scale(32),
    paddingHorizontal: scale(16),
  },
  productText: {
    fontSize: scale(18),
    lineHeight: scale(40),
    textAlign: 'center',
    fontFamily: FONT_FAMILY.Regular,
    color: color.TitleActive,
  },
  openFashionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scale(32),
    paddingHorizontal: scale(16),
    marginBottom:scale(18),
  },
  openFashionText: {
    width:scale(230),
    height:scale(200),
  },
  stickerView: {
    width:scale(155),
    height:scale(82),
    paddingHorizontal: scale(8),
    paddingVertical: scale(6),
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: scale(6),
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-around',
    marginLeft:scale(18),
  },
})