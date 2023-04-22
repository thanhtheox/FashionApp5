import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import {IC_Backward} from '../../assets/icons';
import scale from '../../constants/responsive';
import SaveButton from '../../components/buttons/Save';
import {launchImageLibrary} from 'react-native-image-picker';
import ItemProductOfCollection from './components/ProductOfCollection';
import {
  IMG_AddImage,
  IMG_Collection,
  IMG_ModelFour,
  IMG_ModelOne,
  IMG_ModelThree,
  IMG_ModelTwo,
} from '../../assets/images';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Message from '../../components/alearts.js/messageOnly';
import DropDownPicker from 'react-native-dropdown-picker';

const AddCollectionScreen = props => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  // const [selectedValues, setSelectedValues] = useState([]);
  // const [open, setOpen] = useState(false);

  const [text, onChangeText] = useState('');
  const [image, setImage] = useState('');

  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProducts = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-product', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setData(response.data);
        let newArray = response.data.map(item => {
          return {value: item.name, key: item._id};
        });
        //Set Data Variable
        setData(newArray);
        console.log(data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    
    getProducts();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleSubmit = async (name, image, product) => {
    try {
      setLoading(true);
      const response = await axiosPrivate.post(
        '/post-create-collection',
        JSON.stringify({name: name, productId: product, image: image}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        },
      );
      console.log('success', JSON.stringify(response.data));
      setTitle('Success');
      setMessage(`New collection with Name: ${name} has been created`);
      setLoading(false);
    } catch (err) {
      console.log('err', err.response.data);
      setTitle('Error');
      setMessage(err.response.data.error);
      setLoading(false);
    } finally {
      setVisible(true);
    }
  };

  let options = {
    savePhotos: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setImage(result.assets[0].uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* header  */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IC_Backward stroke={color.White}></IC_Backward>
        </TouchableOpacity>
        <View>
          <Text style={styles.textHeader}>Add collection</Text>
        </View>
      </View>

      {/* body  */}

      <View style={styles.body}>
        <View style={styles.viewTextTitle}>
          <Text style={styles.textTitle}>Collection information</Text>
        </View>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Name ..."
            placeholderTextColor={color.GraySolid}
            editable
            numberOfLines={1}
            maxLength={30}
            onChangeText={text => onChangeText(text)}
            keyboardType="ascii-capable"
            value={text}
          />
        </View>

        {/* poster image */}
        <View style={styles.viewAddImage}>
          <View style={styles.viewTextAdd}>
            <Text style={styles.textAdd}>Poster image</Text>
          </View>
          <View style={styles.viewImageAdd}>
            <TouchableOpacity style={styles.viewIconAdd} onPress={openGallery}>
              <Image source={IMG_AddImage} style={styles.icon}></Image>
            </TouchableOpacity>
            <View style={styles.viewImage}>
              <Image source={{uri: image}} style={styles.image}></Image>
            </View>
          </View>
        </View>

        <View style={styles.viewSelectProduct}>
          <MultipleSelectList 
                        setSelected={(val) => setSelected(val)} 
                        data={data} 
                        save={['value','key']}
                        // save='value'
                        onSelect={()=>console.log(selected)} 
                        label="product"
                        dropdownItemStyles={styles.textInput}
                        dropdownTextStyles={{color: color.TitleActive}}

                        // numberOfLines={1}
                        // badgeTextStyles={{fontSize: 10, color: color.White}}
                        // badgeStyles={{width: '20%', height: scale(25), alignSelf: 'center',justifyContent: 'center'}}
                    />
          {/* <DropDownPicker
            items={data}
            open={open}
            setOpen={setOpen}
            multiple={true}
            onChangeItem={item => setSelectedItems(item)}
            // maxHeight={100}
          /> */}
        </View>
        {/* product  */}
        <View style={styles.viewProduct}>
          <ScrollView>
            {selected.map((item, index) => (
              <ItemProductOfCollection
                key={index}
                number={index + 1}
                name={item.value}
                source={item.source}
              />
            ))}
          </ScrollView>
        </View>

        {/* button */}
        <View style={styles.button}>
          <SaveButton text={'Add collection'}></SaveButton>
        </View>
      </View>

      <Message
        visible={visible}
        title={title}
        clickCancel={() => {
          if (title === 'Success') {
            props.navigation.goBack();
          } else {
            setVisible(false);
          }
        }}
        message={message}
      />
    </SafeAreaView>
  );
};

export default AddCollectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //header
  header: {
    flexDirection: 'row',
    backgroundColor: color.TitleActive,
    flex: 0.1,
    alignItems: 'center',
  },
  textHeader: {
    color: color.White,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 24,
    fontWeight: '700',
  },
  //body
  body: {
    flex: 0.9,
    backgroundColor: color.White,
  },
  viewTextTitle: {
    marginLeft: scale(15),
    marginTop: scale(15),
  },
  textTitle: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 22,
    fontWeight: '600',
  },
  viewTextInput: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderColor: color.GraySolid,
    marginTop: scale(10),
  },
  textInput: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: scale(10),
  },

  //add image
  viewAddImage: {
    marginTop: scale(10),
    height: '15%',
    width: '90%',
    alignSelf: 'center',
  },
  viewTextAdd: {
    height: '30%',
    justifyContent: 'center',
  },
  textAdd: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 16,
    fontWeight: '500',
  },
  viewImageAdd: {
    height: '70%',
    flexDirection: 'row',
  },
  viewImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  image: {
    width: '75%',
    height: '75%',
  },
  viewIconAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  icon: {
    width: '50%',
    height: '50%',
  },
  //select

  viewSelectProduct: {
    // height: Dimensions.get('screen').height*0.1,
    elevation: 1,
    backgroundColor: color.White,
  },
  inputStyles: {
    backgroundColor: color.Line,
  },
  // product
  viewProduct: {
    marginTop: scale(10),
    height: '25%',
    elevation: 2,
  },

  //button
  button: {
    // justifyContent: 'flex-end',
    marginTop: scale(20),
    alignItems: 'center',
  },
});
