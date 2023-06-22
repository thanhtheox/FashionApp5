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
import { useIsFocused } from '@react-navigation/native';

//component
import color from '../../constants/color';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CollectionItem from './components/collectionItem';
import {IC_Backward, IC_BackwardArrow} from '../../assets/icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import HeaderMax from '../../components/header/headerMax';
import MessageYN from '../../components/alearts.js/messageYN'


const ListOfCollectionScreen = props => {
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('new')
  const [visible, setVisible] = useState(false);
  const [clickYes, setClickYes] = useState(() => async () => {setVisible(false)})
  const [clickNo, setClickNo] = useState(() => () => {setVisible(false)})

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getCollections = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-collection', {
          signal: controller.signal,
        });
        isMounted && setData(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    isFocused && getCollections();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [isFocused]);

  const deleteCollection = async (id, name) => {
    setTitle('Delete Collection');
    setMessage(`Do you want to delete ${name} Collection`)
    setStatus('new')
    const newClickYes = async () => {
      try {
        setStatus('loading');
        const response = await axiosPrivate.delete(`/delete-Collection/${id}`, {
        });
        console.log(response.data)
        let newDataCollection = data.filter(item => item._id !== id)
        setData(newDataCollection);
        setTitle('Collection deleted');
        setMessage(`Collection ${name} has been deleted`)
        setStatus('done');
      } catch (err) {
        console.log(err?.response?.data || err.message);
      } 
    }
    setClickYes(() => newClickYes);
    setVisible(true);
  } 

  return (
    <SafeAreaView style={styles.container}>
      <MessageYN 
          visible={visible} 
          title={title}
          message={message}
          clickYes={clickYes}
          clickNo={clickNo}
          status={status}
          clickCancel={() => {setVisible(false)}}
        />
      <HeaderMax
        onPress={() => props.navigation.navigate('AddCollection')}
        onPressBack={() => props.navigation.goBack()}
        textTitle={'List of collections'}
        textLabel={'Add collection'}
      />

      <View style={styles.body}>
        <FlatList
          style={styles.flat}
          data={data}
          keyExtractor={item => `${item._id}`}
          numColumns={2}
          columnWrapperStyle={{alignSelf: 'center'}}
          renderItem={({item}) => (
            <CollectionItem
              name={item.name}
              source={item.posterImage.url}
              onPress={() => props.navigation.navigate('EditCollection', {oldCollection: item})}
              delete ={()=>deleteCollection(item._id,item.name)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListOfCollectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(166),
    marginRight: scale(20),
    borderWidth: 1,
    borderColor: color.White,
  },
  body: {
    flex: 1,
    backgroundColor: color.White,
  },
  flat: {
    width: '100%',
    alignSelf: 'center',
  },
});
