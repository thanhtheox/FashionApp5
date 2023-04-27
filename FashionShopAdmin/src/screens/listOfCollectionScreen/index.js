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
import CollectionItem from './components/collectionItem';
import {IC_Backward, IC_BackwardArrow} from '../../assets/icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import HeaderMax from '../../components/header/headerMax';


const ListOfCollectionScreen = props => {
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getCollections = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-collection', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setData(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    getCollections();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
          keyExtractor={item => `${item.id}`}
          numColumns={2}
          columnWrapperStyle={{alignSelf: 'center'}}
          renderItem={({item}) => (
            <CollectionItem
              name={item.name}
              source={item.posterImage.url}
              onPress={() => props.navigation.navigate('EditCollection')}
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
