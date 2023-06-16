import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    Dimensions, 
    Image, 
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { IC_AddImage, IC_Close } from '../../assets/icons';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import SingleLine from '../../components/inputTexts/singleLine';
import MultiLine from '../../components/inputTexts/multiLine';
import DropDownPicker from 'react-native-dropdown-picker';
import TagWithoutDelete from '../../components/tags/tagWithoutDelete';
import ImageCropPicker from 'react-native-image-crop-picker';
import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions';
import Message from '../../components/alearts.js/messageOnly';
import HeaderMin from '../../components/header/headerMin';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import SaveButton from '../../components/buttons/Save';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const EditItemScreen = (props) => {
    //console.log("===================Edit item screen=====================");
    const oldItem = props.route.params.data;
    console.log({oldItem})
    const init = {
        name: oldItem.name,
        price: oldItem.price + '',
        materialDescription: oldItem.material,
        careDescription: oldItem.care,
        description: oldItem.description,
        tag: [],
        categoryId: oldItem.categoryId,
        categoryName: props.route.params.categoryName,
        oldImage: oldItem.image
    }

    const addProductSchema = yup.object({
        name: yup
            .string()
            .required('Name cannot be blank')
            .max(100, 'Name length must be less than 100 characters'),
        price: yup
            .number('Price must be number')
            .required('price cannot be blank'),
        materialDescription: yup
            .string()
            .required('Material description cannot be blank')
            .min(5, 'A material must have minimum of 5 character')
            .max(500, 'A material must have maximum of 500 character'),
        careDescription: yup
            .string()
            .required('Care description cannot be blank')
            .min(5, 'A care must have minimum of 5 character')
            .max(500, 'A care must have maximum of 500 character'),
        description: yup
            .string()
            .required('Description cannot be blank')
            .min(5, 'A description must have minimum of 5 character')
            .max(500, 'A description must have maximum of 500 character'),
        categoryId: yup.string().required(),
        tag: yup.number().moreThan(0, 'A product must have at least 1 tag').lessThan(4, 'A blog should have no more than 3 tags'),
        image: yup.number().moreThan(0, 'A product must have at least 1 image').lessThan(5, 'A blog should have no more than 4 images')
    });
    
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: oldItem.name,
            price: oldItem.price + '',
            materialDescription: oldItem.material,
            careDescription: oldItem.care,
            description: oldItem.description,
            categoryId: oldItem.categoryId,
            tag: oldItem.tag.length,
            image: oldItem.image.length,
        },
        resolver: yupResolver(addProductSchema),
    });
    const [product, setProduct] = useState(init);
    const [loading, setLoading] = useState(false);
    //console.log({product})
    
    const axiosPrivate = useAxiosPrivate();
    
    
    useEffect(() => {
        
        let isMounted = true;
        const controller = new AbortController();
        const pickedTag = [];
        const getCategory = async () => {
            try {
                const response = await axiosPrivate.get('/category-child', {
                    signal: controller.signal,
                });
                const handledCategory = [];
                    response.data.category.map(item => {
                        if (oldItem.categoryId !== item._id) {
                            handledCategory.push({
                                label: item.name + ' (' + item.parentName + ')',
                                value: item._id,
                            });
                        }  
                        // else {
                        //     //setProduct({...product, categoryName: item.name + " (" + item.parentName + ")"})
                        // }        
                    }),
                isMounted && setCategory(handledCategory);
            } catch (err) {
                console.log(err);
            }
        };

        const getTags = async () => {
            try {
                const response = await axiosPrivate.get('/get-all-tag', {
                    signal: controller.signal,
                });
        
                const handledTag = [];
                response.data.map(async (item) => {
                    let include = false;
                    oldItem.tag.map((tag) => {
                        if( item._id === tag ) {
                            include = true;
                            const newTag = {tagName: item.name, tagId: item._id};

                            
                            pickedTag.push(newTag)
                        }
                    })
                    if( !include )
                        handledTag.push({label: item.name, value: item._id});
                }),
                
                isMounted && setTag(handledTag);
                //console.log({pickedTag})
                setProduct({
                    ...product, 
                    tag: pickedTag
                })
            } catch (err) {
                console.log(err.response.data);
            }   
        };


        const getData = (callBack) => {
                getTags();
                getCategory();
                callBack();
        }
        getData(() => {
            setProduct({...product, tag: pickedTag})
        })
        
        return () => {
        isMounted = false;
        controller.abort();
        };
    }, [])

    const [category, setCategory] = useState([]);
    const [tag, setTag] = useState([]);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [tagOpen, setTagOpen] = useState(false);

    const removeOldImage = (id, onChange) => {
        const newImageArray = product.oldImage.filter(image => image._id !== id);
        setProduct({...product, oldImage:newImageArray });
        onChange(newImageArray.length + images.length);
    }

    const removeNewImage = (path, onChange) => {
        const newImageArray = images.filter(image => image !== path);
        setImages(newImageArray);
        onChange(product.oldImage.length + newImageArray.length);
    }

    const handleChange = (e, prop)=>{
        setProduct({
            ...product, 
            [prop] : e.nativeEvent.text
        });

        //console.log(product)
    }

    const handlePickCategory = (item)=>{
        //console.log(item)
        setProduct({
            ...product, 
            categoryId: item.value,
            categoryName: item.label
        });

        //console.log(product)
    }

    const handlePickTag = (val, onChange)=>{
        // add pick tag
        const newTag = {tagName: val.label, tagId: val.value};
        const newTagArray = [...product.tag, newTag];
        onChange(product.tag.length + 1);
        setProduct({
            ...product, 
            tag: newTagArray
        });

        // remove picked tag
        const newTagList = tag.filter((tag) => tag.value !== newTag.tagId);
        setTag(newTagList);
    }

    const handleUnpickTag = (val, onChange) => {
        // remove from picked tag
        const newProductTag = product.tag.filter(tag => tag.tagId !== val);
        const unpickedTag = product.tag.find(tag => tag.tagId === val);
        //console.log(newProductTag, unpickedTag);
        setProduct({...product, tag: newProductTag});
        // add unpick tag
        onChange(product.tag.length - 1);
        setTag([...tag, {label: unpickedTag.tagName, value: unpickedTag.tagId}]);
        //console.log(product.tag, tag);
    };

    // image handle
    const [images, setImages] = useState([]);

    const checkReadImagePermission = onchange => {
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
                        onchange(product.oldImage.length + images.length + 1);
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


    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    //post
    async function handleSubmits(data) {
        setLoading(true);
        const formData = new FormData();
        images.map(item => {
            formData.append('imageProduct', {
                name: new Date() + 'imageProduct',
                uri: item,
                type: 'image/jpg',
            });
        });
        formData.append('categoryId', product.categoryId);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('material', data.materialDescription);
        formData.append('care', data.careDescription);
        formData.append('description', data.description);
        product.tag.map(item => {
            formData.append('tag', item.tagId);
        });
        product.oldImage.map(item => {
            formData.append('oldImage', item.public_id);
        }),
        console.log('form data: ', formData._parts);
        try {
            const response = await axiosPrivate.put(`/put-update-product/${oldItem._id}`, formData, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            console.log('success', JSON.stringify(response.data));
            setTitle('Success');
            setMessage(`Product with Name: ${data.name} has been updated`);
            console.log(message)
            setLoading(false);
        } catch (err) {
            console.log(err)
            //console.log('err', err.response.data);
            setTitle('Error');
            setMessage(err.response.data.error);
            setLoading(false);
        } finally {
            setVisible(true);
            console.log({message});
        }
    }
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <Message
                visible={visible}
                title={title}
                clickCancel={() => {
                    if (title === 'Success') {
                    props.navigation.goBack();
                    } else {
                    setVisible(false);
                    }
                }}
                message={message}
            />
{/* header */}
            <HeaderMin text={'Edit item'} onPress={()=>props.navigation.goBack()}/>
{/* body */}
            <View style={styles.body}>
                <KeyboardAvoidingView style={{flex: 1}}>
                    <ScrollView overScrollMode='auto' contentContainerStyle={{flexGrow: 1}}>
    {/* image */}
                <Controller
                    name="image"
                    control={control}
                    render={({field: {onChange, value}}) => (
                        <View style={styles.imagePart}>
                            <Text style={styles.bodyText}>Image</Text>
                            <ScrollView horizontal={true}>
                                <View style={styles.imageRow}>
                                    {product.oldImage.map((image) => (
                                        <View key={image._id} style={styles.imageView}>
                                            <TouchableOpacity style={styles.removeButton} hitSlop={10} onPress={() => removeOldImage(image._id, onChange)}>
                                                <IC_Close viewBox={`-3 -3 30 30`}/>                                       
                                            </TouchableOpacity> 
                                            <Image resizeMode='cover' style={{width: '100%', height: '100%'}} source={{uri: image.url}}/>
                                        </View>
                                    ))}
                                    {images.map((image) => (
                                        <View key={image} style={styles.imageView}>
                                            <TouchableOpacity style={styles.removeButton} hitSlop={10} onPress={() => removeNewImage(image, onChange)}>
                                                <IC_Close viewBox={`-3 -3 30 30`}/>                                       
                                            </TouchableOpacity> 
                                            <Image resizeMode='cover' style={{width: '100%', height: '100%'}} source={{uri: image}}/>
                                        </View>
                                    ))}
                                    <TouchableOpacity onPress={() => checkReadImagePermission(onChange)}>
                                        <View style={styles.imageView}>
                                            <IC_AddImage />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                            </ScrollView>
                            {errors?.image && (
                            <Text style={styles.textFailed}>
                                {errors.image.message}
                            </Text>
                            )}
                        </View>
                    )}
                />
    {/* input */}                    
                        <View style={styles.informationPart}>
                            <Text style={styles.bodyText}>Item information</Text>
                            <Controller
                                name="name"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <>
                                        <SingleLine
                                            name="name" 
                                            placeholder={'Name'} 
                                            handleChange={handleChange} 
                                            keyboardType='default'
                                            defaultValue={product.name}
                                            onChangeText={text => onChange(text)}
                                            value={value}
                                        />
                                        {errors?.name && (
                                            <Text style={styles.textFailed}>
                                            {errors.name.message}
                                            </Text>
                                        )}
                                    </>
                                )}
                            />
                            <Controller
                                name="price"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <>
                                        <SingleLine 
                                            name="price" 
                                            placeholder={'Price'} 
                                            handleChange={handleChange} 
                                            keyboardType='number-pad'
                                            defaultValue={product.price}
                                            onChangeText={text => onChange(text)}
                                            value={value}
                                            />
                                            {errors?.price && (
                                                <Text style={styles.textFailed}>
                                                {errors.price.message}
                                                </Text>
                                            )}
                                        </>
                                    )}
                                />
                            <Text style={styles.propText}>Material Description: (max 300 characters)</Text>
                            <Controller
                                name="materialDescription"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <>
                                        <MultiLine 
                                            name="materialDescription" 
                                            handleChange={handleChange} 
                                            keyboardType='default'
                                            defaultValue={product.materialDescription}
                                            onChangeText={text => onChange(text)}
                                            value={value}
                                            />
                                        {errors?.materialDescription && (
                                            <Text style={styles.textFailed}>
                                            {errors.materialDescription.message}
                                            </Text>
                                        )}
                                    </>
                                )}
                            />
                            <Text style={styles.propText}>Care Description: (max 300 characters)</Text>
                            <Controller
                                name="careDescription"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <>
                                        <MultiLine 
                                            name="careDescription" 
                                            handleChange={handleChange} 
                                            keyboardType='default'
                                            defaultValue={product.careDescription}
                                            onChangeText={text => onChange(text)}
                                            value={value}
                                            />
                                            {errors?.careDescription && (
                                                <Text style={styles.textFailed}>
                                                {errors.careDescription.message}
                                                </Text>
                                            )}
                                        </>
                                    )}
                                />
                            <Text style={styles.propText}>Description: (max 300 characters)</Text>
                            <Controller
                                name="description"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <>
                                        <MultiLine 
                                            name="description" 
                                            handleChange={handleChange} 
                                            keyboardType='default'
                                            defaultValue={product.description}
                                            onChangeText={text => onChange(text)}
                                            value={value}
                                        />
                                        {errors?.description && (
                                            <Text style={styles.textFailed}>
                                            {errors.description.message}
                                            </Text>
                                        )}
                                    </>
                                )}
                            />
    {/* category */}
                            <Controller
                                name="categoryId"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <>
                                        <View style={styles.categoryBox}>
                                            <View>
                                                <DropDownPicker
                                                    listMode="MODAL"
                                                    open={categoryOpen}
                                                    placeholder="Category"
                                                    style={styles.categoryDropDown}
                                                    textStyle={styles.dropdownText}
                                                    items={category}
                                                    setOpen={setCategoryOpen}
                                                    modalProps={{
                                                        animationType: "fade"
                                                    }}
                                                    onSelectItem={(item) => handlePickCategory(item)}
                                                />
                                            </View>
                                            <View style={styles.categoryView}>
                                                <Text style={styles.dropdownText}>Chosen category:</Text>
                                                <TagWithoutDelete value={product.categoryName} cancel={false}/>
                                            </View>            
                                        </View>
                                        {errors?.description && (
                                            <Text style={styles.textFailed}>
                                            {errors.description.message}
                                            </Text>
                                        )}
                                            
                                    </>
                                )}
                            />
                                            
    {/* tag */}
                            <Controller
                                name="tag"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <>
                                        <View style={styles.categoryBox}>
                                            <View>
                                                <DropDownPicker
                                                    listMode="MODAL"
                                                    open={tagOpen}
                                                    placeholder="Tags"
                                                    style={styles.categoryDropDown}
                                                    textStyle={styles.dropdownText}
                                                    items={tag}
                                                    setOpen={setTagOpen}
                                                    modalProps={{
                                                        animationType: "fade"
                                                    }}
                                                    onSelectItem={(item) => handlePickTag(item, onChange)}
                                                />
                                            </View>
                                            
                                            <View style={{flex: 1}}>
                                                <Text style={styles.dropdownText}>Chosen tags:</Text>
                                                    <ScrollView horizontal={true}>
                                                        <View style={{flex: 1, flexDirection: 'row' , gap: 10}}>
                                                            {product.tag.map((tag) => (  
                                                                <TagWithoutDelete key={tag.tagId} value={tag.tagName} cancel={true} tagId={tag.tagId} onPress={(val) => handleUnpickTag(val, onChange)}/>
                                                            ))}
                                                        </View>
                                                    </ScrollView>
                                            </View>
                                        </View>
                                        {errors?.tag && (
                                            <Text style={styles.textFailed}>
                                            {errors.tag.message}
                                            </Text>
                                        )}
                                            
                                    </>
                                )}
                            />
                            {/* <View style={{borderTopWidth: 1, borderTopColor: color.PlaceHolder, marginTop: scale(20),}}></View> */}
                            {/* <TouchableOpacity onPress={()=>props.navigation.navigate("EditDetailItem")}>
                                <View style={styles.itemDetailButton}> 
                                    <Text style={styles.propText}>Item detail</Text>
                                    <View style={{marginTop: scale(20), transform: [{ rotate: '180deg'}]}}>
                                        <IC_Backward stroke={color.TitleActive}></IC_Backward>               
                                    </View>
                                </View>                            
                            </TouchableOpacity> */}
                            <View style={styles.button}>
                                <SaveButton
                                    text={'Save'}
                                    onPress={handleSubmit(data => handleSubmits(data))}
                                    loading={loading}/>
                            </View>
                            
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
};

