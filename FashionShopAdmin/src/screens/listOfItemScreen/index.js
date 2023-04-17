import { StyleSheet, Text, View,SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput,Platform, KeyboardAvoidingView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'
import { IMG_Collection, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../assets/images'
import { IC_Delete, IC_Edit, IC_Search, IC_See, IC_BackwardArrow, IC_Backward } from '../../assets/icons'
import Item from './components/item'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'


// const data=[
//   {id:1,name: 'SAPPOCHE',description: 'cardigan green', price: '10.00', source: IMG_Collection},
//   {id:2,name: 'NAGAMI',description: 'cardigan pink', price: '34.00', source: IMG_ModelFour},
//   {id:3,name: 'NONUNO',description: 'cardigan blue', price: '5.00',source: IMG_ModelOne},
//   {id:4,name: 'SUMGA',description: 'cardigan brown', price: '25.00',source: IMG_ModelTwo},
//   {id:5,name: 'KAKHUKO',description: 'cardigan black', price: '40.00',source: IMG_ModelThree},
//   {id:6,name: 'RAPAMA',description: 'cardigan yellow', price: '30.00',source: IMG_ModelFour},
//   {id:7,name: 'TAKOYA',description: 'cardigan pastel', price: '50.00',source: IMG_ModelOne},

// ]

const ListOfItemScreen = (props) => {
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProducts = async () => {
        try {
            const response = await axiosPrivate.get('/get-all-product', {
                signal: controller.signal
            });
            console.log(response.data);
            isMounted && setData(response.data);
        } 
        catch (err) {
            console.log(err.response.data);
        }
    }

    getProducts();

    return () => {
        isMounted = false;
        controller.abort();
    }

  }, [])

  const [value, onChangeText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        
          <View style={styles.viewText}>
            <View style={styles.viewTitleText}>
              <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                  <IC_Backward stroke={color.White}/>
              </TouchableOpacity>
              <Text style={styles.textTile}>List of items</Text>
            </View>
              <View style={styles.viewTextAndSearch}>
                    <TouchableOpacity style={styles.viewTextLabel} onPress={()=>props.navigation.navigate("AddItem")}>
                      <Text style={styles.textLabel}>Add item</Text>
                    </TouchableOpacity>
                    <View style={styles.viewSearch}> 
                          <TextInput style={styles.textInput}
                            placeholder="Search ..."
                            placeholderTextColor={color.AthensGray}
                            editable
                            numberOfLines={1}
                            maxLength={40}
                            onChangeText={text => onChangeText(text)}
                            keyboardType='ascii-capable'
                            value={value}
                          >

                          </TextInput>
                          <View style={styles.viewIcon}>
                            <IC_Search stroke = {color.White}/>
                          </View>

                    </View>
              </View>
          </View>
        </View>
        
        <View style={styles.body}>
            <ScrollView style={{height: '100%'}}>
                {data.map((item,index)=>(
                  <Item
                  key={item._id}
                  number={index+1}                
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  source = {item.posterImage.url}
                  onPress={()=>props.navigation.navigate("ItemDetail",{data: item})}
                  onPressEdit={()=>props.navigation.navigate("EditItem",{data: item})}
                  />

                ))}
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default ListOfItemScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        height: Dimensions.get('screen').height*0.25,
        backgroundColor: color.TitleActive,
        elevation: 1,
        justifyContent: 'flex-end',
        paddingBottom: scale(20),

      },
      viewTitleText:{
        flexDirection: 'row',
        alignItems: 'center'
      },
      textTile: {
        color: color.White,
        fontSize: 36,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: 700,
      },
      viewTextAndSearch:{
        flexDirection: 'row',
        marginTop: scale(10),
        alignItems: 'center',
        justifyContent: 'space-between',

      },
      viewTextLabel:{
        backgroundColor: color.Alto,
        width: scale(122),
        height: scale(36),
        alignItems: 'center',
        marginLeft: scale(30)

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
      
})