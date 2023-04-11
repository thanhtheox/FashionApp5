import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions,Modal } from 'react-native'
import React,{useState} from 'react'
import Custom_Header from '../../../components/header/Custom_Header'
import Custom_Footer from '../../../components/footer/Custom_Footer'
import color from '../../../constants/color'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import CollectionItems from './components/collectionItems'
import {IMG_Collection } from '../../../assets/images'



const CollectionScreen = (props) => {
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
        <View style={{backgroundColor:color.TitleActive}}>
          <Text style={styles.collectionText}>COLLECTION</Text>
        </View>
        <ScrollView>
          <View style={styles.collectionContainer}>          
            <FlatList
              contentContainerStyle={{justifyContent: 'space-between', marginVertical:scale(20)}}
              horizontal={false}
              data={collections}
              keyExtractor={item => `${item.key}`}
              scrollEnabled={false}
              renderItem={({item}) => (
                  <CollectionItems
                    image={item.img}
                    prodName={item.name}
                    prodNumber={item.key}
                    onPress={() => props.navigation.navigate('CollectionDetailScreen')}
                  />
              )}
            />      
          </View>
          {/* Footer */}
          <Custom_Footer style={{justifyContent: 'flex-end', marginTop:scale(37)}}/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CollectionScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: color.OffWhite,
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
      fontSize: scale(24),
      lineHeight: scale(40),
      textAlign: 'center',
      fontFamily: FONT_FAMILY.Italic,
      color: color.OffWhite,
    },
})