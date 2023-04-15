import { StyleSheet, Text, View,SafeAreaView, FlatList, Image, TouchableOpacity, TextInput,Platform, KeyboardAvoidingView, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'
import { IMG_Collection, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../assets/images'
import CollectionItem from './components/collectionItem'
import { IC_Backward, IC_BackwardArrow } from '../../assets/icons'


const data=[
  {id:1,name: 'SAPPOCHE', source: IMG_Collection},
  {id:2,name: 'NAGAMI', source: IMG_ModelFour},
  {id:3,name: 'NONUNO',source: IMG_ModelOne},
  {id:4,name: 'SUMGA',source: IMG_ModelTwo},
  {id:5,name: 'KAKHUKO',source: IMG_ModelThree},
  {id:6,name: 'RAPAMA',source: IMG_ModelFour},
  {id:7,name: 'TAKOYA',source: IMG_ModelOne},

]

const ListOfCollectionScreen = (props) => {

    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          
          <View style={styles.viewText}>
            <View style={styles.viewTitleText}>
              <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                      <IC_Backward stroke={color.White} />
              </TouchableOpacity>
              <Text style={styles.textTile}>List of collections</Text>
            </View>
                <TouchableOpacity style={styles.viewTextLabel} onPress={()=>props.navigation.navigate("AddCollection")}>
                    <Text style={styles.textLabel}>Add collection</Text>
                </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.body}>
        <FlatList
        style={styles.flat}
              data={data}
              keyExtractor={item => `${item.id}`}
              numColumns={2}
              columnWrapperStyle={{alignSelf: 'center'}}
              renderItem={({item}) => (
                  <CollectionItem
                    name={item.name}
                    source={item.source}
                    onPress={()=>props.navigation.navigate("EditCollection")}
                  />
              )}
            />      
        </View>
    </SafeAreaView>
  )
}

export default ListOfCollectionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        height: Dimensions.get('screen').height*0.25,
        backgroundColor: color.TitleActive,
        elevation: 1,
        paddingBottom: scale(20),
        justifyContent: 'flex-end'
      },
      viewText:{
        // marginTop: scale(80),

      },
      viewTitleText:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      textTile: {
        color: color.White,
        fontSize: 36,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: 700,
      },
      viewTextLabel:{
        marginLeft: scale(30),
        backgroundColor: color.Alto,
        width: scale(175),
        height: scale(36),
        alignItems: 'center',
        marginTop: scale(10),
      },
      textLabel: {
        color: color.TitleActive,
        fontSize: 24,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: 700,
      },
      viewSearch:{
        flexDirection: 'row',
        alignItems: 'center',
        width: scale(166),
        marginRight: scale(20),
        borderWidth: 1,
        borderColor: color.White,
      },
      textInput:{
        width: '70%',
        color: color.White,

      },
      viewIcon:{
        width: '30%',
        alignItems: 'center'
      },
      body:{
        flex: 1,
        backgroundColor: color.White,
      },
      flat:{
        width: '100%',
        alignSelf: 'center'
      }
      
})