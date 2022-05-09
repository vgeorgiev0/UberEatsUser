import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
// import Loading from './src/components/Loading';
import Navigator from './src/navigation/Navigator';
import { RecoilRoot } from 'recoil';
import { LogBox } from 'react-native';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

// TMP Fix for Recoil using a long timer for cleanup
LogBox.ignoreLogs(['timer']);

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <StatusBar />
      <Navigator />
    </RecoilRoot>
  );
};

export default withAuthenticator(App);
