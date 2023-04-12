import { StyleSheet, Text,ScrollView, View } from 'react-native'
import React, {useMemo, useState} from 'react'
import scale from '../../../../constants/responsive'
import color from '../../../../constants/color'
import Custom_UnderlineButtonMenu from './Custom_UnderlineButtonMenu'
import FONT_FAMILY from '../../../../constants/fonts'

const Custom_CategoryScrollView = () => {
    const itemList = useMemo(
        () => ['WOMEN', 'MAN'],
        [],
      );
    const [tab, setTab] = useState(itemList[0]);
  return (
    <ScrollView contentContainerStyle={{ horizontal: true}} scrollEnabled={true}>
      <View style={styles.categoryView}>
        {itemList.map(item => (
          <View key={item}>
            <Custom_UnderlineButtonMenu
              isChoosing={tab === item}
              onPress={() => setTab(item)}
              textStyle={styles.categoryText(tab === item)}>
              {item}
            </Custom_UnderlineButtonMenu>
          </View>
        ))}
      </View>
    </ScrollView>

  )
}

export default Custom_CategoryScrollView

const styles = StyleSheet.create({
      categoryView: {
        flexDirection: 'row',
        height:scale(40),
        marginTop:scale(15),
      },
      categoryText: isChoosing => ({
        color: isChoosing ? color.TitleActive : color.PlaceHolder,
        fontSize: scale(17),
        fontFamily: FONT_FAMILY.Regular,
      }),
    
})