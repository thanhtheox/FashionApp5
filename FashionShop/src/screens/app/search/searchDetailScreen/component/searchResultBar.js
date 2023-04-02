import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import scale from '../../../../../constants/responsive';
  import color from '../../../../../constants/color';
  import {IC_Delete, IC_DownSolid, IC_Filter, IC_Search} from '../../../../../assets/icons';
  import FONT_FAMILY from '../../../../../constants/fonts';
  
  const SearchResultBar = () => {
    const [searchContent, setSearchContent] = useState('');
    return (
      <View style={styles.container}>
        
        <TextInput
          ref={input => {
            this.textInput = input;
          }}
          onChangeText={text => setSearchContent(text)}
          selectionColor={color.GraySolid}
          placeholder="Search"
          placeholderTextColor={color.GraySolid}
          style={{
            height: 42,
            color: color.TitleActive,
            top: scale(2),
            width: scale(280),
          }}
        />
        <TouchableOpacity
          onPress={() => setSearchContent('') & this.textInput.clear()}>
          <IC_Delete marginRight={scale(10)} />
        </TouchableOpacity>
        <IC_Search marginRight={scale(20)} />
        <View style={styles.resultSum}>
          <Text style={styles.sum}>8 RESULT OF DRESS</Text>
          <View style={styles.filterBoder}>
            <TouchableOpacity>
              <IC_Filter fill = '#DD8560'/>
            </TouchableOpacity>
          </View>
          <View style={styles.newTag}>
            <Text style={styles.new}>New</Text>
            <TouchableOpacity>
              <IC_DownSolid style={styles.iconDown}/>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    );
  };
  
  export default SearchResultBar;
  
  const styles = StyleSheet.create({
    container: {
      width: scale(343),
      height: scale(40),
      position: 'absolute',
      marginTop: scale(110),
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      borderBottomColor: color.GraySolid,
      borderBottomWidth: 1,
    },
    resultSum:{
      width: scale(375),
      height: scale(40),
      position: 'absolute',
      //marginTop: scale(134),
      top: scale(60),
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      
    },
    newTag: {
      marginLeft: scale(-130),
      width: scale(72.75),
      height: scale(36),
      backgroundColor: color.AthensGray,
      borderRadius: scale(33),
      justifyContent: 'center',
      alignItems: 'center',
    },
    new: {
      fontWeight: '400',
      marginLeft: scale(-10),
      fontSize: scale(13),     
      color: color.TitleActive,
      fontFamily: FONT_FAMILY.JoseFinSansRegular,
    },
    iconDown: {
      marginLeft: scale(40),
      justifyContent: 'center',
      marginTop: scale(-15),
    },
    filterBoder:{
      marginLeft: scale(180),
      width: scale(36),
      height: scale(36),
      backgroundColor: color.AthensGray,
      borderRadius: scale(180),
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  