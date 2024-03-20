
import React from 'react'

import GetStarted from './src/screens/GetStarted'
import LoadingScreen from './src/screens/LoadingScreen'
import SignUpPage from './src/screens/SignUpPage'
import LoginPage from './src/screens/LoginPage'
import UsersScreen from './src/screens/UsersScreen'
import ListView from './src/screens/ListView'



import { PaperProvider } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';


const FinManagaer= () => {
    return(
        <PaperProvider
        settings={{
            icon: props => <AwesomeIcon {...props} />,
          }}>
            <ListView/>
        </PaperProvider>

    )
}

export default FinManagaer