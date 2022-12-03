# Your E-Care React Native Source

## Environment
List of the package and version of the environment
```
Binaries:
    Node: 16.18.0 - C:\Program Files\nodejs\node.EXE
    Yarn: 1.22.19 - ~\AppData\Roaming\npm\yarn.CMD
    npm: 8.19.2 - C:\Program Files\nodejs\npm.CMD
    Watchman: Not Found
  SDKs:
    Android SDK: Not Found
    Windows SDK:
      AllowDevelopmentWithoutDevLicense: Enabled
      Versions: 10.0.17763.0
  IDEs:
    Android Studio: AI-213.7172.25.2113.9123335
    Visual Studio: Not Found
  Languages:
    Java: 11.0.17 - C:\Program Files\Eclipse Adoptium\jdk-11.0.17.8-hotspot\bin\javac.EXE
  npmPackages:
    @react-native-community/cli: Not Found
    react: 18.1.0 => 18.1.0 
    react-native: 0.70.6 => 0.70.6 
    react-native-windows: Not Found
  npmGlobalPackages:
    *react-native*: Not Found
```
## How to install the source

Clone the code and using this command to init in the source folder

```
yarn install
```

### Ios
For ios, to install the app, after run the previous command, using this command
```
cd ios && bundle install && bundle exec pod install
```

## Run the demo

### Android

Using an android emulator or real device attach by USB cable or wifi, by run this command

```
npx react-native run-android
```
### Ios

Using an Ios emulator by run this command

```
npx react-native run-ios
```

If you are using real device, add `--device` to run
```
npx react-native run-ios --device="My Iphone"
```
