import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import scale from '../../constants/responsive';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
const YesNoMessageBox = (props) => {
  const closePopUp = (bool) => {
    props.clickCancel();
    props.setMsg(bool);
  }
  return (
    <Modal transparent visible={props.visible}>
        <View style={styles.background}>
            <View style={styles.noticeBox}>
                <View style={styles.noticeTitle}>
                    <Text style={styles.titleText} numberOfLines={1}>{props.title}</Text>
                </View>
                <View style={styles.noticeMessage}>
                    <View style={{width: '100%', height: '65%'}}>
                        <Text style={styles.messageText} numberOfLines={5}>{props.message}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity
                            style={styles.buttonPosition}
                            onPress={() => closePopUp(true)}>
                            <View style={styles.buttonBox}>
                                <Text style={styles.buttonText}>{props.buttonText?props.buttonText:"Yes"}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonPosition}
                            onPress={() => closePopUp(false)}>
                            <View style={styles.buttonBox}>
                                <Text style={styles.buttonText}>{props.buttonText?props.buttonText:"No"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </Modal>
  );
};

export default YesNoMessageBox;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noticeBox: {
        width: scale(315),
        height: scale(322),
        backgroundColor: color.OffWhite,
        borderRadius: 30,
        overflow: 'hidden',
    },
      noticeTitle: {
        backgroundColor: color.Primary,
        width: '100%',
        paddingHorizontal: scale(30),
        height: scale(66),
    },
    titleText: {
        color: color.OffWhite,
        marginTop: scale(17),
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(20),
    },
    noticeMessage: {
        flex: 1,
        padding: scale(20),
    },
    messageText: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(18),
    },
    buttonPosition: {
        width: '45%',
        marginTop: scale(20),
        alignSelf: 'center',
      },
    buttonBox: {
        backgroundColor: color.Primary,
        height: scale(53),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26.5,
    },
    buttonText: {
        color: color.OffWhite,
        fontFamily: FONT_FAMILY.Regular,
    }
});
