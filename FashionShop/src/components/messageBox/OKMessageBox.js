import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import scale from '../../constants/responsive';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';

const OKMessageBox = (props) => {
  return (
    <Modal transparent visible={props.visible}>
        <View style={styles.background}>
            <View style={styles.noticeBox}>
                <View style={[styles.noticeTitle, props.fail?{backgroundColor: color.TitleActive}: null]}>
                    <Text style={styles.titleText} numberOfLines={1}>{props.title}</Text>
                </View>
                <View style={styles.noticeMessage}>
                    <View style={{width: '100%', height: '65%', justifyContent: 'center',}}>
                        <Text style={[styles.messageText,props.fail?{color: color.TitleActive}: null]} numberOfLines={5}>{props.message}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonPosition}
                        onPress={props.clickCancel}>
                        <View style={[styles.buttonBox, props.fail?{backgroundColor: color.TitleActive}: null]}>
                            <Text style={styles.buttonText}>{props.buttonText?props.buttonText:"OK"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );
};

export default OKMessageBox;

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
        backgroundColor: color.TitleActive,
        width: '100%',
        paddingHorizontal: scale(30),
        height: scale(66),
    },
    titleText: {
        color: color.White,
        marginTop: scale(17),
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(18),
        alignSelf: 'center',    
    },
    noticeMessage: {
        flex: 1,
        padding: scale(20),
    },
    messageText: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(20),
        textAlign: 'center',
    },
    buttonPosition: {
        
        marginTop: scale(20),
        alignSelf: 'center',
      },
    buttonBox: {
        backgroundColor: color.TitleActive,
        height: scale(53),
        width: scale(278),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26.5,
    },
    buttonText: {
        color: color.OffWhite,
        fontFamily: FONT_FAMILY.Regular,
    }
});
