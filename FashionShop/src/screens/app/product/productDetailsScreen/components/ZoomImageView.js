import { StyleSheet, Image, View,Dimensions,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { IMG_ModelFour } from '../../../../../assets/images'
import { IC_Delete } from '../../../../../assets/icons'
import scale from '../../../../../constants/responsive'
import color from '../../../../../constants/color'
import SwiperFlatList from 'react-native-swiper-flatlist'

const ZoomImageView = (props) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productContainer}>
        <TouchableOpacity
            onPress={props.onPressVisible}
            >
            <IC_Delete
                style={{right:scale(5),bottom:scale(3),position:'absolute'}}
            />
        </TouchableOpacity>
        <SwiperFlatList
            vertical={true}
            showPagination
            paginationStyle={styles.wrapDot}
            paginationStyleItemActive={styles.dotActive}
            paginationStyleItemInactive={styles.dot}
            paginationDefaultColor={color.TitleActive}
            paginationActiveColor={color.Primary}
            data={props.productImages}
            renderItem={({ item }) => (
              <View style={{width:Dimensions.get('window').width,
              alignItems:'center', justifyContent:'center', flexDirection:'column',height:scale(510) }} key={item => `${item.key}`} >
                <View style={styles.imgContainer}>
                  <Image source={item.image} style={styles.img} resizeMode='contain'/>
                </View>
              </View>
            )}
          /> 
      </View>
    </SafeAreaView>
  )
}

export default ZoomImageView

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: color.TitleActive
    },
    productContainer:{
        marginTop: scale(40),
      },
      wrapDot: {
        flexDirection: 'column',
        alignSelf: 'flex-end',  
        width: '100%',
        top:scale(250),
        left:scale(350),
      },
      dotActive: {
        marginVertical: scale(3),
        size: 3,
        width: scale(7),
        height: scale(7),
      },
      dot: {
        marginVertical: scale(3),
        opacity: 0.27,
        size: 3,
        width: scale(7),
        height: scale(7),
      },
      imgContainer: {
        width: '100%',
        height: scale(500),
      },
      img: {
        justifyContent:'center',
        alignSelf:'center',
        width:'100%',
        height: scale(500),
      },
})