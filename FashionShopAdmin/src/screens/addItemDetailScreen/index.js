import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    Dimensions, 
    TextInput, 
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { IC_Backward } from '../../assets/icons';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import SingleLine from '../../components/inputTexts/singleLine';
import MultiLine from '../../components/inputTexts/multiLine';
import DropDownPicker from 'react-native-dropdown-picker';
import TagWithoutDelete from '../../components/tags/tagWithoutDelete';
import Message from '../../components/alearts.js/messageOnly';
import { DataTable } from 'react-native-paper';
import SaveButton from '../../components/buttons/Save';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import LoadingModal from '../../components/loadingModal/loadingModal';



const AddItemDetailScreen = (props) => {
    console.log('=============================Item detail Screen==============================');
    const product = props.route.params.data;
    const init = {
        colorId: '',
        productId: product._id,
        sizeQuantity : []
    }
    const axiosPrivate = useAxiosPrivate();
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getColors = async () => {
            try {
                const response = await axiosPrivate.get(`/get-all-color`, {
                    signal: controller.signal
                });
                const handledColor = [];
                await Promise.all(
                    response.data.map((item) => {
                        handledColor.push({label: item.name, value: item._id});
                    })
                )
                isMounted && setColors(handledColor);
            } 
            catch (err) {
                console.log(err.response.data);
            }
        }

        const getDetails = async () => {
            try {
                const response = await axiosPrivate.get(`/get-detail-by-productId/${product._id}`, {
                    signal: controller.signal
                });
                // const handledColor = [];
                // await Promise.all(
                //     response.data.map((item) => {
                //         handledColor.push({label: item.name, value: item._id});
                //     })
                // )
                // isMounted && setColors(handledColor);
                console.log('detail: ', response.data);
            } 
            catch (err) {
                console.log(err.response.data);
            }
        }

        const getSizes = async () => {
            try {
                const response = await axiosPrivate.get(`/get-all-size`, {
                    signal: controller.signal
                });
                isMounted && setSize(response.data);
            }
            catch (err) {
                console.log(err.response.data)
            }
        }

        getDetails();
        getColors();
        getSizes();

        return () => {
            isMounted = false;
            controller.abort();
        }
    },[])
    const [size, setSize] = useState([]);
    const qty = [
        {color: 'red', S: 20, M: 15, L: 3},
        {color: 'blue', S: 17, M: 15, L: 3},
        {color: 'green', S: 20, M: 15, L: 3}
    ]
    const [colors, setColors] = useState([]);
    const [productDetail, setProductDetail] = useState(init)
    const [colorOpen, setColorOpen] = useState(false);


    const handlePickColor = (val)=>{
        setProductDetail({...productDetail, colorId: val.value, colorName: val.label})
    }

    const handleAddQuantity = ( sizeId, quantity ) => {
        // validate quantity here
        // process
        const sizeQuantity = productDetail.sizeQuantity;
        const isExistSize = sizeQuantity.some(element => {
                if ( element.sizeId === sizeId)
                    return true;
                return false;
            })
        if(isExistSize) {
            const objIndex = sizeQuantity.findIndex((obj => obj.sizeId === sizeId));
            sizeQuantity[objIndex].quantity = quantity;
        }
        else {
            sizeQuantity.push({sizeId: sizeId, quantity: quantity});   
        }
        setProductDetail({...productDetail, sizeQuantity});
        console.log(productDetail);
    }

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const addItemDetail = async () => {
        try{
            setLoading(true);
            const response = await axiosPrivate.post('/post-create-multiple-detail',
            JSON.stringify({ 
                colorId: productDetail.colorId,
                productId: productDetail.productId,
                sizeQuantity: productDetail.sizeQuantity
            }),
            {
                headers:{'Content-Type': 'application/json'},
                withCredentials: true
            });
            console.log("success", response.data);
            setTitle("Success");
            setMessage(`New detail of product ${product.name} has been created`)
            setLoading(false);
        }
        catch(err){
            console.log("err", err.response.data);
            setTitle('Error')
            setMessage(err.response.data.error)
            setLoading(false);
        }
        finally{
            setVisible(true)
        }       
    }
    return (
        <SafeAreaView style={styles.container}>
            <LoadingModal modalVisible={loading}/>
            <Message 
                visible={visible} 
                title={title} 
                clickCancel={() => {
                        setVisible(false);
                }} 
                message={message}
            /> 
{/* header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backwardButton} onPress={()=>props.navigation.goBack()} >
                    <IC_Backward stroke={color.White}></IC_Backward>
                </TouchableOpacity>
                <View >
                    <Text style={styles.textHeader}>Add item detail</Text>
                </View>
            </View>
{/* body */}
            <View style={styles.body}>
                <KeyboardAvoidingView style={{flex: 1}}>
                    <ScrollView overScrollMode='auto' contentContainerStyle={{flexGrow: 1}}>
    {/* info */}                    
                        <View style={styles.informationPart}>
                            <Text style={styles.bodyText}>Item information</Text>
                            <Text style={[styles.propText, {marginTop: scale(20), borderBottomWidth: 0.5}]}>{product.name}</Text>
                            <Text style={[styles.propText, {marginTop: scale(20), borderBottomWidth: 0.5}]}>{product.price}</Text>
    {/* category */}
                            <Text style={[styles.propText, {marginTop: scale(20)}]}>Category: Dress(Women)</Text>
    {/* color */}
                            <View style={styles.categoryBox}>
                                <View>
                                    <DropDownPicker
                                        listMode="MODAL"
                                        open={colorOpen}
                                        placeholder="Choose color"
                                        style={styles.categoryDropDown}
                                        textStyle={styles.dropdownText}
                                        items={colors}
                                        setOpen={setColorOpen}
                                        modalProps={{
                                            animationType: "fade"
                                        }}
                                        onSelectItem={(item) => handlePickColor(item)}
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={styles.dropdownText}>Chosen colors:</Text>
                                        <ScrollView horizontal={true}>
                                            <View style={{flex: 1, flexDirection: 'row' , gap: 10}}>
                                                {productDetail.colorName ? (  
                                                    <TagWithoutDelete key={productDetail.colorId} value={productDetail.colorName} cancel={false} />
                                                ):(null)}
                                            </View>
                                        </ScrollView>
                                </View>            
                            </View>
                        </View>
    {/* Quantities */}
                        <View style={styles.quantityView}>
                                <Text style={styles.bodyText}>Quantities</Text>
                                {size.map((size) => (
                                    <View style={styles.sizeView} key={size._id}>
                                        <View style={{minWidth: scale(50), maxWidth: scale(60)}}>
                                            <Text style={styles.propText}>{size.name}</Text>
                                        </View>
                                        <TextInput 
                                            style={styles.sizeInputBox} 
                                            cursorColor={'#000'} 
                                            keyboardType='numeric'
                                            onChangeText={(text) => handleAddQuantity(size._id, text)}
                                        />
                                </View>
                                ))}
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
                            <SaveButton text={'Add item detail'} onPress={()=>addItemDetail()}></SaveButton>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
};

export default AddItemDetailScreen;

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
        fontWeight: '600',
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
        color: color.TitleActive,
        fontSize: scale(13),
    },
    text: {
        fontWeight: '600', 
        fontSize: 18, 
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