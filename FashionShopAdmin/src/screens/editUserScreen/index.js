import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import scale from '../../constants/responsive'
import { IC_Backward } from '../../assets/icons'
import { ScrollView } from 'react-native-gesture-handler'
import { IMG_Collection, IMG_Logo, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../assets/images'
import SaveButton from '../../components/buttons/Save'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';


const EditUserScreen = (props) => {
    const { data } = props.route.params;
    console.log(data);

    const axiosPrivate = useAxiosPrivate();
    const [address, setAddress] = useState({});
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getAddress = async () => {
            try {
                const response = await axiosPrivate.get(`/get-address-by-user-id/${data._id}`, {
                    signal: controller.signal
                });
                isMounted && setAddress(response.data);
                console.log(response.data)
            } 
            catch (err) {
                console.log(err.response.data);
            }
        }
    
        getAddress();
    
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                <IC_Backward stroke={color.White}></IC_Backward>
            </TouchableOpacity>
            <View >
                <Text style={styles.textHeader}>Edit users</Text>
            </View>
        </View>

        <ScrollView style={styles.body}>
            <View style={styles.viewImage}>
                <Image style={styles.image} resizeMode='center' source={{uri:data.profileImage}}/>
            </View>

{/* name */}
                <View style={styles.viewInfo}>
                    <View style={styles.viewLabel}>
                        <Text style={styles.textLabel}>Name: </Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>{data.firstName+ " "+ data.lastName}</Text>
                    </View>
                </View>
{/* email */}
                <View style={styles.viewInfo}>
                    <View style={styles.viewLabel}>
                        <Text style={styles.textLabel}>Email: </Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>{data.email}</Text>
                    </View>
                </View>

 {/* phone */}
                <View style={styles.viewInfo}>
                    <View style={styles.viewLabel}>
                        <Text style={styles.textLabel}>Phone: </Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>{data.phoneNumber}</Text>
                    </View>
                </View>
{/* address */}
                <View style={styles.viewInfo}>
                    <View style={styles.viewLabel}>
                        <Text style={styles.textLabel}>Address: </Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>{address.address}</Text>
                    </View>
                </View>
{/* button           */}
                <View style={styles.button}>
                    <SaveButton text={'Delete user'} onPress={()=>props.navigation.navigate("ListUser")}></SaveButton>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default EditUserScreen

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
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 24,
        fontWeight: '700',
    },
// BODY
    body:{
        flex: 0.9,
        backgroundColor: color.White,
    },
//IMAGE
    viewImage:{
        marginTop: scale(10),
        height: scale(150),
        alignItems:'center'
    },
    image:{
        width:scale(150),
        height:scale(150),
        borderRadius: 150
    },
//info
    viewInfo:{
        marginTop: scale(10),
        flexDirection: 'row',
        alignSelf:'center'
    },
    viewLabel:{
        height: scale(30),
        // borderWidth: 1,
        width: '25%',
        justifyContent:'center'
    },
    viewText:{
        // borderWidth: 1,
        width: '60%',
        justifyContent:'center'
    },
    textLabel:{
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 20,
        color: color.Secondary,
        fontWeight: '700'
    },
    text:{
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 18,
        color: color.TitleActive,
        fontWeight: '700'
    },
    //button
    button:{
        marginTop: scale(20),
        alignItems: 'center'
    },

})