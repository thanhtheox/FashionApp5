import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IC_Backward } from '../../assets/icons'
import HeaderMin from '../../components/header/headerMin'

const ListOfOrderScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderMin text={"List of orders"} onPress={()=>props.navigation.goBack()}/>
    </SafeAreaView>
  )
}

export default ListOfOrderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
},
header:{
    flexDirection: 'row',
    backgroundColor: color.TitleActive,
    flex:0.1,
    alignItems: 'center'
},
textHeader:{
    color: color.White,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 24,
    //fontWeight: '600',
},
body:{
    flex: 0.9,
    backgroundColor: color.White,
}
})