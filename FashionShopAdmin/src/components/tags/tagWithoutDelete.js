import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import scale from '../../constants/responsive'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { IC_Close } from '../../assets/icons'

const TagWithoutDelete = (props) => {
    return props.value ? (
            <View style={[styles.border, props.cancel?{flexDirection: 'row'}:{}]}>
                <Text style={styles.text}>{props.value}</Text>
                {props.cancel?(<TouchableOpacity onPress={() => (props.onPress(props.tagId))}>
                    <IC_Close viewBox={`-3 -3 30 30`}/>
                </TouchableOpacity>):(null)}
            </View>
    ) : null
    
}

export default TagWithoutDelete

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderRadius: 30,
        padding: scale(3),
        paddingHorizontal: scale(5),
        backgroundColor: 'transparent',
        borderColor: color.Border,
        minWidth: scale(50),
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(14),
        color: color.Body,
        alignSelf: 'center',
    },
});
