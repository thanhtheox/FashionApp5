import React, {useEffect, useState} from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import scale from '../../constants/responsive';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import { IC_Forward , IC_Down, IC_BackwardArrow} from '../../assets/icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import HeaderMax from '../../components/header/headerMax';
import { useIsFocused } from '@react-navigation/native';
import { Button, Menu, Divider, Provider, DefaultTheme } from 'react-native-paper';
import MessageYN from '../../components/alearts.js/messageYN';

const ExpandableComponent = ({item, onClickFunction, onPress, deleteCategory, navigation }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  

  const Item = ({item, index, deleteCategory, navigation}) => {
    const [cvisible, setcVisible] = React.useState(false);

    const opencMenu = () => setcVisible(true);

    const closecMenu = () => setcVisible(false);
    return (
      <View>
      <Menu
            visible={cvisible}
            onDismiss={closecMenu}
            anchorPosition='bottom'
            anchor={
              <>
                <TouchableOpacity style={styles.viewListBody} onLongPress={opencMenu} onPress={() => navigation.navigate("ListItemFromCategory", {
                  categoryId: item._id,
                  categoryName:item.name
                })}>
                  <View style={styles.viewTextList}>
                    <Text style={styles.textListBody}>{index+1}.{item.name}</Text>
                  </View>
                  <View style={styles.viewIcon}>
                      <IC_Forward></IC_Forward>
                  </View>
                </TouchableOpacity>
              </>}>
          <Menu.Item onPress={() => navigation.navigate("EditCategory", {
                  name: item.name,
                  description: item.description,
                  parentId: item.parentId,
                  id: item._id,
                  isChild: true,
                })} title="Edit category" />
          <Divider />
          <Menu.Item onPress={() => deleteCategory(item._id, item.name, true)} title="Delete category" />
      </Menu>
      </View>
    )
  }
  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchorPosition='bottom'
            anchor={
              <>
                <TouchableOpacity onPress={onClickFunction} style={styles.viewList} onLongPress={openMenu}>
                  <View style={styles.viewTextList}>
                    <Text style={styles.textList}>{item.title}</Text>
                  </View>
                  <View style={styles.viewIcon}>
                    <IC_Down></IC_Down>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    height: layoutHeight,
                    overflow: 'hidden',
                  }}>
                  {/*Content under the header of the Expandable List Item*/}
                  {item.child.map((item, index) => (
                    <Item item={item} index={index} deleteCategory={deleteCategory} key={item._id} navigation={navigation}/>
                  ))}
                </View>
              </>}>
            <Menu.Item onPress={() => navigation.navigate("EditCategory", {
                  name: item.title,
                  description: item.description,
                  parentId: '',
                  id: item._id,
                  isChild: false,
                })} title="Edit category" />
            <Divider />
            <Menu.Item onPress={() => deleteCategory(item._id, item.title, false)} title="Delete category" />
        </Menu>
      
    </View>
  );
};

const ListOfCategoryScreen = (props) => {
  const [listDataSource, setListDataSource] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    // if (multiSelect) {
    //   // If multiple select is enabled
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    // } else {
    // If single select is enabled
    // array.map((value, placeindex) =>
    //   placeindex === index
    //     ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
    //     : (array[placeindex]['isExpanded'] = false)
    // );
    // }
    setListDataSource(array);
  };

  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getCategories = async () => {
        try {
            const response = await axiosPrivate.get('/all-categories', {
                signal: controller.signal
            });
            //console.log(response.data);
            isMounted && setData(response.data);
        } 
        catch (err) {
            console.log(err.response.data);
        }
    }

    isFocused && getCategories()

    return () => {
        isMounted = false;
        controller.abort();
    }

  }, [isFocused])
  useEffect(() => {
    const handleCategory = async() => {
      try{
        let parentCat = [{}];
        let newContent = [];
        parentCat = data.filter(item => !item.parentId);
        //console.log({parentCat})
        parentCat.map((item, index) => {
          //console.log(item.name)
          const obj = {};
          obj.title = item.name;
          obj._id = item._id;
          obj.description = item.description;                                                                                                                                                                                                                  
          obj.child = [];
          obj.isExpanded = false
          newContent[index] = obj
          data.map(item => {
            if( item.parentId === newContent[index]._id )
              newContent[index].child.push(item)
            }
          )
        })
        //console.log(newContent[1].child);
        setListDataSource(newContent);
      }
      catch (err) {
        console.log(err)
      }
      
    }; 
    handleCategory();
  }, [data])

  const deleteCategory = async (id, name, isChild) => {
    setTitle('Delete category');
    setMessage(`Do you want to delete ${name} category`)
    setStatus('new')
    setVisible(true)
    const newClickYes = async () => {
      try {
        setStatus('loading');
        const response = await axiosPrivate.delete(`/category/${id}`, {
        });
        console.log(response.data)
        if (isChild) {
          //let newChildDataCategory = listDataSource.child.filter(item => item._id !== id)
          let items = listDataSource;
          listDataSource.map((item, index) => {
            if ( item.child.filter(e => e._id === id).length > 0) {
              let newItem = item;
              newItem.child = item.child.filter(e => e._id !== id);
              items[index] = newItem;
              setListDataSource(items);
            }
          })
        } 
        else {
          let newDataCategory = listDataSource.filter(item => item._id !== id)
          setListDataSource(newDataCategory);
        }
        
        setTitle('Category deleted');
        setMessage(`category ${name} has been deleted`)
        setStatus('done');
      } catch (err) {
        console.log(err?.response?.data || err.message);
        setTitle('Error');
        setMessage(err?.response?.data || err.message)
        setStatus('done');
      }
    }
    setClickYes(() => newClickYes);
    setVisible(true);
  } 
  const [status, setStatus] = useState('new')
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [clickYes, setClickYes] = useState(() => async () => {setVisible(false)})
  const [clickNo, setClickNo] = useState(() => () => {setVisible(false)})

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
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
          navigation={props.navigation} 
          textTitle={'List of categories'} 
          textLabel={'Add category'} 
          onPress={() => props.navigation.navigate('AddCategory')}
          onPressBack={() => props.navigation.goBack()}
        />

        <View style={styles.body}>
          <ScrollView>
            {listDataSource.map((item, key) => (
              <ExpandableComponent
                key={item._id}
                onClickFunction={() => {
                  updateLayout(key);
                }}
                item={item}
                deleteCategory={deleteCategory}
                navigation={props.navigation}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default ListOfCategoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: color.White,
  },

  /////
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  ///

  viewList: {
    marginTop: scale(5),
    height: scale(68),
    width: '100%',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  viewTextList: {
    justifyContent: 'center',
    width: scale(300),
    marginLeft: scale(20),
  },
  textList: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 24,
    color: color.TitleActive,
  },
  viewIcon:{
    alignSelf: 'center',
  },
  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden',
  },
  viewListBody: {
    height: scale(48),
    width: '100%',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: color.White,
    opacity: 0.9,
  },
  textListBody: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 12,
    color: color.TitleActive,
    marginLeft: scale(30),
  },
});
