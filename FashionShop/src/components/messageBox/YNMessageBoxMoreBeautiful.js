import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import {ActivityIndicator} from 'react-native-paper';

const MessageYN = props => {
  // take in visible(state), title, message, click cancel, setMsg
  const closePopUp = bool => {
    props.clickCancel();
    props.setMsg(bool);
  };

  return (
    <Modal transparent visible={props.visible}>
      <View style={styles.background}>
        <View style={styles.noticeBox}>
          <View style={styles.noticeTitle}>
            <Text style={styles.titleText} numberOfLines={1}>
              {props.title}
            </Text>
            {props.status === 'loading' ? (
              <ActivityIndicator color={color.TitleActive} />
            ) : null}
          </View>
          <View style={styles.noticeMessage}>
            <View style={{width: '100%', height: '65%'}}>
              <Text style={styles.messageText} numberOfLines={5}>
                {props.message}
              </Text>
            </View>
            {props.status === 'new' ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  style={styles.buttonPosition}
                  onPress={props.clickYes}>
                  <View style={styles.buttonBox}>
                    <Text style={styles.buttonText}>
                      {props.buttonText ? props.buttonText : 'Yes'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonPosition}
                  onPress={props.clickNo}>
                  <View style={styles.buttonBox}>
                    <Text style={styles.buttonText}>
                      {props.buttonText ? props.buttonText : 'No'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
            {props.status === 'done' ? (
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                  style={styles.buttonPositionBig}
                  onPress={props.clickCancel}>
                  <View style={styles.buttonBox}>
                    <Text style={styles.buttonText}>
                      {props.buttonText ? props.buttonText : 'OK'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MessageYN;

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
    backgroundColor: color.White,
    borderRadius: 30,
    overflow: 'hidden',
  },
  noticeTitle: {
    backgroundColor: color.Primary,
    width: '100%',
    paddingHorizontal: scale(30),
    height: scale(66),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    color: color.White,
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
    color: color.White,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
  },
  buttonPositionBig: {
    width: '80%',
    marginTop: scale(20),
    alignSelf: 'center',
  },
});
