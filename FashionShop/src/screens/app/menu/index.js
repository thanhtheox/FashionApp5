import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,Platform, UIManager,LayoutAnimation, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../../constants/color'
import { IC_Call, IC_Close, IC_Down,IC_Profile, IC_ForwardArrow, IC_Location, IC_Up } from '../../../assets/icons'
import FONT_FAMILY from '../../../constants/fonts'
import scale from '../../../constants/responsive'
import Custom_CategoryScrollView from './components/Custom_CategoryScrollView'
import Custom_MenuFooter from './components/Custom_MenuFooter'

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const parents = [
  {
    key: '1',
    tittle:'New',
    isExpanded:false,
    children: [
      {
        childKey: '1',
        childTittle:'Outer',
      },
      {
        childKey: '2',
        childTittle:'Dress',
      },
      {
        childKey: '3',
        childTittle:'Shirt',
      },
    ]
  },
  {
    key: '2',
    tittle:'Apparel',
    isExpanded:false,
    children: [
      {
        childKey: '1',
        childTittle:'Outer',
      },
      {
        childKey: '2',
        childTittle:'Dress',
      },
      {
        childKey: '3',
        childTittle:'Shirt',
      },
    ]
  },
  {
    key: '3',
    tittle:'Bag',
    isExpanded:false,
    children: [
      {
        childKey: '1',
        childTittle:'Outer',
      },
      {
        childKey: '2',
        childTittle:'Dress',
      },
      {
        childKey: '3',
        childTittle:'Shirt',
      },
    ]
  },
  {
    key: '4',
    tittle:'Accessories',
    isExpanded:false,
    children: [
      {
        childKey: '1',
        childTittle:'Outer',
      },
      {
        childKey: '2',
        childTittle:'Dress',
      },
      {
        childKey: '3',
        childTittle:'Shirt',
      },
    ]
  },
];
const Accordion = ({ item, onClickFunction }) => {
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <>
        <View style={{marginTop:scale(10)}}>
          <TouchableOpacity onPress={onClickFunction} style={styles.viewList} activeOpacity={0.6}>
            <View style={styles.viewTextList}>
              <Text style={styles.textList}>{item.tittle}</Text>
            </View>
            <View style={styles.viewIcon}>
              {item.isExpanded? <IC_Up/> : <IC_Down/>}
            </View>
          </TouchableOpacity>
          <View style={{height: layoutHeight,overflow: 'hidden'}}>
            {item.children.map((item,key) =>
              <View key={key}>
                <TouchableOpacity style={styles.viewListBody}>
                  <View style={styles.viewTextList}>
                    <Text style={styles.textListBody}>{item.childTittle}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
    </>
  );
};
const Menu = (props) => {
  const [listDataSource, setListDataSource] = useState(parents);


  const updateLayout = (index) => {
    LayoutAnimation.configureNext({
      duration: 500,
      initialVelocity: 300,
      create: {type: 'linear', property: 'opacity'},
      update: {type: 'spring', springDamping: 0.4},
      delete: {type: 'linear', property: 'opacity'},
    });
    const array = [...listDataSource];
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    setListDataSource(array);
  };
  
  return (
    <SafeAreaView style={styles.container}>
        {/* Icon Close */}
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <IC_Close/>
        </TouchableOpacity>
        <ScrollView>
          {/* Categories */}
          <Custom_CategoryScrollView/>
          {/* Types */}
          <View>
            {listDataSource.map((item, key) => (
              <Accordion
                key={item.key}
                onClickFunction={() => {
                  updateLayout(key);
                }}
                item={item}
              />
            ))}
          </View>
          {/* Buttons */}
          <TouchableOpacity style={styles.buttonView}>
            <IC_Profile/>
            <Text style={styles.buttonText}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <IC_ForwardArrow/>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <IC_Call/>
            <Text style={styles.buttonText}>{'(786) 713-8616'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <IC_Location/>
            <Text style={styles.buttonText}>Store locator</Text>
          </TouchableOpacity>
        </ScrollView>
        

        {/* Footer */}
        <Custom_MenuFooter/>
    </SafeAreaView>
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.White,
        flex:1,
        paddingVertical:scale(10),
        paddingHorizontal:scale(16),
        flexDirection: 'column',
    },
    // --------------------------- //
    viewList:{
      height: scale(50),
      width:'95%',
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    viewTextList:{
      justifyContent: 'center',
      marginLeft: scale(20),
    },
    textList:{
      fontFamily: FONT_FAMILY.Regular,
      fontSize: scale(20),
      lineHeight:scale(48),
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
      height: scale(50),
      width:'100%',
      flexDirection: 'row',
      opacity: 30,
    },
    textListBody:{
      fontFamily: FONT_FAMILY.Regular,
      fontSize: scale(16),
      lineHeight:scale(46),
      color: color.TitleActive,
      marginLeft: scale(30),
    },
    // --------------------------- //
    buttonView: {
      flexDirection:'row', 
      alignItems:'center',
      marginLeft:scale(16),
      marginTop:scale(10),
    },
    buttonText: {
      fontFamily:FONT_FAMILY.Regular,
      fontSize:scale(16),
      lineHeight:scale(34),
      letterSpacing: scale(0.8),
      color:color.TitleActive,
      marginLeft:scale(16),
    },
})