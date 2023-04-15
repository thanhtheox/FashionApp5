import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView, 
  Button
  } from 'react-native';
  import React, { useState } from 'react';
  import color from '../../../../constants/color';
  import scale from '../../../../constants/responsive';
  import FONT_FAMILY from '../../../../constants/fonts';
  import Custom_Header from '../../../../components/header/Custom_Header';
  import SearchResultBar from './component/searchResultBar';
  import { IMG_ModelFour, IMG_ModelOne,IMG_ModelTwo, IMG_ModelThree } from '../../../../assets/images'
  import Custom_GridViewProd from '../../../../components/products/CustomGridViewProd';  
  import {IC_DownSolid, IC_Filter} from '../../../../assets/icons';
import Custom_Footer from '../../../../components/footer/Custom_Footer';

const searchResult = [
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
    img: IMG_ModelOne,
    key: '5',
    name: '21WN',
    description:'reversible angora cardigan',
    price: '$120',
  },
  {
    img: IMG_ModelTwo,
    key: '6',
    name: '21WN',
    description:'reversible angora cardigan',
    price: '$120',
  },
  {
    img: IMG_ModelThree,
    key: '7',
    name: '21WN',
    description:'reversible angora cardigan',
    price: '$120',
  },
  {
    img: IMG_ModelFour,
    key: '8',
    name: 'Oblong bag',
    description:'reversible angora cardigan',
    price: '$120',
  },
  {
    img: IMG_ModelTwo,
    key: '9',
    name: '21WN',
    description:'reversible angora cardigan',
    price: '$120',
  },
  {
    img: IMG_ModelThree,
    key: '10',
    name: '21WN',
    description:'reversible angora cardigan',
    price: '$120',
  },
  {
    img: IMG_ModelFour,
    key: '11',
    name: 'Oblong bag',
    description:'reversible angora cardigan',
    price: '$120',
  },
];

  const SearchDetailScreen = (props) => {
    const [data, setData] = useState(searchResult.slice(0, 4));
    const [page, setPage] = useState(1);
  
    const handleLoadMore = () => {
      const newData = searchResult.slice(data, 4 * (page + 1));
      setData(newData);
      setPage(page + 1);
    };
    const renderItem = ({ item }) => (
      <Custom_GridViewProd
        image={item.img}
        prodName={item.name}
        prodDescription={item.description}
        prodPrice={item.price}
      />
    );
    return (
      <SafeAreaView style={styles.container}>
        <SearchResultBar />
        <View style={styles.resultSum}>
          <Text style={styles.sum}>SEARCH RESULTS</Text>
          <View style={styles.filterBorder}>
            <TouchableOpacity>
              <IC_Filter stroke = {'#DD8560'}/>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.newTag}>
            <Text style={styles.new}>New</Text>
            <TouchableOpacity>
              <IC_DownSolid style={styles.iconDown}/>
            </TouchableOpacity>
          </View> */}
        </View>
        <ScrollView style={styles.list}>
          <View style={styles.likeProductContainer}>
            <FlatList
              contentContainerStyle={{alignContent: 'space-around', marginTop:scale(20)}}
              horizontal={false}
              data={data}
              keyExtractor={item => `${item.key}`}
              numColumns={2}
              scrollEnabled={false}
              columnWrapperStyle={styles.wrapperLikeProducts}
              renderItem={renderItem}
              />   
              {searchResult.length > data.length && (
                <TouchableOpacity style={styles.button} onPress={handleLoadMore}>
                  <Text style={styles.text}>Load more</Text>
                </TouchableOpacity>
              )}
          </View>
          <Custom_Footer 
          onAboutPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'OurStoryScreen' })}
          onContactPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'ContactUsScreen' })}
          onBlogPress={() => props.navigation.navigate('BlogStackScreen', { screen: 'BlogGridViewScreen' })}/>
        </ScrollView>
      </SafeAreaView>
    );
  };
  export default SearchDetailScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color.OffWhite,
      flexDirection: 'column',
      flex: 1,
    },
    button: {
      width: scale(295),
      height: scale(61),
      marginTop:scale(20),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.TitleActive,
    },
    text: {
      fontWeight: '700',
      fontSize: scale(24),
      textAlign: 'center',
      color: color.White,
      fontFamily: FONT_FAMILY.JoseFinSansRegular,
    },
    resultSum:{
      marginTop: scale(20),
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    sum: {
      fontWeight: '400',
      fontSize: scale(16),     
      color: color.TitleActive,
      fontFamily: FONT_FAMILY.JoseFinSansRegular,
    },
    newTag: {
      // marginLeft: scale(-130),
      // width: scale(72.75),
      // height: scale(36),
      backgroundColor: color.AthensGray,
      borderRadius: scale(33),
      justifyContent: 'center',
      alignItems: 'center',
    },
    new: {
      fontWeight: '400',
      marginLeft: scale(-10),
      fontSize: scale(13),     
      color: color.TitleActive,
      fontFamily: FONT_FAMILY.JoseFinSansRegular,
    },
    iconDown: {
      marginLeft: scale(40),
      justifyContent: 'center',
      marginTop: scale(-15),
    },
    filterBorder:{
      marginLeft: scale(180),
      width: scale(36),
      height: scale(36),
      backgroundColor: color.AthensGray,
      borderRadius: scale(180),
      justifyContent: 'center',
      alignItems: 'center',
    },
    list: {
      marginTop: scale(10),
    },
    likeProductContainer:
    {
      flexDirection: 'column',
      alignItems: 'center',
    },
    likeProductText: {
      fontSize: scale(18),
      lineHeight: scale(40),
      textAlign: 'center',
      fontFamily: FONT_FAMILY.Regular,
      color: color.TitleActive,
    },
    productWrap: {
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'column', 
    },
    wrapperLikeProducts:{
      marginBottom: scale(5),
  },
})
  