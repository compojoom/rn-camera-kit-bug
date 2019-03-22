import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  captureTouchable: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  captureContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  closeContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 15 : 5,
    right: 15
  }
});
