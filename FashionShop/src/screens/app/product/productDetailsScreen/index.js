import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions,Modal } from 'react-native'
import React,{useState} from 'react'
import Custom_Header from '../../../../components/header/Custom_Header'
import Custom_Footer from '../../../../components/footer/Custom_Footer'
import color from '../../../../constants/color'
import AddToBasket from '../../../../components/buttons/AddToBasket'
import { IC_Export, IC_DoNotBleach,IC_DoNotTumbleDry,IC_DoNotWash, IC_Iron, IC_Resize } from '../../../../assets/icons'
import { IMG_ModelFour, IMG_ModelOne,IMG_ModelTwo, IMG_ModelThree } from '../../../../assets/images'
import { LineBottom } from '../../../../components/footer/images'
import scale from '../../../../constants/responsive'
import SwiperFlatList from 'react-native-swiper-flatlist'
import FONT_FAMILY from '../../../../constants/fonts'
import fontStyles from '../../../../constants/fontStyle'
import Custom_GridViewProd from '../../../../components/products/CustomGridViewProd'



const ProductDetailsScreen = (props) => {
  const [colorChoose, setChooseColor] = useState('1');
  const [sizeChoose, setChooseSize] = useState('1');
  const sizes = [
    {
      key: '1',
      size:'S',
    },
    {
      key: '2',
      size:'M',
    },
    {
      key: '3',
      size:'L',
    },
  ];
  const colors = [
    {
      key: '1',
      color:'#0F140D',
    },
    {
      key: '2',
      color:'#DD8560',
    },
    {
      key: '3',
      color:'#E1E0DB',
    },
  ];
  const likeProducts = [
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
  ];
  
  const productImages = [
    {
      key: '1',
      image: IMG_ModelFour,
    },
    {
      key: '2',
      image: IMG_ModelFour,
    },
    {
      key: '3',
      image: IMG_ModelFour,
    },
    {
      key: '4',
      image: IMG_ModelFour,
    },
    {
      key: '5',
      image: IMG_ModelFour,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <Custom_Header/>
        <ScrollView >
        {/* Product Images */}
        <View style={styles.productContainer}>
          <SwiperFlatList
            showPagination
            paginationStyle={styles.wrapDot}
            paginationStyleItemActive={styles.dotActive}
            paginationStyleItemInactive={styles.dot}
            paginationDefaultColor={color.PlaceHolder}
            paginationActiveColor={color.TitleActive}
            data={productImages}
            renderItem={({ item }) => (
              <View style={{width:Dimensions.get('window').width, paddingHorizontal:scale(16),
              alignItems:'center', justifyContent:'center', flexDirection:'column',height:scale(510) }} key={item => `${item.key}`} >
                <View style={styles.imgContainer}>
                  <Image source={item.image} style={styles.img} resizeMode='contain'/>
                  <TouchableOpacity
                    // onPress={() => setVisible(true)}
                    >
                    <IC_Resize
                      style={{right:scale(5),bottom:scale(3),position:'absolute'}}
                      stroke={color.Secondary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          /> 
        </View>
        {/* Product Variation */}
        <View style={styles.productVariationContainer}>
          <View style={styles.nameView}>
            <Text style={[fontStyles.titleFont, styles.prodName]}>{'MOHAN'}</Text>
            <TouchableOpacity><IC_Export /></TouchableOpacity>
          </View>
          <Text style={[fontStyles.bodySmallFont, styles.prodDescription]}>
            {'Recycle Boucle Knit Cardigan Pink'}
          </Text>
          <Text style={styles.prodPrice}>{'$120'}</Text>
          <View style={{flexDirection:'row', marginTop:scale(18)}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:scale(12),width:'40%'}}>
              <Text style={{color:color.Label, fontFamily:FONT_FAMILY.Regular,
                fontSize:scale(16),lineHeight:scale(18)}}>Color</Text>
              {colors.map(item => 
                <TouchableOpacity style={{borderRadius:360,borderColor:color.PlaceHolder, borderWidth:colorChoose===item.key?1:0, alignItems:'center',
                justifyContent:'center',width:scale(22),height:scale(22)}} 
                  onPress={() => setChooseColor(item.key)} key={item.key}>
                  <View style={{borderRadius:360, backgroundColor:item.color,justifyContent:'center',
                  width:scale(16),height:scale(16)}}/> 
                </TouchableOpacity>     
              )}
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:scale(35),paddingHorizontal:scale(12),width:'40%'}}>
              <Text style={{color:color.Label, fontFamily:FONT_FAMILY.Regular,
                fontSize:scale(16),lineHeight:scale(18)}}>Size</Text>
              {sizes.map(item => 
                <TouchableOpacity style={{borderRadius:360, borderWidth:1, borderColor:sizeChoose===item.key?color.Body:color.Border,
                  width:scale(16),height:scale(16), alignItems:'center',backgroundColor:sizeChoose===item.key?color.Body:color.OffWhite}}
                  onPress={() => setChooseSize(item.key)} key={item.key}>
                    <Text style={{color:sizeChoose===item.key?color.InputBackground:color.Label, fontFamily:FONT_FAMILY.Regular,
                fontSize:scale(12),lineHeight:scale(14),textAlign:'center'}}>{item.size}</Text>
                </TouchableOpacity>           
              )}
            </View>
          </View>
        </View>  
        {/* Button Add To Basket */}
        <View style={{marginTop:scale(24.5)}}><AddToBasket /></View>
        {/* Product Detail */}
        <View style={styles.detailView}>
          <Text style={[fontStyles.subTitle14pxFont,styles.title]}>MATERIALS</Text>
          <Text style={[fontStyles.bodyMediumFont,styles.subTitle]}>{"We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. "}</Text>
          <Text style={[fontStyles.subTitle14pxFont,styles.title]}>CARE</Text>
          <Text style={[fontStyles.bodyMediumFont,styles.subTitle]}>{"To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment. Check your clothes tag to see what you should notice"}</Text>
          
        </View>
        {/* You May Also Like */}
        <View style={styles.likeProductContainer}>
          <Text style={styles.likeProductText}>YOU MAY ALSO LIKE</Text>
          <Image source={LineBottom} style={styles.lineBottom} resizeMode='stretch'/>
          <FlatList
            contentContainerStyle={{alignContent: 'space-around', marginTop:scale(20)}}
            horizontal={false}
            data={likeProducts}
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
        {/* Footer */}
          <Custom_Footer style={{justifyContent: 'flex-end', marginTop:scale(37)}}/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: color.OffWhite,
    },
    productContainer:{
      justifyContent: 'center',
      alignItems: 'center',
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
    imgContainer: {
      width: scale(343),
      height: scale(457.33),
    },
    img: {
      justifyContent:'center',
      alignSelf:'center',
      width:'100%',
      height: scale(457.33),
    },
    productVariationContainer: {
      flexDirection:'column',
      justifyContent:'space-between',
      alignSelf:'center',
      width:'92%',
      marginHorizontal:scale(16),
    },
    nameView: {
      flexDirection:'row',
      justifyContent:'space-between',
    },
    prodName: {
      fontSize:scale(16),
      fontFamily: FONT_FAMILY.Regular,
      color: color.TitleActive,
      lineHeight:scale(19),
      letterSpacing:scale(4),
    },
    prodDescription: {
      color: color.Label,
      fontFamily: FONT_FAMILY.Regular,
      lineHeight:scale(19),
      fontSize:scale(16),
    },
    prodPrice: {
      fontFamily: FONT_FAMILY.Regular,
      lineHeight:scale(21),
      fontSize:scale(18),
      color: color.Primary,
    },
    detailView: {
      flexDirection:'column',
      paddingHorizontal:scale(18),
      justifyContent:'space-around',
    },
    title: {
      marginTop:scale(30),
      color:color.TitleActive,
    },
    subTitle: {
      color:color.Label,
    },
    iconTextView:{
      flexDirection:'column',
      marginTop:scale(14),
    },
    likeProductContainer:
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:scale(69),
      paddingTop: scale(32),
      paddingHorizontal: scale(16),
    },
    likeProductText: {
      fontSize: scale(18),
      lineHeight: scale(40),
      textAlign: 'center',
      fontFamily: FONT_FAMILY.Regular,
      color: color.TitleActive,
    },
    lineBottom:{
      alignSelf: 'center',
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
})