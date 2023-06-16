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
import {IMG_AddImage} from '../../assets/images';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Message from '../../components/alearts.js/messageOnly';
import DropDownPicker from 'react-native-dropdown-picker';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const addCollectionSchema = yup.object({
  name: yup
    .string()
    .required('Name cannot be blank')
    .max(100, 'Name length must be less than 100 characters'),
  product: yup.array().required('please select a product'),
  image: yup.string().required('please select an image'),
});

const AddCollectionScreen = props => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  const [text, onChangeText] = useState('');
  const [images, setImages] = useState(null);

  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      product: [],
      image: '',
    },
    resolver: yupResolver(addCollectionSchema),
  });
  // const [product, setProduct] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProducts = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-product', {
          signal: controller.signal,
        });
        console.log(response.data);
        const newArray = [];
        response.data.map(item => {
          newArray.push({value: item.name, key: item._id});
        });
        //Set Data Variable
        isMounted && setData(newArray);
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

  const handleSelected = id => {
    console.log(id);
    data.map(item => {
      console.log(item._id);
      if (item._id === id) {
        setSelected(...selected, item);
      }
    });
  };

  async function handleSubmits(name, image, product) {
    setLoading(true);
    const formData = new FormData();
    formData.append('imageCollection', {
      name: new Date() + '_imageCollection',
      uri: images,
      type: 'image/jpg',
    });
    formData.append('name', name);
    await Promise.all(
      selected.map(item => {
        formData.append('productId', item);
      }),
    );
    try {
      const response = await axiosPrivate.post(
        '/post-create-collection',
        formData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true
        },
      );
      console.log('success', JSON.stringify(response.data));
      setTitle('Success');
      setMessage(`New collection with Name: ${name} has been created`);
      console.log(message)
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

  const openGallery = async (onChange, value) => {
    const result = await launchImageLibrary(options);
    setImages(result.assets[0].uri);
    onChange(result.assets[0].uri);
    //value(images);
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

        {/* name */}
        <Controller
          name="name"
          control={control}
          render={({field: {onChange, value}}) => (
            <>
              <View style={styles.viewTextInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Name ..."
                  placeholderTextColor={color.GraySolid}
                  editable
                  numberOfLines={1}
                  maxLength={100}
                  onChangeText={text => [onChangeText(text), onChange(text)]}
                  keyboardType="ascii-capable"
                  value={value}
                />
              </View>

              {errors?.name && (
                <Text style={styles.textFailed}>{errors.name.message}</Text>
              )}
            </>
          )}
        />

        {/* poster image */}
        <View style={styles.viewAddImage}>
          <View style={styles.viewTextAdd}>
            <Text style={styles.textAdd}>Poster image</Text>
          </View>

          <Controller
            name="image"
            control={control}
            render={({field: {onChange, value}}) => (
              <>
                <View>
                  <View style={styles.viewImageAdd}>
                    <TouchableOpacity
                      style={styles.viewIconAdd}
                      onPress={() => openGallery(onChange, value)}>
                      <Image source={IMG_AddImage} style={styles.icon}></Image>
                    </TouchableOpacity>
                    {images === null ? (
                      <></>
                    ) : (
                      <View style={styles.viewImage}>
                        <Image
                          source={{uri: images}}
                          style={styles.image}></Image>
                      </View>
                    )}
                  </View>
                  {errors?.image && (
                    <Text style={styles.textFailed}>
                      {errors.image.message}
                    </Text>
                  )}
                </View>
              </>
            )}
          />
        </View>

        {/* product  */}
        <ScrollView style={{}}>
          <Controller
            name="product"
            control={control}
            render={({field: {onChange, value}}) => (
              <>
                <View style={styles.viewSelectProduct}>
                  <MultipleSelectList
                    setSelected={val => setSelected(val)}
                    data={data}
                    save={'key'}
                    onSelect={() => [console.log(selected), onChange(selected)]}
                    label="product"
                    dropdownItemStyles={styles.textInput}
                    dropdownTextStyles={{color: color.TitleActive}}
                    dropdownStyles={{
                      maxHeight: 300,
                      borderRadius: 0,
                      width: '80%',
                      alignSelf: 'center',
                    }}
                    boxStyles={{
                      borderRadius: 0,
                      width: '80%',
                      alignSelf: 'center',
                    }}
                    maxHeight={500}
                  />
                </View>
                {errors?.product && (
                  <Text style={styles.textFailed}>
                    {errors.product.message}
                  </Text>
                )}
              </>
            )}
          />
        </ScrollView>

        {/* button */}
        <View style={styles.button}>
          <SaveButton
            text={'Add collection'}
            onPress={handleSubmit(()=>handleSubmits(text, images, selected))}></SaveButton>
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
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 24,
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
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 22,
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
    marginLeft: scale(10),
  },

  //add image
  viewAddImage: {
    marginTop: scale(10),
    height: '25%',
    width: '90%',
    alignSelf: 'center',
  },
  viewTextAdd: {
    height: '30%',
    justifyContent: 'center',
  },
  textAdd: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 16,
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
    elevation: 1,
    backgroundColor: color.White,
  },
  inputStyles: {
    backgroundColor: color.Line,
  },
  // product
  viewProduct: {
    marginTop: scale(10),
    height: '30',
    elevation: 2,
  },

  //button
  button: {
    marginTop: scale(20),
    alignItems: 'center',
    marginBottom: scale(20),
  },

  //fail
  textFailed: {
    paddingLeft: scale(25),
    justifyContent: 'center',
    fontFamily: FONT_FAMILY.Italic,
    fontSize: scale(12),
    color: color.RedSolid,
  },
});
