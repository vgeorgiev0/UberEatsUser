import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation/MainNavigation';
// import Loading from './src/components/Loading';
import Navigator from './src/navigation/Navigator';
import { RecoilRoot } from 'recoil';
import { LogBox } from 'react-native';

// TMP Fix for Recoil using a long timer for cleanup
LogBox.ignoreLogs(['timer']);

import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <RecoilRoot>
      <StatusBar />
      <Navigator />
    </RecoilRoot>
  );
}
