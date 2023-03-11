import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import color from '../../../../constants/color';

const ContactInfor = props => {
  return (
    <Modal transparent visible={props.visible}>
      <View style={styles.background}>
        <View style={styles.noticeBox}>
          <View style={styles.noticeTitle}>
            <Text style={styles.titleText} numberOfLines={1}>
              LIÊN HỆ
            </Text>
          </View>

          <View style={styles.noticeMessage}>
            <View style={{width: '100%'}}>
              <Text style={styles.messageTitle}>HotLine: </Text>
              <Text style={styles.messageText}>0336771233</Text>

              <Text style={styles.messageTitle}>Email: </Text>
              <Text style={styles.messageText}>DuyHam@gmail.com</Text>

              <Text style={styles.messageTitle}>Chi nhánh: </Text>
              <Text style={styles.messageText}>KTX khu B - TPHCM</Text>
            </View>

            <TouchableOpacity
              style={styles.buttonPosition}
              onPress={props.clickCancel}>
              <View style={styles.buttonBox}>
                <Text style={styles.buttonText}>
                  {props.buttonText ? props.buttonText : 'OK'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ContactInfor;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  noticeBox: {
    width: scale(315),
    backgroundColor: color.White,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  noticeTitle: {
    backgroundColor: color.TitleActive,
    width: '100%',
    paddingHorizontal: scale(30),
    paddingVertical: scale(15),
  },
  titleText: {
    color: color.White,
    fontFamily: FONT_FAMILY.JoseFinSans,
    fontSize: scale(20),
  },
  noticeMessage: {
    padding: scale(20),
  },
  messageText: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.JoseFinSans,
    fontSize: scale(16),
    marginLeft: 5,
    marginBottom: 10,
  },
  messageTitle: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.JoseFinSans,
    fontSize: scale(16),

    marginLeft: 5,
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
    color: color.White,
    fontFamily: FONT_FAMILY.JoseFinSans,
  },
});
