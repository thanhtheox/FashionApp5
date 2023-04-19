import { StyleSheet, Text, View , SafeAreaView, TextInput} from 'react-native'
import React, { useState } from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IC_Backward } from '../../assets/icons'
import scale from '../../constants/responsive'
import SingleLine from '../../components/inputTexts/singleLine'
import DropDownPicker from 'react-native-dropdown-picker'
import SaveButton from '../../components/buttons/Save'

const AddCategoryScreen = () => {

    const [tag, setTag] = useState([
        {label: '1', value: 'apple'},
        {label: '2', value: 'banana'},
        {label: '3', value: 'pie'},
        {label: '4', value: 'orange'},
        {label: '5', value: 's'},
        {label: '6', value: 'ds'},
        {label: '7', value: 'sa'},
        {label: '8', value: 'dsa'},
        
    ]);
    const [tagOpen, setTagOpen] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
    {/* header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                    <IC_Backward stroke={color.White}></IC_Backward>
                </TouchableOpacity>
                <View >
                    <Text style={styles.textHeader}>Add category</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.viewTextTitle}>
                    <Text style={styles.textTitle}>Collection information</Text>
                </View>
                <View style={styles.viewTextInput}>
                    <TextInput 
                        style={styles.inputText} 
                        placeholder={'Name'} 
                        placeholderTextColor={color.PlaceHolder} 
                        selectionColor={color.TitleActive}
                        keyboardAppearance='dark'
                    />
                </View>
                <View style={styles.categoryBox}>
                    <View>
                        <DropDownPicker
                            open={tagOpen}
                            placeholder="Parent"
                            style={styles.categoryDropDown}
                            textStyle={styles.dropdownText}
                            items={tag}
                            setOpen={setTagOpen}
                            modalProps={{
                                animationType: "fade"
                            }}
                            onSelectItem={(item) => handlePickTag(item)}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.propText}>Description</Text>
                    <TextInput
                        style={styles.multiLineInputText}
                        selectionColor={color.GraySolid}
                        keyboardAppearance='dark'
                        multiline={true}
                        maxLength={500}
                    />
                </View>
                <View style={styles.buttonView}>
                    <SaveButton text={'Add category'} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddCategoryScreen

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
        paddingHorizontal: scale(15),
    },
    viewTextTitle:{
        marginTop: scale(15),
    },
    textTitle:{
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Bold,
        fontSize: 22,
        fontWeight: '600',
    },
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
    multiLineInputText: {
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
    categoryBox: {
        marginTop: scale(15),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: scale(15),
    },
    categoryDropDown: {
        borderRadius: 0,
        borderColor: color.PlaceHolder,
        width: scale(120),
        paddingVertical: 15
    },
    dropdownText: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
    },
    propText: {
        color: color.PlaceHolder,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
        fontWeight: '600',
        marginLeft: scale(3),
        marginTop: scale(20)
    },
    buttonView: {
        alignItems: 'center',
        marginTop: scale(30)
    }
})