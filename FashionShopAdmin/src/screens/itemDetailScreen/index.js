import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    Dimensions, 
    Image, 
    TextInput, 
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { IC_Backward } from '../../assets/icons';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import { IMG_AddImage } from '../../assets/images';
import SingleLine from '../../components/inputTexts/singleLine';
import MultiLine from '../../components/inputTexts/multiLine';
import DropDownPicker from 'react-native-dropdown-picker';
import TagWithoutDelete from '../../components/tags/tagWithoutDelete';
import ImageCropPicker from 'react-native-image-crop-picker';
import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions';
import Message from '../../components/alearts.js/messageOnly';
import { DataTable } from 'react-native-paper';
import SaveButton from '../../components/buttons/Save';

const ItemDetailScreen = (props) => {

    const size = ["S", "M", "L", "2XL"];
    const qty = [
        {color: 'red', S: 20, M: 15, L: 3},
        {color: 'blue', S: 17, M: 15, L: 3},
        {color: 'green', S: 20, M: 15, L: 3}
    ]
    const [color, setColor] = useState([
        {label: '1', value: 'apple'},
        {label: '2', value: 'banana'},
        {label: '3', value: 'pie'},
        {label: '4', value: 'orange'},
        {label: '5', value: 's'},
        {label: '6', value: 'ds'},
        {label: '7', value: 'sa'},
        {label: '8', value: 'dsa'},
        
    ]);
    const [pickedColor, setPickedColor] = useState([]);
    const [colorOpen, setColorOpen] = useState(false);
    const tags = [
        {label: '1', value: 'apple'},
        {label: '2', value: 'banana'},
        {label: '3', value: 'pie'},
        {label: '4', value: 'orange'},
    ];

    const handleChange = (e, prop)=>{
    }

    const handlePickColor = (val)=>{
        
    }

    const handleUnpickColor = (val)=>{

    }
    return (
        <SafeAreaView style={styles.container}>
{/* header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backwardButton} onPress={()=>props.navigation.goBack()}>
                    <IC_Backward stroke={color.White}></IC_Backward>
                </TouchableOpacity>
                <View >
                    <Text style={styles.textHeader}>Item detail</Text>
                </View>
            </View>
{/* body */}
            <View style={styles.body}>
                <View style={{flex: 1}}>
                    <ScrollView overScrollMode='auto' contentContainerStyle={{flexGrow: 1}}>
    {/* information */}                    
                        <View style={styles.informationPart}>
                            <Text style={styles.bodyText}>Item information</Text>
                            <View style={{height: scale(130), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View>
                                    <Text style={styles.propText}>Name</Text>
                                    <Text style={styles.propText}>Price</Text>
                                    <Text style={styles.propText}>Cost Price</Text>
                                    <Text style={styles.propText}>Profit</Text>
                                </View>
                                <View style={{alignItems: 'flex-end'}}>
                                    <Text style={styles.propText}>Lameri</Text>
                                    <Text style={styles.propText}>$10</Text>
                                    <Text style={styles.propText}>$5</Text>
                                    <Text style={styles.propText}>$5</Text>
                                </View>
                                <View style={{width: scale(130), height: scale(130)}}>
                                    <Image style={{width: '99%', height: '99%'}} source={{uri: 'https://heartoffashion.ca/wp-content/uploads/2022/09/Heart-of-Fashion-Mobile-Hero-Image-Raised.jpg'}}/>
                                </View>
                            </View>
    {/* category */}
                            <Text style={styles.propText}>Category: Dress(Women)</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: scale(10)}}>
                                <Text style={styles.propText}>Tags:</Text>
                                    <ScrollView horizontal={true}>
                                        <View style={{flex: 1, flexDirection: 'row' , gap: 10}}>
                                            {tags.map((tag) => (  
                                                <TagWithoutDelete key={tag.label} value={tag.value} cancel={true} tagId={tag.tagId} />
                                            ))}
                                        </View>
                                    </ScrollView>
                            </View>
                            <Text style={[styles.propText, {marginTop: scale(30), marginBottom: scale(5)}]}>Material Descriptions</Text>
                            <Text style={styles.text}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. </Text>

                            <Text style={[styles.propText, {marginTop: scale(25)}]}>Care Descriptions</Text>
                            <Text style={styles.text}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. </Text>
                        
                            <View style={styles.quantityView}>
                                <Text style={styles.bodyText}>Quantities</Text>
                                
                                <DataTable style={{flex: 1}}>
                                    <DataTable.Header>
                                        <DataTable.Title textStyle={styles.text}>Color</DataTable.Title>
                                        <DataTable.Title textStyle={styles.text}>S</DataTable.Title>
                                        <DataTable.Title textStyle={styles.text}>M</DataTable.Title>
                                        <DataTable.Title textStyle={styles.text}>L</DataTable.Title>
                                    </DataTable.Header>
                                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
                                        {qty.map((row) => (
                                            <TouchableOpacity key={row.color}>
                                                <DataTable.Row style={{height: scale(70)}} >
                                                    <DataTable.Cell textStyle={styles.text}>{row.color}</DataTable.Cell>
                                                    <DataTable.Cell textStyle={styles.text}>{row.S}</DataTable.Cell>
                                                    <DataTable.Cell textStyle={styles.text}>{row.M}</DataTable.Cell>
                                                    <DataTable.Cell textStyle={styles.text}>{row.L}</DataTable.Cell>
                                                </DataTable.Row>
                                            </TouchableOpacity>
                                        ))}
                                    </ScrollView>
                                </DataTable>
                            </View>
                            <View style={styles.button}>
                                <SaveButton text={'Edit item detail'} onPress={()=>props.navigation.navigate("AddItem")}></SaveButton>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default ItemDetailScreen;

const init = {
    name: '',
    price: 0,
    materialDescription: '',
    careDescription: '',
    tag: [],
    categoryId: ''
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // header
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
        marginTop: scale(10),
    },
    backwardButton: {
        marginLeft: scale(15),
        marginTop: scale(10),
    },

    //  body
    body: {
        flex: 1,
        backgroundColor: color.White,
        padding: scale(10),
    },
    bodyText: {
        color: color.Body,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 23,
        fontWeight: '600',
        marginLeft: scale(3),
    },

    // information
    informationPart: {
    },
    propText: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
        fontWeight: '400',
        marginLeft: scale(3),
    },

    // category
    categoryDropDown: {
        borderRadius: 0,
        borderColor: color.PlaceHolder,
        width: scale(150),
        paddingVertical: 15
    },
    dropdownText: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
    },
    categoryBox: {
        marginTop: scale(15),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: scale(15),
    },
    // Quantity
    quantityView: {
        marginTop: scale(35),
        gap: scale(15)
    },
    sizeView: {
        flexDirection: 'row',
        gap: scale(20),
        alignItems: 'center',
    },
    sizeInputBox: {
        width: scale(100),
        height: scale(50),
        borderWidth: 1,
    },
    text: {
        fontWeight: '300', 
        fontSize: 15, 
        fontFamily: FONT_FAMILY.Regular, 
        textDecorationLine: "none", 
        color: color.TitleActive
    },

    // save button
    button:{
        marginTop: scale(40),   
        alignItems: 'center'
        
    },
});