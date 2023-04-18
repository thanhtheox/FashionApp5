import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import scale from '../../constants/responsive'
import { IC_Backward } from '../../assets/icons'
import { ScrollView } from 'react-native-gesture-handler'
import UserItem from './component/userItem'
import { IMG_Collection, IMG_Logo, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../assets/images'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const data=[
    {id:1, name: "Thu hien", phone: "0336708086", date: "03/11/2023",source:IMG_Collection},
    {id:2, name: "khoi mai", phone: "0341283402", date: "03/11/2023",source:IMG_ModelFour},
    {id:3, name: "mai khoi", phone: "0336708036", date: "03/11/2023",source:IMG_ModelOne},
    {id:4, name: "tri dao", phone: "0336713086", date: "03/11/2023",source:IMG_ModelThree},
    {id:5, name: "dao tham", phone: "03367133486", date: "03/11/2023",source:IMG_ModelTwo},
    {id:6, name: "thanh thao", phone: "03363428086", date: "03/11/2023",source:IMG_Collection},
    {id:7, name: "anh quoc", phone: "0336701386", date: "03/11/2023",source:IMG_ModelFour},
    {id:8, name: "chinh", phone: "0436708086", date: "03/11/2023",source:IMG_ModelThree},
    {id:9, name: "hehe", phone: "0356708086", date: "03/11/2023",source:IMG_Logo},

];

const ListOfUserScreen = (props) => {


//     const axiosPrivate = useAxiosPrivate();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     let isMounted = true;
//     const controller = new AbortController();

//     const getUsers = async () => {
//       try {
//         const response = await axiosPrivate.get('/get-all-blog', {
//           signal: controller.signal,
//         });
//         console.log(response.data);
//         isMounted && setData(response.data);
//       } catch (err) {
//         console.log(err.response.data);
//       }
//     };

//     getUsers();
//     return () => {
//       isMounted = false;
//       controller.abort();
//     };
//   }, []);


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                <IC_Backward stroke={color.White}></IC_Backward>
            </TouchableOpacity>
            <View >
                <Text style={styles.textHeader}>List users</Text>
            </View>
        </View>

        <View style={styles.body}>
            <ScrollView>
                {data.map((item,index)=>(
                    <UserItem 
                     number={index+1}
                     name={item.name} 
                     phone={item.phone} 
                     date={item.date} 
                     key={item.id}
                     source={item.source}
                     onPress={()=>props.navigation.navigate("EditUser")}
                     />
                ))}

            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default ListOfUserScreen

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
    body:{
        flex: 0.9,
        backgroundColor: color.White,

    }
})