import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions,Modal } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
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
import ZoomImageView from './components/ZoomImageView'
import { useSelector } from 'react-redux';
import { addToCart } from '../../../../redux/actions/cartActions';



const ProductDetailsScreen = (props) => {
  const [visible,setVisible] = useState(true);
  const [count, setCount] = useState(1);
  const [colorChoose, setChooseColor] = useState('1');
  const [sizeChoose, setChooseSize] = useState('1');
  const [productImages,setProductImages] = useState([]);
 
  const {data} = props.route.params;

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(data.id, data.name,data.price,data.img,count));
  };
  const cart = useSelector((state) => state.cart);


  useEffect(()=>{
    const handleProductImages = async () => {
      const listOfProductImages = [];
      await Promise.all(data.image.map(async(image) => {
        listOfProductImages.push({id:image._id, image:image.url})
      }))
      setProductImages(listOfProductImages);
    };
    handleProductImages();

  }, [])


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
      id: 1,
      name: ' reversible ',
      price: 120,
      img: IMG_ModelOne,
    },
    {
      id: 2,
      name: '21WN cardigan',
      price: 140,
      img: IMG_ModelTwo,
    },
    {
      id: 3,
      name: '21WN angora',
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
  
  

  return (
    visible ? (
    <SafeAreaView style={styles.container}>
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
              alignItems:'center', justifyContent:'center', flexDirection:'column',height:scale(510) }} key={item => `${item.id}`} >
                <View style={styles.imgContainer}>
                  <Image source={{uri:`${item.image}`}} style={styles.img} resizeMode='contain'/>
                  <TouchableOpacity
                    onPress={() => setVisible(false)}
                    >
                    <IC_Resize
                      style={{right:scale(5),bottom:scale(3),position:'absolute'}}
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
            <Text style={[styles.prodName]}>{data.name}</Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={[styles.prodDescription]}>{data.description}</Text>
          </View>
          <Text style={styles.prodPrice}>${data.price}</Text>
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
        <View style={{marginTop:scale(24.5)}}><AddToBasket onPress={addToCartHandler}/></View>
        {/* Product Detail */}
        <View style={styles.detailView}>
          <Text style={[fontStyles.subTitle16pxFont,styles.title]}>MATERIALS</Text>
          <Text style={[fontStyles.bodyMediumFont,styles.subTitle]}>{data.material}</Text>
          <Text style={[fontStyles.subTitle16pxFont,styles.title]}>CARE</Text>
          <Text style={[fontStyles.bodyMediumFont,styles.subTitle]}>{data.care}</Text>
          
        </View>
        {/* You May Also Like */}
        <View style={styles.likeProductContainer}>
          <Text style={styles.likeProductText}>YOU MAY ALSO LIKE</Text>
          <Image source={LineBottom} style={styles.lineBottom} resizeMode='stretch'/>
          <FlatList
            contentContainerStyle={{alignContent: 'space-around', marginTop:scale(20)}}
            horizontal={false}
            data={likeProducts}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={styles.wrapperLikeProducts}
            renderItem={({item}) => (
              <Custom_GridViewProd
              image={item.img}
              prodName={item.name}
              prodPrice={item.price}
              onPress={() => props.navigation.replace('ProductDetailsScreen', {
                data: item,
              })}
              />
            )}
          />      
        </View>
        {/* Footer */}
          <Custom_Footer style={{justifyContent: 'flex-end', marginTop:scale(37)}} 
          onAboutPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'OurStoryScreen' })}
          onContactPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'ContactUsScreen' })}
          onBlogPress={() => props.navigation.navigate('BlogStackScreen', { screen: 'BlogGridViewScreen' })}/>
        </ScrollView>
    </SafeAreaView>):(
      <ZoomImageView onPressVisible={() => setVisible(true)} productImages={productImages}/>
    )
  
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
      marginTop:scale(12),
    },
    descriptionView: {
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:scale(10),
    },
    prodName: {
      color: color.TitleActive,
      fontFamily: FONT_FAMILY.Regular,
      lineHeight:scale(18),
      fontSize:scale(18),
    },
    prodDescription: {
      color: color.TitleActive,
      fontFamily: FONT_FAMILY.Regular,
      lineHeight:scale(16),
      fontSize:scale(16),
    },
    prodPrice: {
      fontFamily: FONT_FAMILY.Regular,
      lineHeight:scale(21),
      fontSize:scale(18),
      marginTop:scale(10),
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
      marginLeft:scale(20),
      color:color.TitleActive,
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