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
  import { IC_Delete, IC_Search } from '../../../../../assets/icons';

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
    
  });
  