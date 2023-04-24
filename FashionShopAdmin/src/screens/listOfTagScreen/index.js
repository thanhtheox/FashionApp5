import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import color from '../../constants/color';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import {DataTable} from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {IC_Backward, IC_BackwardArrow} from '../../assets/icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import HeaderMax from '../../components/header/headerMax';

const ListOfTagScreen = props => {
  const [tagData, setTag] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getTags = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-tag', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setTag(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    getTags();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderMax
        onPress={() => props.navigation.navigate('AddTag')}
        onPressBack={() => props.navigation.goBack()}
        textTitle={'List of tags'}
        textLabel={'Add tags'}
      />

      <View style={styles.body}>
        <DataTable style={{flex: 1}}>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.text}>No.</DataTable.Title>
            <DataTable.Title textStyle={styles.text}>Name</DataTable.Title>
            <DataTable.Title textStyle={styles.text}>Type</DataTable.Title>
          </DataTable.Header>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            {tagData.map((tag, index) => (
              <TouchableOpacity key={tag._id}>
                <DataTable.Row style={{height: scale(70)}}>
                  <DataTable.Cell textStyle={styles.text}>
                    {index}
                  </DataTable.Cell>
                  <DataTable.Cell textStyle={styles.text}>
                    {tag.name}
                  </DataTable.Cell>
                  <View>
                    <BouncyCheckbox
                      size={25}
                      fillColor="black"
                      unfillColor="#FFFFFF"
                      text="Product"
                      iconStyle={{borderColor: 'black', borderRadius: 0}}
                      innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                      onPress={isChecked => {}}
                      style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        gap: scale(15),
                      }}
                      textStyle={styles.text}
                    />
                    <View style={{height: scale(10)}} />
                    <BouncyCheckbox
                      size={25}
                      fillColor="black"
                      unfillColor="#FFFFFF"
                      text="Blog"
                      iconStyle={{borderColor: 'black', borderRadius: 0}}
                      innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                      onPress={isChecked => {}}
                      style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        gap: scale(15),
                      }}
                      textStyle={{
                        fontWeight: '600',
                        fontSize: 15,
                        fontFamily: FONT_FAMILY.Regular,
                        textDecorationLine: 'none',
                        color: color.TitleActive,
                      }}
                    />
                  </View>
                </DataTable.Row>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </DataTable>
      </View>
    </SafeAreaView>
  );
};

export default ListOfTagScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: scale(15),
    backgroundColor: color.InputBackground,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    fontFamily: FONT_FAMILY.Regular,
    textDecorationLine: 'none',
    color: color.TitleActive,
  },
});
