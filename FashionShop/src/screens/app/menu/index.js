import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,Platform, UIManager,LayoutAnimation, ScrollView} from 'react-native'
import React, { useState } from 'react'
import color from '../../../constants/color'
import { IC_Call, IC_Close, IC_Down, IC_Forward, IC_ForwardArrow, IC_Location, IC_Up } from '../../../assets/icons'
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
    tittle:'Shoes',
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
    key: '5',
    tittle:'Beauty',
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
    key: '6',
    tittle:'Accessories',
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
const Accordion = () => {
  const [isOpen, setIsOpen] = useState('0');

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext({
    duration: 1000,
    create: {type: 'linear', property: 'opacity'}, 
    update: {type: 'spring', springDamping: 0.4}, 
    delete: {type: 'linear', property: 'opacity'} 
  });
  }

  return (
    <>
      {parents.map(item => 
            <View key={item.key} style={{marginTop:scale(10)}}>
              <TouchableOpacity onPress={toggleOpen} style={styles.viewList} activeOpacity={0.6}>
                <View style={styles.viewTextList}>
                  <Text style={styles.textList}>{item.tittle}</Text>
                </View>
                <View style={styles.viewIcon}>
                  {!isOpen ?<IC_Down/>:<IC_Up/>}
                </View>
              </TouchableOpacity>
              <View  style={[styles.list,!isOpen ? styles.hidden : undefined]}>
                {item.children.map(item =>
                  <View key={item.childKey}>
                    <TouchableOpacity style={styles.viewListBody}>
                      <View style={styles.viewTextList}>
                        <Text style={styles.textListBody}>{item.childTittle}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          )}
    </>
  );
};
const Menu = () => {
  
  return (
    <SafeAreaView style={styles.container}>
        {/* Icon Close */}
        <TouchableOpacity>
            <IC_Close/>
        </TouchableOpacity>
        {/* Categories */}
        <Custom_CategoryScrollView/>
        <ScrollView>
          {/* Types */}
          <Accordion/>
          {/* Buttons */}
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
      width:'100%',
      flexDirection: 'row',
    },
    viewTextList:{
      justifyContent: 'center',
      width: scale(300),
      marginLeft: scale(20),
    },
    textList:{
      fontFamily: FONT_FAMILY.Regular,
      fontSize: scale(16),
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