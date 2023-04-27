import { StyleSheet, Text, View , SafeAreaView, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IC_Backward } from '../../assets/icons'
import scale from '../../constants/responsive'
import SingleLine from '../../components/inputTexts/singleLine'
import DropDownPicker from 'react-native-dropdown-picker'
import SaveButton from '../../components/buttons/Save'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import Message from '../../components/alearts.js/messageOnly'

const AddCategoryScreen = (props) => {
    const [newCategory, setNewCategory] = useState({
        name: '',
        description: '',
        parentId: ''
    });
    const [parentCategories, setParentCategories] = useState([]);
    const [data, setData] = useState([]);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getCategory = async () => {
            try {
                const response = await axiosPrivate.get('/all-categories', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setData(response.data);
            } 
            catch (err) {
                console.log(err.response.data);
            }
        }

        getCategory();
        return () => {
            isMounted = false;
            controller.abort();
        }
    },[])
    useEffect(() => {
        console.log({data})
        const handleCategory = async () => {
            let parentCat = [{}];
            parentCat = data.filter(item => !item.parentId);
            parentCat = parentCat.map(item => ({
                label: item.name,
                value: item._id
            }))
            parentCat.push({label: "No parent", value: ""});
            
            setParentCategories(parentCat);
        }
        
        handleCategory();
    },[data])
    useEffect(() => {console.log({newCategory})},[newCategory])


    const [tagOpen, setTagOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await axiosPrivate.post('/category',
                JSON.stringify({ name: newCategory.name, parentId: newCategory.parentId, description: newCategory.description }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log("success", JSON.stringify(response.data));
            setTitle('Success');
            setMessage(`New category with Name: ${newCategory.name} and has been created`)
            setLoading(false);
            } 
        catch (err) {
            console.log("err", err.response.data);
            setTitle('Error')
            setMessage(err.response.data.error)
            setLoading(false);
        }
        finally {
            setVisible(true);
        }
    };
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
                        onChangeText={text => setNewCategory({...newCategory, name: text})}
                    />
                </View>
                <View style={styles.categoryBox}>
                    <View >
                        <DropDownPicker
                            // listMode="MODAL"
                            listMode="FLATLIST"
                            open={tagOpen}
                            placeholder="Parent"
                            style={styles.categoryDropDown}
                            textStyle={styles.dropdownText}
                            items={parentCategories}
                            setOpen={setTagOpen}
                            value={newCategory.parentId}
                            onSelectItem={(item) => setNewCategory({...newCategory, parentId: item.value})}
                            dropDownContainerStyle={{borderRadius: 0}}
                            listItemContainerStyle={{backgroundColor: color.White}}
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
                        onChangeText={text => setNewCategory({...newCategory, description: text})}
                    />
                </View>
                <View style={styles.buttonView}>
                    <SaveButton text={'Add category'} onPress={() => handleSubmit()} disabled={!newCategory.name || !newCategory.description}/>
                </View>
            </View>
            <Message
                visible={visible} 
                title={title} 
                clickCancel={() => {
                    if (title === 'Success') {
                        props.navigation.goBack();
                    }
                    else {
                        setVisible(false);
                    }
                }} 
                message={message}
            />
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
        alignSelf: 'flex-start',
        zIndex: 1
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