export default EditItemScreen;



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
        fontFamily: FONT_FAMILY.Bold,
        fontSize: 24,
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
        paddingHorizontal: scale(10),
    },
    bodyText: {
        color: color.Body,
        fontFamily: FONT_FAMILY.Bold,
        fontSize: 23,
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
        gap: scale(13),
        paddingHorizontal: scale(10),
    },
    imageView: {
        width: scale(50), 
        height: scale(67), 
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeButton: {
        position: 'absolute', 
        width: scale(20), 
        height: scale(20), 
        alignItems: 'center', 
        justifyContent: 'center',
        zIndex: 1, 
        top: scale(-7), 
        right: scale(-7), 
        borderRadius: 100, 
        backgroundColor: color.Line
    },

    // information
    informationPart: {
        flex: 1,
    },
    propText: {
        color: color.PlaceHolder,
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(16),
        marginLeft: scale(3),
        marginTop: scale(20)
    },

    // category
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
    categoryBox: {
        marginTop: scale(15),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: scale(15),
    },
    categoryView: {
        alignItems: 'flex-start'
    },
    // detail button
    itemDetailButton: {
        paddingBottom: scale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        height: Dimensions.get('screen').height * 0.1,
        alignItems: 'center',
        marginTop: scale(30),
    },
    //fail
    textFailed: {
        paddingLeft: scale(25),
        justifyContent: 'center',
        fontFamily: FONT_FAMILY.Italic,
        fontSize: scale(12),
        color: color.RedSolid,
    },
});