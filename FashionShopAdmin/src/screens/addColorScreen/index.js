import { Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableOpacity , TextInput} from 'react-native'
import React , {useState}from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { IC_Backward } from '../../assets/icons'
import scale from '../../constants/responsive'
import SaveButton from '../../components/buttons/Save'
import { ColorPicker } from 'react-native-color-picker'

const AddColorScreen = (props) => {
    const [text, onChangeText] = useState("");
    const [textColor, onChangeTextColor]= useState("#ffffff");
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity >
                <IC_Backward stroke={color.White}></IC_Backward>
            </TouchableOpacity>
            <View >
                <Text style={styles.textHeader}>Add color</Text>
            </View>
        </View>

        <View style={styles.body}>
            <View style={styles.viewTextTitle}>
                <Text style={styles.textTitle}>Color information</Text>
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

            <View style={styles.viewTextLabel}>
                <Text style={styles.textLabel}>Color code</Text>
            </View>
            <View style={styles.viewAdd}>
                <View style={styles.viewInputAdd}>
                <TextInput style={styles.textInput}
                            placeholder="#ffffff"
                            placeholderTextColor={color.GraySolid}
                            editable
                            numberOfLines={1}
                            maxLength={7}
                            onChangeText={text => onChangeTextColor(text)}
                            keyboardType='ascii-capable'
                            value={textColor}
                />
                </View>
            </View>
            <View  style={styles.colorView}>
            <ColorPicker
                onColorSelected={color => onChangeTextColor(color)}
                // onColorChange={onColorChange}
                // color={textColor}
                style={{flex: 1}}
            />
            </View>


            <View style={styles.button}>
                <SaveButton text={'Add color'}></SaveButton>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default AddColorScreen

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
    },
    viewTextTitle:{
        marginLeft: scale(15),
        marginTop: scale(15),
    },
    textTitle:{
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 22,
        fontWeight: '600',
    },
    viewTextInput:{
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor: color.GraySolid,
        marginTop: scale(10)
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
        marginTop: scale(10),
        marginLeft: scale(30),
        alignItems: 'center'
    },
    viewInputAdd:{
        borderWidth: 1,
        width: '40%',
        marginRight: scale(50)
    },
    // color:{
    //     borderWidth: 1,
    //     width:  scale(90),
    //     height: scale(30)
    // },
    colorView:{
        height: Dimensions.get('screen').height*0.3,
    },
    button:{
        marginTop: scale(70),
        flex: 0.15,
        alignItems: 'center'
        
      },
})