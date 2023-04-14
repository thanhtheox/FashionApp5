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
import { IMG_Blog } from '../../../../assets/images';
import { LineBottom } from '../../../../components/footer/images';
import Custom_Footer from '../../../../components/footer/Custom_Footer';
import BlogItems from './components/blogItems';
import Custom_Tag1 from '../../../../components/tags/fill';
import Custom_Tag2 from '../../../../components/tags/border';
  
  const blogs = [
    {
      img: IMG_Blog,
      key: '1',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '2',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '3',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '4',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '5',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '6',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '7',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '8',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '9',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '10',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
    {
      img: IMG_Blog,
      key: '11',
      name: '2021 Style Guide: The Biggest Fall Trends',
      initDate: 4,
    },
  ];
  const tags = [
    {
      key: '1',
      value: 'Boss',
    },
    {
      key: '2',
      value: 'Burberry',
    },
    {
      key: '3',
      value: 'Catier',
    },
    {
      key: '4',
      value: 'Gucci',
    },
    {
      key: '5',
      value: 'Prada',
    },
    {
      key: '6',
      value: 'Tiffany',
    },
    {
      key: '7',
      value: 'Prada',
    },
    {
      key: '8',
      value: 'Tiffany',
    },
  ];
  const blogTags = [
    {
      key: '1',
      value: '#Boss',
    },
    {
      key: '2',
      value: '#Burberry',
    },
  ];
  
    const BlogGridViewScreen = (props) => {
      const [data, setData] = useState(blogs.slice(0, 4));
      const [page, setPage] = useState(1);
    
      const handleLoadMore = () => {
        const newData = blogs.slice(data, 4 * (page + 1));
        setData(newData);
        setPage(page + 1);
      };
      const renderItem = ({ item }) => (
        <View>
          <BlogItems
            image={item.img}
            prodName={item.name}
          />
          <View style={styles.tagContainer}>
            <FlatList
            contentContainerStyle={{height:scale(70)}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={blogTags}
            keyExtractor={item => `${item.key}`}
            scrollEnabled={false}
            renderItem={({item}) => (
              <Custom_Tag2
              value={item.value}
              marginLeft={scale(10)}
              visible={false}
              />
            )}></FlatList>
            <Text style={{fontFamily:FONT_FAMILY.Regular,fontWeight:'400',
            fontSize:scale(14),lineHeight:scale(20),color:color.PlaceHolder,alignSelf:'center'}}>
              {item.initDate} days ago
            </Text>
          </View> 
        </View>
      );
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.blogTextView}>
            <Text style={styles.blogText}>BLOG</Text>
            <Image source={LineBottom} style={{alignSelf: 'center'}} resizeMode='stretch'/>
          </View>
          <FlatList
            contentContainerStyle={{justifyContent: 'space-around',height:scale(70),marginLeft:scale(12)}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={tags}
            keyExtractor={item => `${item.key}`}
            scrollEnabled={true}
            renderItem={({item}) => (
              <Custom_Tag1
              value={item.value}
              marginLeft={scale(12)}
              />
            )}></FlatList>
          <ScrollView style={styles.list}>
            <View style={styles.BlogsContainer}>
              <FlatList
                contentContainerStyle={{alignContent: 'space-around', marginTop:scale(20)}}
                horizontal={false}
                data={data}
                keyExtractor={item => `${item.key}`}
                numColumns={1}
                scrollEnabled={false}
                renderItem={renderItem}
              />  
                {blogs.length > data.length && (
                  <TouchableOpacity style={styles.button} onPress={handleLoadMore}>
                    <Text style={styles.text}>LOAD MORE</Text>
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
    export default BlogGridViewScreen;
    
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
        borderWidth:1,
        borderColor: color.Border,
      },
      text: {
        fontWeight: '400',
        fontSize: scale(20),
        textAlign: 'center',
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
      },
      tagContainer: {
        flexDirection:'row',
        marginTop:scale(10),
        justifyContent:'center',
        height:scale(40),
      },
      blogTextView:{
        marginTop: scale(20),
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
      },
      blogText: {
        fontWeight: '400',
        fontSize: scale(16),     
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
      },
      iconDown: {
        marginLeft: scale(40),
        justifyContent: 'center',
        marginTop: scale(-15),
      },
      list: {
        marginTop: scale(10),
      },
      BlogsContainer:
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
      blogWrap: {
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column', 
      },
      wrapperBlogs:{
        marginBottom: scale(5),
    },
  })
    