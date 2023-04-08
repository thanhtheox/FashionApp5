import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import scale from '../../constants/responsive'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'

const MultiLine = (props) => {
    return (
        <TextInput 
            style={styles.inputText} 
            placeholder={props.placeholder} 
            placeholderTextColor={color.PlaceHolder} 
            selectionColor={color.GraySolid}
            onChange={(e) => props.handleChange(e, props.name)}
            keyboardAppearance='dark'
            keyboardType={props.keyboardType}
            multiline={true}
            maxLength={500}
        />
    )
}

export default MultiLine;

const styles = StyleSheet.create({
    inputText: {
        color: color.TitleActive,
        borderWidth: 1,
        borderColor: color.PlaceHolder,
        fontFamily: FONT_FAMILY.Regular,
        textAlignVertical: 'top',
        fontSize: scale(16),
        paddingBottom: scale(5),
        minHeight: scale(108),
        maxHeight: scale(150),
        alignContent: 'center',
        paddingHorizontal: scale(10),
    },
})