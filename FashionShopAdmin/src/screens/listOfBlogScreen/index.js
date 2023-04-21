import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import color from '../../constants/color';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import {
  IMG_Collection,
  IMG_ModelFour,
  IMG_ModelOne,
  IMG_ModelThree,
  IMG_ModelTwo,
} from '../../assets/images';
import CollectionItem from '../listOfCollectionScreen/components/collectionItem';
import {IC_Backward, IC_BackwardArrow} from '../../assets/icons';
import BlogItem from './components/blogItem';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import HeaderMax from '../../components/header/headerMax';


const ListOfBlogScreen = props => {
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getBlogs = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-blog', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setData(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    getBlogs();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMax navigation={props.navigation} textTitle={'List of blogs'} textLabel={'Add blog'}/>

      <View style={styles.body}>
        <ScrollView>
          {data.map((item, index) => (
            <BlogItem
              key={index}
              source={item.posterImage.url}
              name={item.title}
              onPress={() => props.navigation.navigate('EditBlog')}></BlogItem>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ListOfBlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: color.White,
  },
});
