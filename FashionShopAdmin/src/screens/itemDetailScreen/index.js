import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useRef, useEffect, memo} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {DataTable} from 'react-native-paper';

//component
import {IC_Add, IC_Backward} from '../../assets/icons';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import TagWithoutDelete from '../../components/tags/tagWithoutDelete';
import SaveButton from '../../components/buttons/Save';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {capitalizeFirstLetter} from '../../config/uppercaseFirstLetter';

const ItemDetailScreen = props => {
  console.log(
    '==========================ITEM DETAIL SCREEN=========================',
  );
  const [loading, setLoading] = useState(false);
  const {data, size, productDetail} = props.route.params;
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState({});
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const imagesArr = data.image.map(item => item.url);
    console.log({imagesArr});
    setImages(imagesArr);
    let isMounted = true;
    const controller = new AbortController();

    const getCategory = async () => {
      try {
        const response = await axiosPrivate.get(
          `/category/${data.categoryId}`,
          {
            signal: controller.signal,
          },
        );
        isMounted && setCategory(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    const getTags = async () => {
      try {
        const response = await axiosPrivate.get(
          `/get-name-tag-by-productId/${data._id}`,
          {
            signal: controller.signal,
          },
        );
        isMounted && setTags(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    getCategory();
    getTags();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const pressEdit = async item => {
    const controller = new AbortController();
    let categoryName = '';
    try {
      const response = await axiosPrivate.get(`/category/${item.categoryId}`, {
        signal: controller.signal,
      });
      categoryName = response.data.name + ' (' + response.data.parentName + ')';
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    console.log(categoryName);
    props.navigation.navigate('EditItem', {
      data: item,
      categoryName: categoryName,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backwardButton}
          onPress={() => props.navigation.goBack()}>
          <IC_Backward stroke={color.White} />
        </TouchableOpacity>
        <View>
          <Text style={styles.textHeader}>Item detail</Text>
        </View>
      </View>
      {/* body */}
      <View style={styles.body}>
        <View style={{flex: 1}}>
          <ScrollView
            overScrollMode="auto"
            contentContainerStyle={{flexGrow: 1}}>
            {/* information */}
            <View style={styles.informationPart}>
              <Text style={styles.bodyText}>Item information</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.propTextTitle}>Name:</Text>
                <Text style={styles.propText} numberOfLines={2}>
                  {capitalizeFirstLetter(data.name)}
                </Text>
              </View>
              <View
                style={{
                  height: scale(130),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <View style={{width: scale(200)}}>
                  <View style={{flexDirection: 'row', width: scale(140)}}>
                    <Text style={styles.propTextTitle}>Price:</Text>
                    <Text style={styles.propText}>
                      {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(data.price)}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', width: scale(140)}}>
                    <Text style={styles.propTextTitle}>Profit:</Text>
                    <Text style={styles.propText}>
                      {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(0.7 * data.price)}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', width: scale(140)}}>
                    <Text style={styles.propTextTitle}>Sale:</Text>
                    <Text style={styles.propText}>{data.sale}</Text>
                  </View>
                  <View style={{flexDirection: 'row', width: scale(140)}}>
                    <Text style={styles.propTextTitle}>Category: </Text>
                    <Text style={styles.propText}>{category.name}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: scale(10),
                      marginTop: scale(5),
                    }}>
                    <Text style={styles.propTextTitle}>Tags:</Text>
                    <ScrollView horizontal={true}>
                      <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
                        {tags.map(tag => (
                          <TagWithoutDelete
                            key={tag._id}
                            value={tag.name}
                            tagId={tag._id}
                          />
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                </View>
                <Carousel
                  loop
                  width={130}
                  height={130}
                  autoPlay={true}
                  data={[...images]}
                  scrollAnimationDuration={1000}
                  renderItem={({item}) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                      }}>
                      <View style={{width: scale(130), height: scale(130)}}>
                        <Image
                          style={{width: '99%', height: '99%'}}
                          onLoadStart={() => setLoading(true)}
                          onLoadEnd={() => {
                            setLoading(false);
                          }}
                          source={{
                            uri:
                              item ||
                              'https://heartoffashion.ca/wp-content/uploads/2022/09/Heart-of-Fashion-Mobile-Hero-Image-Raised.jpg',
                          }}
                        />
                        {loading ? (
                          <ActivityIndicator
                            size="large"
                            color={color.RedSolid}
                            style={{position: 'absolute', right: scale(20)}}
                          />
                        ) : null}
                      </View>
                    </View>
                  )}
                />
              </View>

              <Text
                style={[
                  styles.propTextTitle,
                  {marginTop: scale(30), marginBottom: scale(5)},
                ]}>
                Material Descriptions
              </Text>
              <Text style={styles.text}>
                {capitalizeFirstLetter(data.material)}
              </Text>

              <Text style={[styles.propTextTitle, {marginTop: scale(25)}]}>
                Care Descriptions
              </Text>
              <Text style={styles.text}>
                {capitalizeFirstLetter(data.care)}
              </Text>
              {/* quantity */}
              <View style={styles.quantityView}>
                <View style={[styles.row]}>
                  <Text style={styles.bodyText}>Quantities</Text>
                  <TouchableOpacity
                    style={[styles.row, {borderWidth: 0.5, padding: 5}]}
                    onPress={() =>
                      props.navigation.navigate('AddDetailItem', {data})
                    }>
                    <IC_Add />
                    <Text style={styles.text}>Add more</Text>
                  </TouchableOpacity>
                </View>

                {productDetail.length === 0 && (
                  <Text style={[styles.text, {color: color.RedSolid}]}>
                    There is no product detail yet, please add one
                  </Text>
                )}
                <ScrollView horizontal>
                  <View style={{alignSelf: 'center'}}>
                    <View style={[styles.tableRow, {borderTopWidth: 0.5}]}>
                      {productDetail.length > 0 && (
                        <View style={styles.cell}>
                          <Text style={styles.text}>Color</Text>
                        </View>
                      )}

                      {size.map((item, index) => (
                        <View style={styles.cell} key={item}>
                          <Text style={styles.text}>{item}</Text>
                        </View>
                      ))}
                    </View>
                    {productDetail.map((item, index) => (
                      <View style={styles.tableRow}>
                        <View style={styles.cell}>
                          <Text style={styles.text}>{item.color}</Text>
                        </View>
                        <Quantity size={size} item={item} />
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View style={styles.button}>
                <SaveButton
                  text={'Edit item'}
                  onPress={() => pressEdit(data)}></SaveButton>
              </View>
              <View style={{height: scale(10)}}/>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;

const Quantity = props => {
  const size = props.size;
  const item = props.item;
  console.log({size}, {item});
  return size.map(sizeItem => (
    <View style={styles.cell} key={sizeItem}>
      <Text style={styles.text}>{item[sizeItem]}</Text>
    </View>
  ));
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
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 27,
    marginTop: scale(10),
  },
  backwardButton: {
    marginLeft: scale(15),
    marginTop: scale(10),
  },

  //  body
  body: {
    flex: 1,
    backgroundColor: color.White,
    paddingHorizontal: scale(10),
  },
  bodyText: {
    color: color.Body,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 23,
    marginLeft: scale(3),
  },

  // information
  informationPart: {
    marginTop: scale(10)
  },
  propTextTitle: {
    color: color.Secondary,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
    marginLeft: scale(3),
  },
  propText: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
    marginLeft: scale(3),
  },

  // category
  categoryDropDown: {
    borderRadius: 0,
    borderColor: color.PlaceHolder,
    width: scale(150),
    paddingVertical: 15,
  },
  dropdownText: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
  },
  categoryBox: {
    marginTop: scale(15),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: scale(15),
  },
  // Quantity
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityView: {
    marginTop: scale(35),
    gap: scale(15),
  },
  sizeView: {
    flexDirection: 'row',
    gap: scale(20),
    alignItems: 'center',
  },
  sizeInputBox: {
    width: scale(100),
    height: scale(50),
    borderWidth: 1,
  },
  text: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.Regular,
    textDecorationLine: 'none',
    color: color.TitleActive,
    marginLeft: scale(3),
  },

  // save button
  button: {
    marginTop: scale(40),
    alignItems: 'center',
  },
  // table
  cell: {
    width: scale(80),
    height: scale(45),
    paddingTop: scale(5),
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
});
