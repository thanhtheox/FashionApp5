import { StyleSheet, Text,ScrollView, View } from 'react-native'
import React, {useMemo, useState} from 'react'
import scale from '../../../../constants/responsive'
import color from '../../../../constants/color'
import Custom_UnderlineButton from '../../home/homeScreen/components/Custom_UnderlineButton'
import FONT_FAMILY from '../../../../constants/fonts'

const Custom_CategoryScrollView = () => {
    const itemList = useMemo(
        () => ['WOMEN', 'MAN', 'KIDS'],
        [],
      );
    const [tab, setTab] = useState(itemList[0]);
  return (
    <ScrollView contentContainerStyle={{ horizontal: true}} scrollEnabled={true}>
      <View style={styles.categoryView}>
        {itemList.map(item => (
          <View key={item}>
            <Custom_UnderlineButton
              isChoosing={tab === item}
              onPress={() => setTab(item)}
              textStyle={styles.categoryText(tab === item)}>
              {item}
            </Custom_UnderlineButton>
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
        justifyContent:'space-between',
        backgroundColor:color.Background,
      },
      categoryText: isChoosing => ({
        color: isChoosing ? color.TitleActive : color.PlaceHolder,
        fontSize: scale(17),
        fontFamily: FONT_FAMILY.Regular,
      }),
    
})