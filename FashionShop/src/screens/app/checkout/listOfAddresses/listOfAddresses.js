import { ScrollView, StyleSheet, Text, View,SafeAreaView ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { IC_Forward, IC_Plus,IC_Edit } from '../../../../assets/icons';
import color from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
import scale from '../../../../constants/responsive';
import { useSelector } from 'react-redux';
import { LineBottom } from '../../../../components/footer/images';

const ListOfAddressesScreen = (props) => {
    const {data} = props.route.params;
    const user = useSelector(state => state.user);
    const {userItems} = user;
    const userInfo = userItems.user;
  return (
    <SafeAreaView style={styles.container}>
        <View style={{alignSelf:'center',alignItems:'center',paddingHorizontal:scale(10)}}>
            <Text style={{fontSize: 18,
        fontWeight: '400',
        fontFamily: FONT_FAMILY.Regular,
        letterSpacing: 4,textAlign:'center',color:color.TitleActive,marginTop:scale(20)}}>
                LIST OF ADDRESSES
            </Text>
            <Image source={LineBottom} style={{alignSelf: 'center',marginBottom:scale(20)}}/>
        </View>
      <ScrollView horizontal={false}>
      {data.map(item => 
        <TouchableOpacity style={styles.bodyTextBox} key={item._id} 
      //   onPress={() => props.navigation.navigate('CheckOutScreen',{
      //     data:item,
      // })}
      >
            <View style={{flexDirection:'column', width:'80%'}}>
                <Text style={styles.name}>{userInfo.firstName + ' ' + userInfo.lastName}</Text>
                <Text numberOfLines={2} style={styles.bodyText}>
                    {item.streetAndNumber+ ', '+ item.ward+ ', '+ item.district+ ', '+ item.city}
                </Text>
                <Text style={styles.bodyText}>{userInfo.phoneNumber}</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('EditAddressScreen',{
                data:item,
            })}>
              <IC_Edit />
            </TouchableOpacity>
        </TouchableOpacity>
        )}    
      </ScrollView>
      <TouchableOpacity style={styles.addShipping} onPress={() => props.navigation.navigate('AddNewAddressScreen')}>
        <Text style={styles.addShippingText}>ADD SHIPPING ADDRESS</Text>
        <IC_Plus style = {styles.PlusPosition} stroke= {color.OffWhite}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ListOfAddressesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White,
    },
    bodyTextBox: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        borderBottomWidth:1,
        width:'100%',
        paddingHorizontal:scale(10)
    },
    name: {
        marginTop: scale(10),
        color: color.TitleActive,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
    },
    bodyText: {
        marginTop: scale(10),
        color: color.TitleActive,
        fontSize: 16,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
    },
    PlusPosition: {
        position: 'absolute',
        marginLeft: scale(300),
        justifyContent: 'center',
      },
      addShipping: {
        borderColor: color.White,
        width: scale(342),
        height: scale(48),
        backgroundColor: color.TitleActive,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: scale(30),
        marginVertical: scale(20),
      },
      addShippingText: {
        color: color.OffWhite,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
        fontWeight: 400,
        marginLeft: scale(20),
      },
})