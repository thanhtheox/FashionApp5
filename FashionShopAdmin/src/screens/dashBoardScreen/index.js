import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Platform, UIManager,LayoutAnimation, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import scale from '../../constants/responsive'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import SaveButton from '../../components/buttons/Save'
import { IC_Down, IC_Forward , IC_Up} from '../../assets/icons'
import useLogout from '../../hooks/useLogout'



if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}


const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  return (
    <>
      <TouchableOpacity onPress={toggleOpen} style={styles.viewList} activeOpacity={0.6}>
        {title}
        <View style={styles.viewIcon}>
        {!isOpen?<IC_Down></IC_Down>:<IC_Up></IC_Up>}
        </View>
      </TouchableOpacity>
      <View style={[styles.list,!isOpen ? styles.hidden : undefined]}>
        {children}
      </View>
    </>
  );
};
const DashBoardScreen = (props) => {

  const logout = useLogout();

  const signOut = async () => {
    await logout();
  }

  const title=(
    <View style={styles.viewTextList}>
    <Text style={styles.textList}>Product</Text>
    </View>
  )
  const body = (
    <View >
      <TouchableOpacity style={styles.viewListBody} onPress={()=>props.navigation.navigate("ListItem")}>
        <View style={styles.viewTextList}>
          <Text style={styles.textListBody}>Item</Text>
        </View>
        <View style={styles.viewIcon}>
            <IC_Forward stroke={color.White}></IC_Forward>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewListBody} onPress={()=>props.navigation.navigate("ListColorAndSize")}>
        <View style={styles.viewTextList}>
          <Text style={styles.textListBody}>Color & Size</Text>
        </View>
        <View style={styles.viewIcon}>
            <IC_Forward stroke={color.White}></IC_Forward>
        </View>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewText}>
          <View style={styles.viewTitleText}>
            <Text style={styles.textTile}>Dashboard</Text>
          </View>
          <View style={styles.viewTextLabel}>
            <Text style={styles.textLabel}>Hello, Admin!</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView>

{/* product */}
            <Accordion title={title} >
              {body}
            </Accordion>


{/* USER */}
            <TouchableOpacity style={styles.viewList} onPress={()=>props.navigation.navigate("ListUser")}>
                <View style={styles.viewTextList}>
                  <Text style={styles.textList}>User</Text>
                </View>
                <View style={styles.viewIcon}>
                  <IC_Forward></IC_Forward>
                </View>
            </TouchableOpacity>

{/* tag*/}      
            <TouchableOpacity style={styles.viewList} onPress={()=>props.navigation.navigate("ListTag")}>
              <View style={styles.viewTextList}>
              <Text style={styles.textList}>Tag</Text>
              </View>
              <View style={styles.viewIcon}>
                <IC_Forward></IC_Forward>
              </View>
            </TouchableOpacity>

{/* Order */}
            <TouchableOpacity style={styles.viewList} onPress={()=>props.navigation.navigate("ListOrder")}>
              <View style={styles.viewTextList}>
              <Text style={styles.textList}>Order</Text>
              </View>
              <View style={styles.viewIcon}>
                <IC_Forward></IC_Forward>
              </View>
            </TouchableOpacity>

{/* category */}
            <TouchableOpacity style={styles.viewList} onPress={()=>props.navigation.navigate("ListCategory")}>
              <View style={styles.viewTextList}>
              <Text style={styles.textList}>Category</Text>
              </View>
              <View style={styles.viewIcon}>
                <IC_Forward></IC_Forward>
              </View>
            </TouchableOpacity>

{/* collection */}
            <TouchableOpacity style={styles.viewList} onPress={()=>props.navigation.navigate("ListCollection")}>
              <View style={styles.viewTextList}>
              <Text style={styles.textList}>Collection</Text>
              </View>
              <View style={styles.viewIcon}>
                <IC_Forward></IC_Forward>
              </View>
            </TouchableOpacity>

{/* Blog */}
            <TouchableOpacity style={styles.viewList} onPress={()=>props.navigation.navigate("ListBlog")}>
              <View style={styles.viewTextList}>
              <Text style={styles.textList}>Blog</Text>
              </View>
              <View style={styles.viewIcon}>
                <IC_Forward></IC_Forward>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewList} onPress={()=>props.navigation.navigate("Statistics")}>
              <View style={styles.viewTextList}>
              <Text style={styles.textList}>Statistics</Text>
              </View>
              <View style={styles.viewIcon}>
                <IC_Forward></IC_Forward>
              </View>
            </TouchableOpacity>
            <View style={{height: scale(10)}}/>


      <View style={styles.buttonSignOut}>
        <SaveButton text={'Sign Out'} onPress={() => signOut()}></SaveButton>
      </View>
      </ScrollView>
      </View>


    </SafeAreaView>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: color.White,
        flex: 1,
        backgroundColor: color.White,
      },
      header: {
        flex: 0.25,
        backgroundColor: color.TitleActive,
      },
      viewText:{
        marginTop: '20%',
        marginLeft: scale(30),
      },
      viewTitleText: {
        // height: scale(50),
      },
      textTile: {
        color: color.White,
        fontSize: 36,
        fontFamily: FONT_FAMILY.Bold,
      },
      viewTextLabel:{
        marginTop: scale(10),
      },
      textLabel: {
        color: color.White,
        fontSize: 24,
        fontFamily: FONT_FAMILY.Bold,
      },
      body: {
        flex: 0.8,
        backgroundColor: color.White,
      },
      buttonSignOut:{
        marginVertical: scale(10),
        flex: 0.15,
        alignItems: 'center'
        
      },
      ///

      viewList:{
        height: scale(68),
        width:'100%',
        borderBottomWidth: 1,
        flexDirection: 'row',
      },
      viewTextList:{
        justifyContent: 'center',
        width: scale(300),
        marginLeft: scale(20),
      },
      textList:{
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 24,
        color: color.TitleActive,
      },
      viewIcon:{
        alignSelf: 'center',
      },
      hidden: {
        height: 0,
      },
      list: {
        overflow: 'hidden'
      },
      viewListBody:{
        height: scale(48),
        width:'100%',
        borderBottomWidth: 1,
        flexDirection: 'row',
        backgroundColor: color.White,
        opacity: 0.5,
      },
      textListBody:{
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 22,
        color: color.TitleActive,
        marginLeft: scale(20),
        opacity: 1
      },
})