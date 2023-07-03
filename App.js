import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Appearance, useColorScheme} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
  Inter_900Black,
      'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12', 
  });
  let colorScheme = useColorScheme();
  //toggle between dark and 
  const themeTextStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer; 
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  //check if font is loaded
  if(!fontsLoaded){
    return  null
  }

  const insets = useSafeAreaInsets();
  const styObj = {
    paddingTop: insets.top,
    themeContainerStyle,
  }
  
  return (
    <View style={{ ...styObj }} >
        <Text style={[styles.text, themeTextStyle]}>Content is in safe area.. {colorScheme}</Text>
        <StatusBar style="auto" />
    </View>
  )
}


export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
   //okay...
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
