import { Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableOpacity , TextInput} from 'react-native'
import React , {useState}from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { IC_Backward } from '../../assets/icons'
import scale from '../../constants/responsive'
import SaveButton from '../../components/buttons/Save'

const AddSizeScreen = () => {
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
                <Text style={styles.textHeader}>Add size</Text>
            </View>
        </View>

        <View style={styles.body}>
            <View style={styles.viewTextTitle}>
                <Text style={styles.textTitle}>Size information</Text>
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
                <Text style={styles.textLabel}>Size measurement</Text>
            </View>
            <View style={styles.viewAdd}>
                <View style={styles.viewTextAdd}>
                    <Text style={styles.textAdd}>Width</Text>
                </View>
                <View style={styles.viewInputAdd}>
                <TextInput style={styles.textInput}
                            placeholder="Width"
                            placeholderTextColor={color.GraySolid}
                            editable
                            numberOfLines={1}
                            maxLength={5}
                            onChangeText={text => onChangeTextSize(text)}
                            keyboardType='ascii-capable'
                            value={size}
                />
                </View>
            </View>
            <View style={styles.viewAdd}>
                <View style={styles.viewTextAdd}>
                    <Text style={styles.textAdd}>Length</Text>
                </View>
                <View style={styles.viewInputAdd}>
                <TextInput style={styles.textInput}
                            placeholder="Length"
                            placeholderTextColor={color.GraySolid}
                            editable
                            numberOfLines={1}
                            maxLength={5}
                            onChangeText={text => onChangeTextLength(text)}
                            keyboardType='ascii-capable'
                            value={length}
                />
                </View>
            </View>

            <View style={styles.button}>
                <SaveButton text={'Add size'}></SaveButton>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default AddSizeScreen

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
})