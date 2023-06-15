import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {IC_AddImage, IC_Backward} from '../../assets/icons';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import {IMG_AddImage} from '../../assets/images';
import SingleLine from '../../components/inputTexts/singleLine';
import MultiLine from '../../components/inputTexts/multiLine';
import DropDownPicker from 'react-native-dropdown-picker';
import TagWithoutDelete from '../../components/tags/tagWithoutDelete';
import ImageCropPicker from 'react-native-image-crop-picker';
import {PERMISSIONS, check, RESULTS, request} from 'react-native-permissions';
import Message from '../../components/alearts.js/messageOnly';
import SaveButton from '../../components/buttons/Save';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const AddBlogScreen = props => {
  const axiosPrivate = useAxiosPrivate();

  const addBlogSchema = yup.object({
    title: yup
      .string()
      .required('Title cannot be blank')
      .max(100, 'Title length must be less than 100 characters'),
    description: yup
      .string()
      .required('Description cannot be blank')
      .min(5, 'A description must have minimum of 5 character')
      .max(500, 'A description must have maximum of 500 character'),
    detail: yup
      .string()
      .required('Detail cannot be blank')
      .min(5, 'A detail must have minimum of 5 character')
      .max(500, 'A detail must have maximum of 500 character'),
    tag: yup
      .array()
      .required('please select a tag')
      .max(3, 'A blog can have maximum of 3 tag'),
    image: yup.array().required('please select an image'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
      detail: '',
      tag: null,
      image: null,
    },
    resolver: yupResolver(addBlogSchema),
  });

  const [product, setProduct] = useState(init);
  const [tag, setTag] = useState([]);
  const [tagOpen, setTagOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const handleChange = (e, prop) => {
    console.log(prop);
    setProduct({
      ...product,
      [prop]: e.nativeEvent.text,
    });
  };
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getTags = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-tag', {
          signal: controller.signal,
        });

        const handledTag = [];
        await Promise.all(
          response.data.map(item => {
            handledTag.push({label: item.name, value: item._id});
          }),
        );
        isMounted && setTag(handledTag);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    getTags();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handlePickTag = val => {
    // add pick tag
    const newTag = {tagName: val.label, tagId: val.value};
    const newTagArray = [...product.tag, newTag];
    setProduct({
      ...product,
      tag: newTagArray,
    });

    // remove picked tag
    const newTagList = tag.filter(tag => tag.value !== newTag.tagId);
    setTag(newTagList);
  };

  const handleUnpickTag = (val, onChange) => {
    // remove from picked tag
    const newProductTag = product.tag.filter(tag => tag.tagId !== val);
    const unpickedTag = product.tag.find(tag => tag.tagId === val);
    console.log(newProductTag, unpickedTag);
    setProduct({...product, tag: newProductTag});
    // add unpick tag
    setTag([...tag, {label: unpickedTag.tagName, value: unpickedTag.tagId}]);
    console.log(product.tag, tag);
    onChange(newProductTag);
    if (newProductTag.length === 0) onChange(null);
  };

  // image handle

  const checkReadImagePermission = onchange => {
    check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            requestPermission();
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            ImageCropPicker.openPicker({
              width: 343,
              height: 460,
              cropping: true,
            })
              .then(image => {
                setImages([...images, image.path]);
                onchange(product.image);
              })
              .catch(err => console.log('Error: ', err.message));
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(err => console.log(err));
  };

  const requestPermission = () => {
    request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then(response => {
      console.log(response);
    });
  };

  //post
  async function handleSubmits(data) {
    setLoading(true);
    const formData = new FormData();
    await Promise.all(
      images.map(item => {
        formData.append('imageBlog', {
          name: new Date() + '_imageProduct',
          uri: item,
          type: 'image/jpg',
        });
      }),
    );
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('detail', data.detail);
    await Promise.all(
      product.tag.map(item => {
        formData.append('tag', item.tagId);
      }),
    );
    console.log(product.tag);
    console.log(formData);
    try {
      const response = await axiosPrivate.post('/post-create-blog', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      //console.log('success', JSON.stringify(response.data));
      setTitle('Success');
      setMessage(`New blog with Name: ${data.title} has been created`);
      setLoading(false);
    } catch (err) {
      console.log('err', err.response.data);
      setTitle('Error');
      setMessage(err.response.data.error);
      setLoading(false);
    } finally {
      setVisible(true);
      console.log(errors);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backwardButton}
          onPress={() => props.navigation.goBack()}>
          <IC_Backward stroke={color.White}></IC_Backward>
        </TouchableOpacity>
        <View>
          <Text style={styles.textHeader}>Add blog</Text>
        </View>
      </View>
      {/* body */}

      <KeyboardAvoidingView behavior="padding">
        <View style={styles.body}>
          <ScrollView keyboardShouldPersistTaps="handled">
            {/* image */}

            <Controller
              name="image"
              control={control}
              render={({field: {onChange, value}}) => (
                <View style={styles.imagePart}>
                  <Text style={styles.bodyText}>Image</Text>
                  <ScrollView horizontal={true}>
                    <View style={styles.imageRow}>
                      {images.map(image => (
                        <View
                          key={image}
                          style={{width: scale(50), height: scale(67)}}>
                          <Image
                            resizeMode="cover"
                            style={{width: '100%', height: '100%'}}
                            source={{uri: image}}
                          />
                        </View>
                      ))}
                      <TouchableOpacity
                        onPress={() => checkReadImagePermission(onChange)}>
                        <View style={{width: scale(50), height: scale(67)}}>
                          {/* <Image style={{width: '100%', height: '100%'}} source={IMG_AddImage}/> */}
                          <IC_AddImage />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                  {errors?.image && (
                    <Text style={styles.textFailed}>
                      {errors.image.message}
                    </Text>
                  )}
                </View>
              )}
            />
            {/* input */}
            <View style={styles.informationPart}>
              <Text style={styles.bodyText}>Blog information</Text>

              <Controller
                name="title"
                control={control}
                render={({field: {onChange, value}}) => (
                  <>
                    <SingleLine
                      name="title"
                      placeholder={'Title'}
                      handleChange={handleChange}
                      keyboardType="default"
                      onChangeText={titles => onChange(titles)}
                      value={value}
                    />
                    {errors?.title && (
                      <Text style={styles.textFailed}>
                        {errors.title.message}
                      </Text>
                    )}
                  </>
                )}
              />
              <Text style={styles.propText}>Detail:</Text>

              <Controller
                name="detail"
                control={control}
                render={({field: {onChange, value}}) => (
                  <>
                    <MultiLine
                      name="detail"
                      handleChange={handleChange}
                      keyboardType="default"
                      onChangeText={detail => onChange(detail)}
                      //value={value}
                    />
                    {errors?.detail && (
                      <Text style={styles.textFailed}>
                        {errors.detail.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <Text style={styles.propText}>Description:</Text>

              <Controller
                name="description"
                control={control}
                render={({field: {onChange, value}}) => (
                  <>
                    <MultiLine
                      name="description"
                      handleChange={handleChange}
                      keyboardType="default"
                      onChangeText={description => onChange(description)}
                      //value={value}
                    />
                    {errors?.description && (
                      <Text style={styles.textFailed}>
                        {errors.description.message}
                      </Text>
                    )}
                  </>
                )}
              />

              {/* tag */}
              <Controller
                name="tag"
                control={control}
                render={({field: {onChange, value}}) => (
                  <View>
                    <View style={styles.tagBox}>
                      <View>
                        <DropDownPicker
                          listMode="MODAL"
                          open={tagOpen}
                          placeholder="Tags"
                          style={styles.tagDropDown}
                          textStyle={styles.dropdownText}
                          items={tag}
                          setOpen={setTagOpen}
                          modalProps={{
                            animationType: 'fade',
                          }}
                          onSelectItem={item => [
                            handlePickTag(item),
                            onChange(product.tag),
                          ]}
                        />
                      </View>

                      <View style={{flex: 1}}>
                        <Text style={styles.dropdownText}>Chosen tags:</Text>
                        <ScrollView horizontal={true}>
                          <View
                            style={{flex: 1, flexDirection: 'row', gap: 10}}>
                            {product.tag.map(tag => (
                              <TagWithoutDelete
                                key={tag.tagId}
                                value={tag.tagName}
                                cancel={true}
                                tagId={tag.tagId}
                                onPress={val => handleUnpickTag(val, onChange)}
                              />
                            ))}
                          </View>
                        </ScrollView>
                      </View>
                    </View>
                    {errors?.tag && (
                      <Text style={styles.textFailed}>
                        {errors.tag.message}
                      </Text>
                    )}
                  </View>
                )}
              />
            </View>
            <View style={{height: scale(10)}} />
          </ScrollView>

          <View style={styles.button}>
            <SaveButton
              text={'Add blog'}
              onPress={handleSubmit(data => handleSubmits(data))}></SaveButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddBlogScreen;

const init = {
  title: '',
  detail: '',
  description: '',
  tag: [],
  image: [],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header
  header: {
    flexDirection: 'row',
    backgroundColor: color.TitleActive,
    height: Dimensions.get('screen').height * 0.1,
    alignItems: 'center',
  },
  textHeader: {
    color: color.White,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 24,
    fontWeight: '700',
    marginTop: scale(10),
  },
  backwardButton: {
    marginLeft: scale(15),
    marginTop: scale(10),
  },

  //  body
  body: {
    backgroundColor: color.White,
    paddingHorizontal: scale(10),
    height: Dimensions.get('screen').height * 0.82,
  },
  bodyText: {
    color: color.Body,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 23,
    fontWeight: '600',
    marginLeft: scale(3),
  },

  // image
  imagePart: {
    paddingTop: scale(10),
  },
  imageRow: {
    paddingVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: scale(10),
  },

  // information
  informationPart: {
    flex: 1,
  },
  propText: {
    color: color.PlaceHolder,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
    fontWeight: '600',
    marginLeft: scale(3),
    marginTop: scale(20),
  },

  // tag
  tagDropDown: {
    borderRadius: 0,
    borderColor: color.PlaceHolder,
    width: scale(120),
    paddingVertical: 15,
  },
  dropdownText: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
  },
  tagBox: {
    marginTop: scale(15),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: scale(15),
  },
  // detail button
  button: {
    // marginTop: scale(0),
    height: Dimensions.get('screen').height * 0.1,
    alignItems: 'center',
  },

  //fail
  textFailed: {
    paddingLeft: scale(25),
    // marginTop: scale(7),
    justifyContent: 'center',
    fontFamily: FONT_FAMILY.Italic,
    fontSize: scale(12),
    color: color.RedSolid,
  },
});
