import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'

//component
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import scale from '../../constants/responsive'
import { IC_Backward } from '../../assets/icons'
import UserItem from './component/userItem'
import { IMG_Collection, IMG_Logo, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../assets/images'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const ListOfUserScreen = (props) => {


 const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/all-user', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setData(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                <IC_Backward stroke={color.White}></IC_Backward>
            </TouchableOpacity>
            <View >
                <Text style={styles.textHeader}>List of users</Text>
            </View>
        </View>

        <View style={styles.body}>
            <ScrollView>
                {data.map((item,index)=>(
                    <UserItem 
                     number={index+1}
                     name={item.firstName + " "+ item.lastName} 
                     phone={item.phoneNumber} 
                     date={item.date} 
                     key={item._id}
                     source={item.avatarImage}
                     onPress={()=>props.navigation.navigate("EditUser",{data: item})}
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
        fontFamily: FONT_FAMILY.Bold,
        fontSize: 24,
    },
    body:{
        flex: 0.9,
        backgroundColor: color.White,
    }
})