import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'
import ItemColor from './components/itemColor'
import ItemSize from './components/itemSize'

const dataColor=[
  {id: 1,name: 'Salmon', code: '#FA8072'},
  {id: 2,name: 'Red', code: '#FF0000'},
  {id: 3,name: 'Tan', code: '#D2B48C'},
  {id: 4,name: 'Pink', code: '#FFC0CB'},
  {id: 5,name: 'Tomato', code: '#FF6347'},
  {id: 6,name: 'Orange', code: '#FFA500'},
  {id: 7,name: 'Violet', code: '#EE82EE'},
  {id: 8,name: 'BlueViolet', code: '#8A2BE2'},
  {id: 9,name: 'LimeGreen', code: '#32CD32'},


];

const dataSize=[
  {id: 1, size: 'S', width: '56', length: '68'},
  {id: 2, size: 'M', width: '58', length: '72'},
  {id: 3, size: 'L', width: '60', length: '74'},

];
const ListOfColor_SizeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.viewText}>
          <View style={styles.viewTitleText}>
            <Text style={styles.textTile}>List of colors & sizes</Text>
          </View>
          <View style={styles.viewLabel}>
          <TouchableOpacity style={styles.viewTextLabel}>
            <Text style={styles.textLabel}>Add color</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewTextLabel}>
            <Text style={styles.textLabel}>Add size</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>


      <View style={styles.body}>
        <View style={styles.viewColor}>
          <View style={styles.viewTextColor}>
            <Text style={styles.textColor}>Colors</Text>
          </View>
          <View>
          <ScrollView >
          {dataColor.map((item,index)=>(
                  <ItemColor
                  key={item.id}
                  number={index+1}                
                  name={item.name}
                  code={item.code}
                  />

                ))}

          </ScrollView>
          </View>
        </View>


        <View style={styles.viewSize}>
          <View style={styles.viewTextColor}>
            <Text style={styles.textColor}>Size chart {'(cm)'}</Text>
          </View>
          <View>
          <View style={styles.viewSizeHeader}>
            <View style={styles.viewTextSize}>
            <Text style={styles.textSize}>Size</Text>
            </View>
            <View style={styles.viewTextSize}>
            <Text style={styles.textSize}>Width</Text>
            </View>
            <View style={styles.viewTextSize}>
            <Text style={styles.textSize}>Length</Text>
            </View>
          </View>
          <ScrollView >
          {dataSize.map((item,index)=>(
                  <ItemSize
                  key={item.id}
                  size={item.size}
                  width={item.width}
                  length={item.length}
                  />

                ))}

          </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ListOfColor_SizeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        flex: 0.3,
        backgroundColor: color.TitleActive,
      },
      viewText:{
        marginTop: scale(30),
        marginLeft: scale(30),
      },
      viewTitleText: {
        height: scale(100),
        width: scale(250)
      },
      textTile: {
        color: color.White,
        fontSize: 36,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: 700,
      },
      viewLabel:{
        flexDirection: 'row',
        marginTop: scale(10),
      },
      viewTextLabel:{
        width: scale(122),
        height: scale(36),
        backgroundColor: color.AthensGray,
        alignItems: 'center',
        marginRight: scale(20)
      },
      textLabel: {
        color: color.TitleActive,
        fontSize: 24,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: 700,
      },
      body:{
        flex: 0.7,
      },
      viewColor:{
        flex: 0.45,
        backgroundColor: color.White,
        // marginTop: scale(10),
      },
      viewTextColor:{
        height: scale(36),
        alignContent: 'center',
        marginLeft: scale(18)
      },
      textColor:{
        color: color.TitleActive,
        fontSize: 24,
        fontFamily: FONT_FAMILY.Regular,
        fontWeight: '700'
      },
      viewSize:{
        flex: 0.35,
        marginTop: scale(50),
        backgroundColor: color.White,
      },

      viewSizeHeader:{
        marginTop: scale(5),
        width: '95%',
        flexDirection: 'row',
        height: scale(40),
        alignItems: 'center',
        alignSelf: 'center'
      },
      textSize:{
        fontSize: 18,
        fontFamily: FONT_FAMILY.Regular,
        fontWeight: '500',
        color: color.TitleActive
      }, 
      viewTextSize:{
        width: '25%',
        alignItems: 'center'
      },
})
