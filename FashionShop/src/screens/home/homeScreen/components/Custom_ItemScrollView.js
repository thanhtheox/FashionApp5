import { StyleSheet, Text,ScrollView, View } from 'react-native'
import React, {useMemo, useState} from 'react'
import scale from '../../../../constants/responsive'
import color from '../../../../constants/color'
import Custom_UnderlineButton from './Custom_UnderlineButton'
import FONT_FAMILY from '../../../../constants/fonts'

const Custom_ItemScrollView = () => {
    const itemList = useMemo(
        () => ['All', 'Apparel', 'Dress', 'Tshirt', 'Bag'],
        [],
      );
    const [tab, setTab] = useState(itemList[0]);
  return (
    <ScrollView style={styles.scrollViewContainer} scrollEnabled={true}>
      <View style={styles.categoryView}>
        {itemList.map(item => (
          <View style={styles.categoryItem} key={item}>
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

export default Custom_ItemScrollView

const styles = StyleSheet.create({
    scrollViewContainer: {
        horizontal: true,
      },
      categoryView: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
      },
      categoryItem: {
        //padding: scale(10),
        fontSize: scale(17),
      },
      categoryText: isChoosing => ({
        color: isChoosing ? color.TitleActive : color.PlaceHolder,
        fontSize: scale(17),
        fontFamily: FONT_FAMILY.JoseFinSansRegular,
      }),
    
})