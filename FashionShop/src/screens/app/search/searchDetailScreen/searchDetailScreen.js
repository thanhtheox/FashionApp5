import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView
  } from 'react-native';
  import React from 'react';
  import color from '../../../../constants/color';
  import scale from '../../../../constants/responsive';
  import FONT_FAMILY from '../../../../constants/fonts';
  import Custom_Header from '../../../../components/header/Custom_Header';
  import SearchResultBar from './component/searchResultBar';
  import { IMG_ModelFour, IMG_ModelOne,IMG_ModelTwo, IMG_ModelThree } from '../../../../assets/images'
  import Custom_GridViewProd from '../../../../components/products/CustomGridViewProd';  

  const SearchDetailScreen = (props) => {
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
    ];
    return (
      <SafeAreaView style={styles.container}>
        <Custom_Header />
        <SearchResultBar />
        <View style={styles.list}>
        <ScrollView>        
          <View style={styles.likeProductContainer}>
            <FlatList
              contentContainerStyle={{alignContent: 'space-around', marginTop:scale(20)}}
              horizontal={false}
              data={searchResult}
              keyExtractor={item => `${item.key}`}
              numColumns={2}
              scrollEnabled={false}
              columnWrapperStyle={styles.wrapperLikeProducts}
              renderItem={({item}) => (
                <Custom_GridViewProd
                  image={item.img}
                  prodName={item.name}
                  prodDescription={item.description}
                  prodPrice={item.price}
                  {...props}
                  categoryData={item}
                />
              )}
            />      
          </View>
        </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default SearchDetailScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color.White,
      flex: 1,
    },
    list: {
      marginTop: scale(100),
    },
    likeProductContainer:
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop:scale(69),
      // paddingTop: scale(32),
      // paddingHorizontal: scale(16),
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
      height:scale(380), 
      width: scale(265),
      alignItems:'center',
      flexDirection:'column', 
    },
    wrapperLikeProducts:{
      marginBottom: scale(5),
  },
  });
  