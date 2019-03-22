import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Camera from './Camera/Camera.component';
import Orientation from 'react-native-orientation-locker';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  takePicture() {
    if (this.camera) {
      const shouldSaveToCameraRoll = true;
      this.camera.capture(shouldSaveToCameraRoll)
        .then(image => {
          this.setState({image: image})
        });
    }
  }

  render() {
    const {image} = this.state
    if(image) {
      return <View>
        <Image source={{uri: image.uri}} style={{width: image.width /4, height: image.height /4}}/>

        <TouchableOpacity onPress={() => {
          this.setState({image: null})
        }}>
          <Text>reset</Text>
        </TouchableOpacity>
      </View>
    }

    return (
      <Camera
        cameraRef={ref => { this.camera = ref; }}
        takePicture={this.takePicture.bind(this)}
      />
    );
  }
}
