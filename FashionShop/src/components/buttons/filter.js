import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    } from 'react-native';
    import React, { useState } from 'react';
    import color from '../../constants/color';
    import scale from '../../constants/responsive';
    import FONT_FAMILY from '../../constants/fonts';
    import { IC_Filter } from '../../assets/icons';
import { useMemo } from 'react';
import { RadioButton } from 'react-native-paper';

const Filter = (props) => {
  
  const [onPress,setOnPress] = useState(false);
    return (
      <View style={styles.container}>
          <View style={styles.filterBorder}>
            <TouchableOpacity onPress={() => setOnPress(onPress === true ? false : true)}>
              <IC_Filter stroke={'#DD8560'} />
            </TouchableOpacity>
          </View>
            {onPress? 
            <View style={styles.filterContainer}>
                <RadioButton.Group
                  onValueChange={(value) => props.onSortChange(value)}
                  value={props.selectedValue}
                >
                  <View>
                    <Text>Lowest to highest</Text>
                    <RadioButton value="lowest" />
                  </View>
                  <View>
                    <Text>Highest to lowest</Text>
                    <RadioButton value="highest" />
                  </View>
                </RadioButton.Group>
            </View>
            : (null)}         
      </View>       
    );
  };
  export default Filter;
  const styles = StyleSheet.create({
    container: {
      width:scale(80),
      // marginLeft:scale(30)
    },
    filterBorder:{
      marginLeft: scale(160),
      width: scale(36),
      height: scale(36),
      backgroundColor: color.AthensGray,
      borderRadius: scale(180),
      justifyContent: 'center',
      alignItems: 'center',
    },
    filterContainer: {
      marginTop:scale(40),
      width: scale(200),
      height: scale(120),
      backgroundColor:color.AthensGray,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex:2,
      position:'absolute',
      borderRadius:scale(20)
    },
    text: {
      fontWeight: '400',
      fontSize: scale(14),
      textAlign: 'center',
      color: color.Primary,
      fontFamily: FONT_FAMILY.JoseFinSansRegular,
    }
})