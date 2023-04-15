import {
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    ScrollView
  } from 'react-native';
  import React from 'react';
  import Custom_Header from '../../../../components/header/Custom_Header';
  import Custom_Footer from '../../../../components/footer/Custom_Footer';
  import color from '../../../../constants/color';
  import FONT_FAMILY from '../../../../constants/fonts';
  import SwiperFlatList from 'react-native-swiper-flatlist';
  import scale from '../../../../constants/responsive';
  import { IMG_OurStory, IMG_ModelOne } from '../../../../assets/images';
  import Custom_Tag2 from '../../../../components/tags/border';

  const BlogPostScreen = (props) => {  
    const productImages = [
        {
          key: '1',
          image: IMG_ModelOne,
        },
        {
          key: '2',
          image: IMG_ModelOne,
        },
        {
          key: '3',
          image: IMG_ModelOne,
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
      ];
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        {/* Image */}
        <Image source={IMG_OurStory} resizeMode='stretch' style={{width:'100%'}}/>
        {/* Blog title */}
        <View style={styles.bodyViewTop}>
            <Text style={{fontFamily:FONT_FAMILY.Regular,fontSize:scale(14),lineHeight:scale(18),color:color.TitleActive}}>
                {'2021 STYLE GUIDE: THE BIGGEST FALL TRENDS'}
            </Text>
            <Text style={{fontFamily:FONT_FAMILY.Regular,fontSize:scale(14),lineHeight:scale(18),color:color.Body,marginTop:scale(10)}}>
                {'You guys know how much I love mixing high and low-end – it’s the best way to get the most bang for your buck while still elevating your wardrobe. The same goes for handbags! And honestly they are probably the best pieces to mix and match. I truly think the key to completing a look is with a great bag and I found so many this year that I wanted to share a round-up of my most worn handbags.'}
            </Text>
        </View>
        {/* Image */}
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
                </View>
              </View>
            )}
          /> 
        </View>
        {/* Blog title */}
        <View style={styles.bodyViewBottom}>
            <Text style={{fontFamily:FONT_FAMILY.Regular,fontSize:scale(14),lineHeight:scale(18),color:color.Body,marginTop:scale(10)}}>
                {'I found this Saint Laurent canvas handbag this summer and immediately fell in love. The neutral fabrics are so beautiful and I like how this handbag can also carry into fall. The mini Fendi bucket bag with the sheer fabric is so fun and such a statement bag. Also this DeMellier off white bag is so cute to carry to a dinner with you or going out, it’s small but not too small to fit your phone and keys still.'}
            </Text>
        </View>
        {/* Post Date */}
        <View style={{flexDirection:'row',marginLeft:scale(30),marginTop:scale(30),paddingBottom:scale(20)}}>
            <Text style={{fontFamily:FONT_FAMILY.Regular,fontSize:scale(14),lineHeight:scale(18),color:color.Body}}>Posted by OpenFashion |</Text>
            <Text style={{fontFamily:FONT_FAMILY.Regular,fontSize:scale(14),lineHeight:scale(18),color:color.Body,marginLeft:scale(5)}}>3 Days ago</Text>
        </View>
        <View style={styles.tagView}>
            {tags.map(item =>            
                <Custom_Tag2
                {...props}  
                key={item.key}
                value={item.value}
                />
            )}
        </View>
        <Custom_Footer
          onAboutPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'OurStoryScreen' })}
          onContactPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'ContactUsScreen' })}/>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default BlogPostScreen;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyViewTop: {
        flexDirection:'column',
        marginTop:scale(30),
        width:'90%',
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal:scale(15),
    },
    bodyViewBottom: {
        flexDirection:'column',
        alignItems:'center',
        width:'90%',
        alignSelf:'center',
        paddingHorizontal:scale(15),
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
        width: '95%',
        height: scale(450),
      },
      img: {
        justifyContent:'center',
        alignSelf:'center',
        width:'100%',
        height: scale(380),
      },
      tagView: {
        flexDirection:'row',
        paddingHorizontal: scale(30),
      },
  });
  