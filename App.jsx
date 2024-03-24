import React from 'react'


import { PaperProvider } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';




import StackNav from './src/navigation/StackNav';



const FinManagaer = () => {
	return (
		<PaperProvider
			settings={{
				icon: props => <AwesomeIcon {...props} />,
			}}>
			<StackNav/>
		</PaperProvider>
	);
};

export default FinManagaer