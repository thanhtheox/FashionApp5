import { Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableOpacity , TextInput} from 'react-native'
import React , {useState}from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { IC_Backward } from '../../assets/icons'
import scale from '../../constants/responsive'
import SaveButton from '../../components/buttons/Save'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const AddTagScreen = () => {
    const [text, onChangeText] = useState("");
    const [size, onChangeTextSize]= useState("");
    const [length, onChangeTextLength]= useState("");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity >
                <IC_Backward stroke={color.White}></IC_Backward>
            </TouchableOpacity>
            <View >
                <Text style={styles.textHeader}>Add Tag</Text>
            </View>
        </View>

        <View style={styles.body}>
            <View style={styles.viewTextTitle}>
                <Text style={styles.textTitle}>Tag information</Text>
            </View>
            <View style={styles.viewTextInput}>
                <TextInput style={styles.textInput}
                            placeholder="Name ..."
                            placeholderTextColor={color.GraySolid}
                            editable
                            numberOfLines={1}
                            maxLength={30}
                            onChangeText={text => onChangeText(text)}
                            keyboardType='ascii-capable'
                            value={text}
                />

            </View>
            <View>
                <Text style={styles.textTitle}>Choose type: </Text>
                <View style={styles.checkView}>
                <BouncyCheckbox
                    size={25}
                    fillColor="black"
                    unfillColor="#FFFFFF"
                    text="Product"
                    iconStyle={{ borderColor: "black", borderRadius: 0 }}
                    innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
                    onPress={(isChecked) => {}}
                    style={{flexDirection: 'row-reverse', justifyContent: 'space-between', gap: scale(15)}}
                    textStyle={{fontWeight: '700', fontSize: 15, fontFamily: FONT_FAMILY.Regular, textDecorationLine: "none",}}
                    disableText={false}
                />
                <BouncyCheckbox
                    size={25}
                    fillColor="black"
                    unfillColor="#FFFFFF"
                    text="Blog"
                    iconStyle={{ borderColor: "black", borderRadius: 0 }}
                    innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
                    onPress={(isChecked) => {}}
                    style={{flexDirection: 'row-reverse', justifyContent: 'space-between', gap: scale(15)}}
                    textStyle={{fontWeight: '700', fontSize: 15, fontFamily: FONT_FAMILY.Regular, textDecorationLine: "none",}}
                />
                </View>
            </View>
            

            <View style={styles.button}>
                <SaveButton text={'Add Tag'}></SaveButton>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default AddTagScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        backgroundColor: color.TitleActive,
        height: Dimensions.get('screen').height*0.1,
        alignItems: 'center'
    },
    textHeader:{
        color: color.White,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 24,
        fontWeight: '700',
    },
    body:{
        height: Dimensions.get('screen').height*0.9,
        backgroundColor: color.White,
        paddingLeft: scale(15),
        paddingTop: scale(15),
        gap: scale(15),
    },
    viewTextTitle:{
        
    },
    textTitle:{
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 22,
        fontWeight: '700',
    },
    viewTextInput:{
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor: color.GraySolid,
    },
    textInput:{
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 16,
        fontWeight: '400',
        marginLeft: scale(10),
    },
    viewTextLabel:{
        marginTop: scale(30),
        marginLeft: scale(30),
    },
    textLabel:{
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 14,
        fontWeight: '400',
    },
    viewAdd:{
        flexDirection: 'row',
        marginTop: scale(30),
        marginLeft: scale(30),
        alignItems: 'center'
    },
    viewTextAdd:{
        width: '20%'
    },
    textAdd:{
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 16,
        fontWeight: '400',
    },
    viewInputAdd:{
        borderWidth: 1,
        width: '30%'
    },
    button:{
        marginTop: scale(70),
        flex: 0.15,
        alignItems: 'center'
        
    },
    checkView: {width: scale(130), gap: scale(10), margin: scale(15)},
})  