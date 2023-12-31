import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity,Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useIsFocused } from '@react-navigation/native'

//component
import color from '../../constants/color'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'
import ItemColor from './components/itemColor'
import ItemSize from './components/itemSize'
import { IC_Backward, IC_BackwardArrow } from '../../assets/icons'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import MessageYN from '../../components/alearts.js/messageYN'

const ListOfColor_SizeScreen = (props) => {

  const axiosPrivate = useAxiosPrivate();
  const [dataSize, setDataSize] = useState([]);
  const [dataColor, setDataColor] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getSizes = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-size', {
          signal: controller.signal,
        });
        isMounted && setDataSize(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    const getColors = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-color', {
          signal: controller.signal,
        });
        isMounted && setDataColor(response.data);
      } catch (err) {
        console.log(err?.response?.data || "undefined error");
      }
    };


    isFocused && getSizes();
    isFocused && getColors();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [isFocused]);

  const deleteColor = async (id, name) => {
    setTitle('Delete color');
    setMessage(`Do you want to delete ${name} color`)
    setStatus('new')
    const newClickYes = async () => {
      try {
        setStatus('loading');
        const response = await axiosPrivate.delete(`/delete-color/${id}`, {
        });
        console.log(response.data)
        let newDataColor = dataColor.filter(item => item._id !== id)
        setDataColor(newDataColor);
        setTitle('Color deleted');
        setMessage(`Color ${name} has been deleted`)
        setStatus('done');
      } catch (err) {
        console.log(err?.response?.data || err.message);
      } 
    }
    setClickYes(() => newClickYes);
    setVisible(true);
  } 


  const deleteSize = async (id, name) => {
    setTitle('Delete size');
    setMessage(`Do you want to delete ${name} size`)
    setStatus('new')
    const newClickYes = async () => {
      try {
        setStatus('loading');
        const response = await axiosPrivate.delete(`/delete-size/${id}`, {
        });
        console.log(response.data)
        let newDataSize = dataSize.filter(item => item._id !== id)
        setDataSize(newDataSize);
        setTitle('Size deleted');
        setMessage(`Size ${name} has been deleted`)
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
        <View style={styles.header}>
        <View style={styles.viewText}>
          <View style={styles.viewTitleText}>
            <TouchableOpacity style={{marginBottom: scale(40)}} onPress={()=>props.navigation.goBack()}>
                    <IC_Backward stroke={color.White}/>
            </TouchableOpacity>
            <Text style={styles.textTile}>List of colors & sizes</Text>
          </View>
          <View style={styles.viewLabel}>
          <TouchableOpacity style={styles.viewTextLabel} onPress={()=>props.navigation.navigate("AddColor")}>
            <Text style={styles.textLabel}>Add color</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewTextLabel} onPress={()=>props.navigation.navigate("AddSize")}>
            <Text style={styles.textLabel}>Add size</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>


      <View style={styles.body}>
        <View style={styles.viewColor}>
          <View style={styles.viewTextColor}>
            <Text style={styles.textColor}>Colors</Text>
          </View>
          <View>
          <ScrollView >
          {dataColor.map((item,index)=>(
                  <ItemColor
                  key={item._id}
                  number={index+1}                
                  name={item.name}
                  code={item.code}
                  delete={() => deleteColor(item._id, item.name)}
                  />

                ))}

          </ScrollView>
          </View>
        </View>


        <View style={styles.viewSize}>
          <View style={styles.viewTextColor}>
            <Text style={styles.textColor}>Size chart {'(cm)'}</Text>
          </View>
          <View>
          <View style={styles.viewSizeHeader}>
            <View style={styles.viewTextSize}>
            <Text style={styles.textSize}>Size</Text>
            </View>
            <View style={styles.viewTextSize}>
            <Text style={styles.textSize}>Width</Text>
            </View>
            <View style={styles.viewTextSize}>
            <Text style={styles.textSize}>Length</Text>
            </View>
          </View>
          <ScrollView >
          {dataSize.map((item,index)=>(
                  <ItemSize
                  key={item._id}
                  size={item.name}
                  width={item.width}
                  length={item.length}
                  delete={()=>deleteSize(item._id,item.name)}
                  />

                ))}

          </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ListOfColor_SizeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        height: Dimensions.get('screen').height*0.25,
        backgroundColor: color.TitleActive,
        justifyContent: 'flex-end',
        paddingBottom: scale(20),
      },
      viewTitleText: {
        width: scale(250),
        flexDirection: 'row',
        alignItems: 'center'
      },
      textTile: {
        color: color.White,
        fontSize: 36,
        fontFamily: FONT_FAMILY.Bold,
      },
      viewLabel:{
        marginLeft: scale(30),
        flexDirection: 'row',
        marginTop: scale(10),
        marginBottom: scale(10)
      },
      viewTextLabel:{
        width: scale(122),
        height: scale(36),
        backgroundColor: color.AthensGray,
        alignItems: 'center',
        marginRight: scale(20)
      },
      textLabel: {
        color: color.TitleActive,
        fontSize: 24,
        fontFamily: FONT_FAMILY.Bold,
      },
      body:{
        flex: 1,
        backgroundColor: color.White,
      },
      viewColor:{
        flex: 0.45,
        backgroundColor: color.White,
      },
      viewTextColor:{
        height: scale(36),
        alignContent: 'center',
        marginLeft: scale(18)
      },
      textColor:{
        color: color.TitleActive,
        fontSize: 24,
        fontFamily: FONT_FAMILY.Bold,
      },
      viewSize:{
        flex: 0.5,
        marginTop: scale(50),
        backgroundColor: color.White,
      },

      viewSizeHeader:{
        marginTop: scale(5),
        width: '95%',
        flexDirection: 'row',
        height: scale(40),
        alignItems: 'center',
        alignSelf: 'center'
      },
      textSize:{
        fontSize: 18,
        fontFamily: FONT_FAMILY.Bold,
        color: color.TitleActive
      }, 
      viewTextSize:{
        width: '25%',
        alignItems: 'center'
      },
})
