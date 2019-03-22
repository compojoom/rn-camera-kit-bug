import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { CameraKitCamera } from 'react-native-camera-kit';
import styles from './Camera.component.style';

const hitSlop = {
  top: 30, right: 30, left: 30, bottom: 30
};

class Camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CameraKitCamera
          style={styles.preview}
          ref={this.props.cameraRef}
        />
        <View style={styles.captureContainer}>
          <TouchableOpacity onPress={this.props.takePicture} style={styles.captureTouchable}
                            hitSlop={hitSlop}
          >
            <Text>capture</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Camera;
