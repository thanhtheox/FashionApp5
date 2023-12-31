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
import {useIsFocused} from '@react-navigation/native';

//component
import color from '../../constants/color';
import BlogItem from './components/blogItem';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import HeaderMax from '../../components/header/headerMax';
import MessageYN from '../../components/alearts.js/messageYN';
import scale from '../../constants/responsive';

const ListOfBlogScreen = props => {
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);

  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('new');
  const [visible, setVisible] = useState(false);
  const [clickYes, setClickYes] = useState(() => async () => {
    setVisible(false);
  });
  const [clickNo, setClickNo] = useState(() => () => {
    setVisible(false);
  });
  const isFocus = useIsFocused();

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
  }, [isFocus]);

  const deleteBlog = async (id, name) => {
    setTitle('Delete Blog');
    setMessage(`Do you want to delete ${name} Blog`);
    setStatus('new');
    const newClickYes = async () => {
      try {
        setStatus('loading');
        const response = await axiosPrivate.delete(`/delete-Blog/${id}`, {});
        console.log(response.data);
        let newDataBlog = data.filter(item => item._id !== id);
        setData(newDataBlog);
        setTitle('Blog deleted');
        setMessage(`Blog ${name} has been deleted`);
        setStatus('done');
      } catch (err) {
        console.log(err?.response?.data || err.message);
      }
    };
    setClickYes(() => newClickYes);
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MessageYN
        visible={visible}
        title={title}
        message={message}
        clickYes={clickYes}
        clickNo={clickNo}
        status={status}
        clickCancel={() => {
          setVisible(false);
        }}
      />
      <HeaderMax
        onPress={() => props.navigation.navigate('AddBlog')}
        onPressBack={() => props.navigation.goBack()}
        textTitle={'List of blogs'}
        textLabel={'Add blog'}
      />

      <View style={styles.body}>
        <ScrollView>
          {data.map((item, index) => (
            <BlogItem
              key={index}
              source={item.posterImage.url}
              name={item.title}
              onPress={() => props.navigation.navigate('EditBlog', {item})}
              delete={() => deleteBlog(item._id, item.title)}></BlogItem>
          ))}
          <View style={{height: scale(20)}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ListOfBlogScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.White,
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: color.White,
  },
});
