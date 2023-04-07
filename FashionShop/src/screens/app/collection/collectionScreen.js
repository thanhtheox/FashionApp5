import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions,Modal } from 'react-native'
import React,{useState} from 'react'
import Custom_Header from '../../../../components/header/Custom_Header'
import Custom_Footer from '../../../../components/footer/Custom_Footer'
import color from '../../../../constants/color'
import scale from '../../../../constants/responsive'
import FONT_FAMILY from '../../../../constants/fonts'



const CollectionScreen = (props) => {
  const [visible,setVisible] = useState(true);
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
        {/* Collection */}
        <Text style={styles.likeProductText}>YOU MAY ALSO LIKE</Text>
        <View style={styles.likeProductContainer}>          
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