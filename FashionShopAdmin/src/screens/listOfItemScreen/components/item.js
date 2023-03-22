import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IC_Edit,IC_Delete,IC_See } from '../../../assets/icons'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import color from '../../../constants/color'

const Item = (props) => {



  return (
    <SafeAreaView style={styles.viewItem}>
                <View style={styles.viewNumber}>
                    <Text style={styles.number}>{props.number}</Text>
                </View>
                <View style={styles.viewImage}>
                    <Image style={styles.image} source={props.source}></Image>
                </View>
                <View style={styles.viewDescription}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                    <Text style={styles.price}>{props.price}$</Text>
                </View>
                <View style={styles.viewFunction}>
                    <TouchableOpacity style={styles.viewIcon}>
                    <IC_See></IC_See>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewIcon}>
                    <IC_Delete></IC_Delete>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewIcon}>
                    <IC_Edit></IC_Edit>
                    </TouchableOpacity>
                    
                </View>
    </SafeAreaView>
  )
}

export default Item;

const styles = StyleSheet.create({
    viewItem:{
        // borderWidth: 1,
        width: '100%',
        height: scale(150),
        flexDirection: 'row',
        alignItems: 'center',
      },
      viewNumber:{
        width: '5%',
        justifyContent: 'center',

      },
      number:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: FONT_FAMILY.Regular,
        color: color.TitleActive,

      },
      viewImage:{
        width:'25%',
        height: scale(130),
        justifyContent: 'center',
        
      },
      image:{
        width: '75%',
        height: '75%',
        alignSelf: 'center'
      },
      viewDescription:{
        flexDirection: 'column',
        width: '45%',
      },
      name:{
        fontSize: 14,
        fontWeight: '400',
        fontFamily: FONT_FAMILY.Regular,
        color: color.TitleActive,
      },
      description:{
        fontSize: 14,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
        color: color.GraySolid,
      },
      price:{
        fontSize: 14,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
        color: color.TitleActive,
      },
      viewFunction:{
        width: '25%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center'
      },
      viewIcon:{
        width: scale(30),
        height: scale(30),
        justifyContent: 'center',
        alignItems: 'center'
      }
      
})