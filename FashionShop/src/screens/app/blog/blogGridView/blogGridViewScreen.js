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
import React, { useEffect, useState } from 'react';
import color from '../../../../constants/color';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import { IMG_Blog } from '../../../../assets/images';
import { LineBottom } from '../../../../components/footer/images';
import Custom_Footer from '../../../../components/footer/Custom_Footer';
import BlogItems from './components/blogItems';
import Custom_Tag1 from '../../../../components/tags/fill';
import Custom_Tag2 from '../../../../components/tags/border';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
  
  
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
      const [blogs,setBlogs] = useState([]);
      const [tags, setTags] = useState([]);
      const [blogPage, setBlogPage] = useState([]);
      const [page, setPage] = useState(1);
      const axiosPrivate = useAxiosPrivate();

      useEffect(() => {
        const controller = new AbortController();
    
        const getAllBlogs = async () => {
          try {
            let listOfBlogs = [];
            const response = await axiosPrivate.get(`/get-all-blog`, {
              signal: controller.signal, 
            });
            listOfBlogs = response.data;
            // await Promise.all(listOfBlogs.map(item => {
            //   getTags(item.tag);
            //   const obj = {};
            //   obj = item;              
            //   try{
            //     let tagName = [];
            //     tags.map(item => {
            //       tagName.push(item.name)
            //     })
                
            //     obj.tagName = tagName;
            //     item = obj
            //   }
            //   catch (err) {
            //     console.log(err)
            //   }
            // }))
            setBlogs(response.data)
            console.log(JSON.stringify( blogs))
          } catch (err) {
            console.log(err.response.data);
          }
      };
      // const getTags = async (idList) => {
      //   const listOfTags = [];
      //   await Promise.all(idList.map(async(id) => {
      //     try {
      //       const response = await axiosPrivate.get(`/get-tag-by-id/${id}`, {
      //         signal: controller.signal, 
      //       });
      //       listOfTags.push(response.data)
      //     } catch (err) {
      //       console.log(err.response.data);
      //     }
      //   }))
      //   setTags(listOfTags);
      // };
        getAllBlogs();
        console.log(blogs)
        return () => {
          controller.abort();
        };
      }, []);
    
    
      useEffect(() => {  
        setBlogPage(blogs.slice(0, 8));
      }, [blogs])

      const handleLoadMore = () => {
        setPage(page + 1);
        const newData = blogs.slice(blogPage, 8 * page);
        setBlogPage(newData);
      };
      const renderItem = ({ item }) => (
        <View>
          <BlogItems
            onPress={() => props.navigation.navigate('BlogPostScreen', {
              data: item,
            })}
            image={item.posterImage.url}
            prodName={item.title}
          />
          {/* <View style={styles.tagContainer} >
            {item.tagName.map((itemTag,index) => {
            <View key={index}>
              <Text style={{color:color.TitleActive}}>{itemTag}</Text>
              {/* <Custom_Tag2
              value={itemTag}
              marginLeft={scale(10)}
              visible={false}
              /> 
            </View> 
            })}
          </View> */}
        </View>
      );
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.blogTextView}>
            <Text style={styles.blogText}>BLOG</Text>
            <Image source={LineBottom} style={{alignSelf: 'center'}} resizeMode='stretch'/>
          </View>
          <ScrollView style={styles.list}>
            <View style={styles.BlogsContainer}>
              <FlatList
                contentContainerStyle={{alignContent: 'space-around', marginTop:scale(20)}}
                horizontal={false}
                data={blogPage}
                keyExtractor={item => `${item._id}`}
                numColumns={1}
                scrollEnabled={false}
                renderItem={renderItem}
              />  
                {blogs.length > blogPage.length && (
                  <TouchableOpacity style={styles.button} onPress={handleLoadMore}>
                    <Text style={styles.text}>LOAD MORE</Text>
                  </TouchableOpacity>
                )}
            </View>
            <Custom_Footer 
            onAboutPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'OurStoryScreen' })}
            onContactPress={() => props.navigation.navigate('HomeStackScreen', { screen: 'ContactUsScreen' })}
            onBlogPress={() => props.navigation.replace('BlogStackScreen', { screen: 'BlogGridViewScreen' })}/>
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
        borderWidth:1
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
    