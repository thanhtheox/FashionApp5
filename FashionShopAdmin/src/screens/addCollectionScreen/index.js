import { Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image , TextInput, ScrollView} from 'react-native'
import React , {useState}from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { IC_Backward } from '../../assets/icons'
import scale from '../../constants/responsive'
import SaveButton from '../../components/buttons/Save'
import { launchImageLibrary } from 'react-native-image-picker'
import ItemProductOfCollection from './components/ProductOfCollection'
import { IMG_AddImage,IMG_Collection, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../assets/images'

data=[
    {id:1,name: 'SAPPOCHE', source: IMG_Collection},
    {id:2,name: 'NAGAMI', source: IMG_ModelFour},
    {id:3,name: 'NONUNO',source: IMG_ModelOne},
    {id:4,name: 'SUMGA',source: IMG_ModelTwo},
    {id:5,name: 'KAKHUKO',source: IMG_ModelThree},
    {id:6,name: 'RAPAMA',source: IMG_ModelFour},
    {id:7,name: 'TAKOYA',source: IMG_ModelOne},
]

const AddCollectionScreen = () => {
    const [text, onChangeText] = useState("");
    const [image,setImage]= useState(null);

    let options={
        savePhotos: true,
        mediaType:'photo',
    }

    const openGallery = async()=>{
        const result = await launchImageLibrary(options);
        setImage(result.assets[0].uri)
    }

  return (
    <SafeAreaView style={styles.container}>
{/* header  */}
        <View style={styles.header}>
            <TouchableOpacity >
                <IC_Backward stroke={color.White}></IC_Backward>
            </TouchableOpacity>
            <View >
                <Text style={styles.textHeader}>Add collection</Text>
            </View>
        </View>

{/* body  */}

        <View style={styles.body}>
            <View style={styles.viewTextTitle}>
                <Text style={styles.textTitle}>Collection information</Text>
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

{/* poster image */}
            <View style={styles.viewAddImage}>
                <View style={styles.viewTextAdd}>
                    <Text style={styles.textAdd}>Poster image</Text>
                </View>
                <View style={styles.viewImageAdd}>
                    <TouchableOpacity style={styles.viewIconAdd} onPress={openGallery}>
                        <Image source={IMG_AddImage} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <View style={styles.viewImage}>
                        <Image source={{uri:image}} style={styles.image}></Image>
                    </View>
                </View>
            </View>

{/* product  */}
            <View style={styles.viewProduct}>
                <ScrollView>
                {data.map((item,index)=>(
                  <ItemProductOfCollection
                  key={index}
                  number={index+1}
                  name={item.name}
                  source={item.source}
                  />

                ))}
                </ScrollView>
            </View>

{/* button */}
            <View style={styles.button}>
                <SaveButton text={'Add collection'}></SaveButton>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default AddCollectionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
//header
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
//body
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

//add image
    viewAddImage:{
        marginTop: scale(10),
        height: '15%',
        width: '90%',
        alignSelf: 'center'
    },
    viewTextAdd:{
        height: '30%',
        justifyContent:'center',
    },
    textAdd:{
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize:16,
        fontWeight: '500',
    },
    viewImageAdd:{
        height: '70%',
        flexDirection: 'row',
    },
    viewImage:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    image:{
        width: '75%',
        height: '75%',
    },
    viewIconAdd:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    icon:{
        width: '50%',
        height: '50%'
    },

// product 
    viewProduct:{
        marginTop: scale(10),
        height: '45%',
    },

//button
    button:{
        // justifyContent: 'flex-end',
        marginTop: scale(20),
        alignItems: 'center',
    },
})