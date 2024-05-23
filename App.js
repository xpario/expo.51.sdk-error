import React from 'react';
import {Text, View} from 'react-native';
import {loadAsync} from "expo-font";

async function initializeFonts() {
	let loaded = true;

	try {

		await loadAsync({
			/*
			'Inter_100Thin': require('./assets/inter/Inter-Thin.ttf'),
			//'Inter_200ExtraLight': require('./assets/manrope/Manrope-ExtraLight.ttf'),
			//'Inter_300Light': require('./assets/manrope/Manrope-Light.ttf'),
			'Inter_400Regular': require('./assets/manrope/Manrope-Regular.ttf'),
			//'Inter_500Medium': require('./assets/manrope/Manrope-Medium.ttf'),
			'Inter_600SemiBold': require('./assets/manrope/Manrope-SemiBold.ttf'),
			'Inter_700Bold': require('./assets/manrope/Manrope-Bold.ttf'),
			'Inter_800ExtraBold': require('./assets/manrope/Manrope-ExtraBold.ttf'),
			'Inter_900Black': require('./assets/inter/Inter-Black.ttf'),
			 */

			'Inter_100Thin': require('./assets/inter/Inter-Thin.ttf'),
			'Inter_200ExtraLight': require('./assets/inter/Inter-ExtraLight.ttf'),
			'Inter_300Light': require('./assets/inter/Inter-Light.ttf'),
			'Inter_400Regular': require('./assets/inter/Inter-Regular.ttf'),
			'Inter_500Medium': require('./assets/inter/Inter-Medium.ttf'),
			'Inter_600SemiBold': require('./assets/inter/Inter-SemiBold.ttf'),
			//'Inter_600SemiBold': require('./assets/manrope/Manrope-SemiBold.ttf'),
			'Inter_700Bold': require('./assets/inter/Inter-Bold.ttf'),
			'Inter_800ExtraBold': require('./assets/inter/Inter-ExtraBold.ttf'),
			'Inter_900Black': require('./assets/inter/Inter-Black.ttf'),

		});
		// Below is for testing purposes only...
		// throw new Error('Test environment exception.');

	} catch (e) {
		alert('Error loading fonts: ' + e.message);

		loaded = false;

	}

	return loaded;
}


const App = () => {

	const [fontsLoaded, setFontsLoaded] = React.useState(false);

	initializeFonts().then((loaded) => {
		if (loaded) {
			setFontsLoaded(true);
			console.log('Fonts loaded successfully.');
		} else {
			console.log('Fonts failed to load.');
		}
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text
				style={{
					fontFamily: 'Inter_600SemiBold',
					fontSize: 24,
					color: 'red',
				}}
			>
				{"Hello World"}
			</Text>
		</View>
	);

}


export default App;
