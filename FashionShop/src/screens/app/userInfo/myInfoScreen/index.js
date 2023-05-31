import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import color from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
import {IMG_Logo} from '../../../../assets/images';
import scale from '../../../../constants/responsive';
import {
  IC_BackwardArrow,
  IC_Address,
  IC_Phone,
  IC_Email,
  IC_Password,
} from '../../../../assets/icons';
import {Avatar, Title, Caption} from 'react-native-paper';
import {useState} from 'react';
import SaveButton from '../../../../components/buttons/Save';
import {ScrollView} from 'react-native';

const MyInfoScreen = props => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.viewIcon}>
            <IC_BackwardArrow />
          </TouchableOpacity>

          <View style={styles.avatar}>
            <Avatar.Image
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXU1NT////R0dHz8/Pg4ODc3Nz8/PzV1dXw8PDt7e35+fnj4+P29vbv7+/n5+fd3d10rjpNAAAEeUlEQVR4nO2d2ZqqMBCEoQFZxfd/20OGYeQoqGB6SVL/pVfUl6S7s3SZZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHASWtD+EAaI6qof26ZwNO3YV3VEQimrxqLLH+mKscoiEElZ2Vye1C1cmjJwkVS1+/J+RbZVwBrL4Y28maHU/tBzUPm89vboyvDGkarPxu9vHEObq/X1kD7Htdb+6ANQ+S6+bHEJZ6pSe0Kfow1DItXHVuCaoQ5BY3Vmhi5cKu3PfwuVX+hzWF+M1H8pMM970xI9CLQt8espOmN4olZeBOa52XBTfxNF11ysljfn8+Ajg7aUTU5XMluYrG78RJkFg1tGb4twxt5SpOPbpddcrc1TX4nijrGUQf7i6MJgaxD9hpkZU8GGPj90+pzO0iByDKGpQWRYhQ5DK9F/IJ0xE06958IFO7Wb33LmjpnChifOOIzEGmrYFDZGpinXJJ2mqba0Ga5I6rARTUdGhaO2OAcVjAoLCwuRpSZdMFGb1owC89xCRuQMNDZCjY+D/H16bXnTMuQMpVMw1V+IXo9JnzFQfDPWbA4DdRtrOjSREBNQyHOCsWDgJCMBhfHP0vhjafz5MPqaJv66NLuxKrxpy8tS2B/Gv8dP4JyG9azNgsIEzkvjP/NO4N4i+rsnxvtDbWELbHfAdt5FRX+Pn8BbjPjf0yTwJir+d20JvE2M/32p/wMpA0dQj3h+560tZ4Po3+on0G8Rf89MCn1P8feuJdB/6EeiZYEJ9AEn0MvtLD++68c3L3DiK08F7Y//kNO+GNof/in1aW+TUIYwi9+fZoJuBz2GbiGEmDX1YZ+owIbwB/rY6yu08bsTvV9b9uO5d92frd01dM+9H5xvYrPhm9jE4Zv4i/O+LBfvy2s7ls77Uvuj/EMUs4EpAAAAALI5ydcLf79EwbTzu41tMXTrXcalG4p2vNXBF6Y7ZuWr8jto23Kq+xdm5avxbPogjFkfmOQdeR1dBCaSqDpx1laFE3uoP3fqPVi/lPmF+vNPwLoANB45Q9zUaPzc7ajX/Ba2/ef9PDgxe0FDla83mJ3NYYz9xdA3XvNbmPOfp5vvjoSLrcsolu4uG11dM0zdznYWI1vjk5W2p4yvxdJEgyWnwEmitrgsAdcIZtMI/bXI7Bnh0I2oXv6x4x2qe0Zer7YFxSfDnr3099B79s0cRu9oBVRm35Y1SiWqzCKcUVmKzBZY/6PRqieSKO4opAxeW5pnxOMpWw/+HuK9+ZJhZkY42IilwjvCSVF+CIUHUWEIhQdRYwhFB1E8kM5IhlMVgXkuJ1Cu5P4fMZd9Vg+6V4h5gejEGYdQrBHcFz4itE9Um6Ri01R6V7FGZoehN0mFoqlKxbYgU7kpCpRJ+nq5wiGRLzSXochCVKq6FwSqb9FDxGckjhVl7ir2EPCP0sz3Dv6cz2tQ/h5+C3PZo+5n+G3odZOFwPZC4OL+NezX+uxvL97B/jZDte52sNfeUAiFUAiFAgrjzxa620OBDWL8NY1+XXr0g/8BrMpHSulajwYAAAAASUVORK5CYII=',
              }}
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
              <IC_Phone style={styles.iconPhone} />
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
            <SaveButton
              text={'Edit Profile'}
              onPress={() => props.navigation.navigate('EditMyInfoScreen')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  header: {
    flex: 0.3,
    backgroundColor: color.TitleActive,
  },
  viewIcon: {
    marginLeft: scale(26),
    width: scale(40),
    height: scale(30),
    marginTop: scale(22),
    alignItems: 'center',
  },
  avatar: {
    top: scale(50),
    alignSelf: 'center',
  },
  body: {
    marginTop: scale(30),
    flex: 0.7,
    alignItems: 'center',
  },
  icon: {
    marginTop: scale(33),
    marginLeft: scale(5),
  },
  icon1: {
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
    marginTop: scale(27),
    marginLeft: scale(5),
  },
  inputText: {
    color: color.TitleActive,
    fontSize: 16,
    marginTop: scale(-17),
    marginLeft: scale(25),
  },
  inputText2: {
    color: color.TitleActive,
    fontSize: 16,
    marginTop: scale(-19),
    marginLeft: scale(25),
  },

  buttonSignIn: {
    marginTop: scale(61),
  },
});
