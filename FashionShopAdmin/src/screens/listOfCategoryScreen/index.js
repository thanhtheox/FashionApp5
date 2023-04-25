import React, { useEffect, useState } from 'react';
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
  Dimensions
} from 'react-native';
import scale from '../../constants/responsive';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import { IC_Forward , IC_Down, IC_BackwardArrow} from '../../assets/icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import HeaderMax from '../../components/header/headerMax';
import { useIsFocused } from '@react-navigation/native';


// const CONTENT = [
//   { 
//     isExpanded: false,
//     title:'Woman',
//     child:[
//         {id: 1,name: 't-shirt'},
//         {id: 2,name: 'blouse'},
//         {id: 3,name: 'jacket'},
//         {id: 4,name: 'skirt'},
//         {id: 5,name: 'shorts'},

//     ]
// },
// {
//   isExpanded: false,

//     title: 'Man',
//     child:[
//       {id: 6,name: 't-shirt'},
//       {id: 7,name: 'blouse'},
//       {id: 8,name: 'suit'},
//       {id: 9,name: 'jacket'},
//       {id: 10,name: 'belt'},

//     ]
// },
// ];

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity onPress={onClickFunction} style={styles.viewList}>
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
          <TouchableOpacity style={styles.viewListBody} key={item._id}>
              <View style={styles.viewTextList}>
                <Text style={styles.textListBody}>{index+1}.{item.name}</Text>
              </View>
              <View style={styles.viewIcon}>
                  <IC_Forward></IC_Forward>
              </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const ListOfCategoryScreen = (props) => {
  const [listDataSource, setListDataSource] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderMax navigation={props.navigation} textTitle={'List of categories'} textLabel={'Add category'} navigateScreen={'AddCategory'}/>

      <View style={styles.body}>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item._id}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
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

  viewList:{
    marginTop: scale(5),
    height: scale(68),
    width:'100%',
    borderBottomWidth: 1,
    // borderWidth:1,
    flexDirection: 'row',
  },
  viewTextList:{
    // backgroundColor: color.Alto,
    justifyContent: 'center',
    width: scale(300),
    marginLeft: scale(20),
  },
  textList:{
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 24,
    fontWeight: '400',
    color: color.TitleActive,
  },
  viewIcon:{
    alignSelf: 'center',
  },
  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden'
  },
  viewListBody:{
    height: scale(48),
    width:'100%',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: color.White,
    opacity: 0.9,
  },
  textListBody:{
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 12,
    fontWeight: '400',
    color: color.TitleActive,
    marginLeft: scale(30),
  },
});
