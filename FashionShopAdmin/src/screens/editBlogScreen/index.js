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
import SaveButton from '../../components/buttons/Save';

const EditBlogScreen = (props) => {
    const [product, setProduct] = useState(init);

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

    const handleChange = (e, prop)=>{
        setProduct({
            ...product, 
            [prop] : e.nativeEvent.text
        });

        console.log(product)
    }

    const handlePickCategory = (val)=>{
        console.log(val)
        setProduct({
            ...product, 
            categoryId: val
        });

        console.log(product)
    }

    const handlePickTag = (val)=>{
        // add pick tag
        const newTag = {tagName: val.value, tagId: val.label};
        const newTagArray = [...product.tag, newTag];
        setProduct({
            ...product, 
            tag: newTagArray
        });

        // remove picked tag
        const newTagList = tag.filter((tag) => tag.label !== newTag.tagId);
        setTag(newTagList);
    }

    const handleUnpickTag = (val)=>{

        // remove from picked tag
        const newProductTag = product.tag.filter((tag) => tag.tagId !== val);
        const unpickedTag = product.tag.find((tag) => tag.tagId === val)
        console.log(newProductTag, unpickedTag)
        setProduct({...product, tag: newProductTag});
        // add unpick tag
        setTag([...tag, {label: unpickedTag.tagId, value: unpickedTag.tagName}])
        console.log(product.tag, tag);
    }

    // image handle
    const [images, setImages] = useState([]);

    const checkReadImagePermission = () => {
        check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
        .then(result => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    console.log('This feature is not available (on this device / in this context)');
                    break;
                case RESULTS.DENIED:
                    requestPermission();
                    break;
                case RESULTS.LIMITED:
                    console.log('The permission is limited: some actions are possible');
                    break;
                case RESULTS.GRANTED:
                    ImageCropPicker.openPicker({
                        width: 343,
                        height: 460,
                        cropping: true
                        })
                    .then(image => {
                        setImages([...images, image.path]);
                        console.log(images)
                    })
                    .catch(err => console.log('Error: ', err.message))
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    break;
            }
        })
        .catch(err => console.log(err))
    }

    const requestPermission = () => {
        request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then((response) => {
            console.log(response)
        })
    }

    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
{/* header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backwardButton} onPress={()=>props.navigation.goBack()}>
                    <IC_Backward stroke={color.White}></IC_Backward>
                </TouchableOpacity>
                <View >
                    <Text style={styles.textHeader}>Edit blog</Text>
                </View>
            </View>
{/* body */}
            
                <KeyboardAvoidingView  behavior="padding">
                  <View style={styles.body}>
                    <ScrollView  keyboardShouldPersistTaps="handled" >
    {/* image */}
                        <View style={styles.imagePart}>
                            <Text style={styles.bodyText}>Image</Text>
                            <ScrollView horizontal={true}>
                                <View style={styles.imageRow}>
                                    {images.map((image) => (
                                        <View key={image} style={{width: scale(50), height: scale(67)}}>
                                            <Image resizeMode='cover' style={{width: '100%', height: '100%'}} source={{uri: image}}/>
                                        </View>
                                    ))}
                                    <TouchableOpacity onPress={checkReadImagePermission}>
                                        <View style={{width: scale(50), height: scale(67)}}>
                                            <Image style={{width: '100%', height: '100%'}} source={IMG_AddImage}/>
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                            </ScrollView>
                        </View>
    {/* input */}                    
                        <View style={styles.informationPart}>
                            <Text style={styles.bodyText}>Blog information</Text>
                            <SingleLine
                                name="title" 
                                placeholder={'Title'} 
                                handleChange={handleChange} 
                                keyboardType='default'
                            />
                            <Text style={styles.propText}>Detail:</Text>
                            <MultiLine 
                                name="detail" 
                                handleChange={handleChange} 
                                keyboardType='default'
                            />
                            <Text style={styles.propText}>Description:</Text>
                            <MultiLine 
                                name="description" 
                                handleChange={handleChange} 
                                keyboardType='default'
                            />
    {/* tag */}
                            <View style={styles.tagBox}>
                                <View>
                                    <DropDownPicker
                                        listMode="MODAL"
                                        open={tagOpen}
                                        placeholder="Tags"
                                        style={styles.tagDropDown}
                                        textStyle={styles.dropdownText}
                                        items={tag}
                                        setOpen={setTagOpen}
                                        modalProps={{
                                            animationType: "fade"
                                        }}
                                        onSelectItem={(item) => handlePickTag(item)}
                                    />
                                </View>
                                
                                <View style={{flex: 1}}>
                                    <Text style={styles.dropdownText}>Chosen tags:</Text>
                                        <ScrollView horizontal={true}>
                                            <View style={{flex: 1, flexDirection: 'row' , gap: 10}}>
                                                {product.tag.map((tag) => (  
                                                    <TagWithoutDelete key={tag.tagId} value={tag.tagName} cancel={true} tagId={tag.tagId} onPress={handleUnpickTag}/>
                                                ))}
                                            </View>
                                        </ScrollView>
                                </View>
                            </View>
                                                      
                        </View>
                    </ScrollView>

                    <View style={styles.button}>
                     <SaveButton text={'Edit blog'} onPress={()=>props.navigation.navigate("ListBlog")}></SaveButton>
                   </View> 
                </View>
            </KeyboardAvoidingView>
            
            
            <Message visible={visible} clickCancel={() => setVisible(false)}/> 
        </SafeAreaView>
    )
};

export default EditBlogScreen;

const init = {
    name: '',
    detail: '',
    description: '',
    tag: [],
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
        backgroundColor: color.White,
        paddingHorizontal: scale(10),
        height: Dimensions.get('screen').height*0.82
    },
    bodyText: {
        color: color.Body,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 23,
        fontWeight: '600',
        marginLeft: scale(3),
    },

    // image
    imagePart: {
        paddingTop: scale(10),
    },
    imageRow: {
        paddingVertical: scale(10),
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: scale(10),
    },

    // information
    informationPart: {
        flex: 1,
    },
    propText: {
        color: color.PlaceHolder,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
        fontWeight: '600',
        marginLeft: scale(3),
        marginTop: scale(20)
    },

    // tag
    tagDropDown: {
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
    tagBox: {
        marginTop: scale(15),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: scale(15),

    },
    // detail button
    button:{
        // marginTop: scale(0),
        height: Dimensions.get('screen').height*0.1,
        alignItems: 'center'
    },
});