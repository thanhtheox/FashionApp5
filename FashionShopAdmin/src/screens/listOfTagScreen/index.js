import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DataTable} from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
//component
import color from '../../constants/color';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import HeaderMax from '../../components/header/headerMax';
import { IC_Delete } from '../../assets/icons';
import MessageYN from '../../components/alearts.js/messageYN';

const ListOfTagScreen = props => {
  const [tagData, setTag] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const isFocus = useIsFocused();

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
  }, [isFocus]);

  const deleteTag = async (id, name) => {
    setTitle('Delete Tag');
    setMessage(`Do you want to delete ${name} tag`)
    setStatus('new')
    const newClickYes = async () => {
      try {
        setStatus('loading');
        const response = await axiosPrivate.delete(`/delete-size/${id}`, {
        });
        console.log(response.data)
        let newDataTag = tagData.filter(item => item._id !== id)
        setTag(newDataTag                                                                                                                                                                                                                                                                               );
        setTitle('Tag deleted');
        setMessage(`Tag ${name} has been deleted`)
        setStatus('done');
      } catch (err) {
        console.log(err?.response?.data || err.message);
      } 
    }
    setClickYes(() => newClickYes);
    setVisible(true);
  }

  const [status, setStatus] = useState('new')
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [clickYes, setClickYes] = useState(() => async () => {setVisible(false)})
  const [clickNo, setClickNo] = useState(() => () => {setVisible(false)})
  return (
    <SafeAreaView style={styles.container}>
      <MessageYN
          visible={visible} 
          title={title}
          message={message}
          clickYes={clickYes}
          clickNo={clickNo}
          status={status}
          clickCancel={() => {setVisible(false)}}
        />
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
            <DataTable.Title textStyle={styles.text}>Delete</DataTable.Title>
          </DataTable.Header>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            {tagData.map((tag, index) => (
              <TouchableOpacity key={tag._id} onPress={() => props.navigation.navigate("EditTag", {
                tag: tag
              })}>
                <DataTable.Row style={{height: scale(70)}}>
                  <DataTable.Cell textStyle={styles.text}>
                    {index}
                  </DataTable.Cell>
                  <DataTable.Cell textStyle={styles.text}>
                    {tag.name}
                  </DataTable.Cell>
                  <View>
                    <TouchableOpacity style={styles.viewIcon} onPress={() => deleteTag(tag._id, tag.name)}>
                      <IC_Delete></IC_Delete>
                    </TouchableOpacity>
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
    fontSize: 18,
    fontFamily: FONT_FAMILY.Bold,
    textDecorationLine: 'none',
    color: color.TitleActive,
  },
  viewIcon:{
    width: scale(100),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(5)
  }
});
