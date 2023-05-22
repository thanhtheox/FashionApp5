import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import React from 'react';
import color from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
import { IMG_Logo } from '../../../../assets/images';
import scale from '../../../../constants/responsive';
import { IC_BackwardArrow, IC_Address, IC_Phone, IC_Email, IC_Password } from '../../../../assets/icons';
import {Avatar, Title, Caption} from 'react-native-paper';
import { useState } from 'react';
import SaveButton from '../../../../components/buttons/Save';
import { ScrollView } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-crop-picker';

const [image, setImage] = useState('https://drive.google.com/file/d/1Snr93Bao8zv0tBTNONR7T2NpRs_gTtkz/view?usp=share_link');
      const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          compressImageMaxWidth: scale(300),
          compressImageMaxHeight: scale(300),
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: scale(300),
          height: scale(300),
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
      renderInner = () => (
        <View style={stylePanel.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={stylePanel.panelTitle}>Tải ảnh</Text>
            <Text style={stylePanel.panelSubtitle}>Chọn ảnh đại diện của bạn</Text>
          </View>
          <TouchableOpacity style={stylePanel.panelButton} onPress={takePhotoFromCamera}>
            <Text style={stylePanel.panelButtonTitle}>Chụp ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylePanel.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={stylePanel.panelButtonTitle}>Chọn từ thư viện</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylePanel.panelButton}
            onPress={() => this.bs.current.snapTo(1)}>
            <Text style={stylePanel.panelButtonTitle}>Thoát</Text>
          </TouchableOpacity>
        </View>
      );
      renderHeader = () => (
        <View style={stylePanel.header}>
          <View style={stylePanel.panelHeader}>
            <View style={stylePanel.panelHandle} />
          </View>
        </View>
      );
    
      bs = React.createRef();
      fall = new Animated.Value(1);
const MyInfoScreen = props => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <ScrollView>
        <SafeAreaView style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.viewIcon}>
                    <IC_BackwardArrow/>
                </TouchableOpacity>
               
                <View style={styles.avatar}>
                    <Avatar.Image
                        source={IMG_Logo}
                        size={150}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.inputName}>
                    <View style={styles.inputFirstName}>
                        <Text style={styles.inputName1}>Shop</Text>
                    </View>

                    <View style={styles.inputLastName}>
                        <Text style={styles.inputName1}>Fashion</Text>
                    </View>
                </View>
                {/* mail */}
                <View style={styles.inputBox}>
                    <View style={styles.icon}>
                        <IC_Email />
                        <Text style={styles.inputText}>fashionshopapp5@gmail.com</Text>
                    </View>
                    
                </View>
                {/* password */}
                <View style={styles.inputBox}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={handleShowPassword}>
                            <IC_Password />
                        </TouchableOpacity>
                        {showPassword && <Text style={styles.inputText}>FS123456</Text>}
                    </View>
                </View>
                {/* phone number */}
                <View style={styles.inputBox}>
                    <View style={styles.icon1}>
                        <IC_Phone style={styles.iconPhone}/>
                        <Text style={styles.inputText2}>0912345678</Text>
                    </View>
                </View>
                {/* address */}
                <View style={styles.inputBox}>
                    <View style={styles.icon1}>
                        <IC_Address />
                        <Text style={styles.inputText2}>ktx khu B</Text>
                    </View>
                </View>
                <View style={styles.buttonSignIn}>
                    <SaveButton text={'Edit Profile'} />
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
};

export default MyInfoScreen;

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: color.White,
    },
    header: {
        flex: 0.3,
        backgroundColor: color.TitleActive,
      },
    viewIcon: 
    {
        marginLeft: scale(26),
        width: scale(40),
        height: scale(30),
        marginTop: scale(22),
        alignItems: 'center',
    },
    avatar:
    {
        top: scale(50),
        //marginVertical: scale(70),
        alignSelf: 'center',
    },
    body: {
        flex: 0.7,
        alignItems: 'center',
    },
    icon:
    {
        marginTop: scale(33),
        marginLeft: scale(5),
    },
    icon1:
    {
        marginTop: scale(30),
        marginLeft: scale(5),
    },
   
      inputName: {
        flexDirection: 'row',
        marginTop: scale(30),
        width: scale(295),
        height: scale(51),
        justifyContent: 'space-between',
      },
      inputFirstName: {
        borderBottomWidth: 1,
        width: scale(107),
        height: scale(51),
      },
      inputLastName: {
        borderBottomWidth: 1,
        width: scale(180),
        height: scale(51),
      },
      inputBox: {
        marginTop: scale(10),
        width: scale(295),
        height: scale(51),
        borderColor: color.GraySolid,
        borderBottomWidth: 1,
      },
      inputName1: {
        color: color.TitleActive,
        fontSize: 16,
        top: scale(30),
        marginLeft: scale(5),
      },
      inputText: {
        color: color.TitleActive,
        fontSize: 16,
        top: scale(-15),
        marginLeft: scale(25),
      },
      inputText2: {
        color: color.TitleActive,
        fontSize: 16,
        top: scale(-17),
        marginLeft: scale(25),
      },
    
    buttonSignIn: {
        marginTop: scale(61),
      },
});
