## React-native-camera-kit bug on IOS in landscape mode

Open the project with XCode and run it on an iOS device (no emulator, as the emulator on ios doesn't have camera support)

Once on the device - rotate to landscape view.

The example has locked the view to portrait mode - so the image shouldn't rotate.

Now press "Capture". The displayed image should be in landscape mode, but it is shown
in portrait mode.

I haven't made the example run on android, but I know android works as we've tested it
on a separate project.
