import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import scale from '../../constants/responsive'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'

const SingleLine = (props) => {
    return (
        <TextInput 
            style={styles.inputText} 
            placeholder={props.placeholder} 
            placeholderTextColor={color.PlaceHolder} 
            selectionColor={color.TitleActive}
            onChangeText={props.onChangeText}
            keyboardAppearance='dark'
            keyboardType={props.keyboardType}
            defaultValue={props.defaultValue}
            handleChange={props.handleChange}
        />
    )
}

export default SingleLine;

const styles = StyleSheet.create({
    inputText: {
        color: color.TitleActive,
        borderBottomWidth: 1,
        borderBottomColor: color.PlaceHolder,
        marginTop: scale(10),
        fontFamily: FONT_FAMILY.Regular,
        textAlignVertical: 'bottom',
        paddingHorizontal: scale(10),
        fontSize: scale(16),
        paddingBottom: scale(5),
    },
})