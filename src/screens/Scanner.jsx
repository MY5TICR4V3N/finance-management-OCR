import React, {useEffect, useState,useRef} from 'react';
import {
  StyleSheet,
  Text, 
  SafeAreaView, 
  TouchableOpacity,
  View
  } from 'react-native';
import {
	useCameraDevice,
	Camera,
	useCameraPermission,
} from 'react-native-vision-camera';

//used to move back to the list
import { useNavigation } from '@react-navigation/native';

const Scanner = () => {
	const {hasPermission, requestPermission} = useCameraPermission();

	// console.log(hasPermission)

	useEffect(() => {
		if (!hasPermission) {
			requestPermission();
		}
	}, [hasPermission]);

	const device = useCameraDevice('back');
  const camera = useRef(null);

  const { navigate } = useNavigation();
  const  Capture=async ()=> {
    const photo = await camera.current.takePhoto({
      flash: 'on'
    })
    console.log ('taken')

    //to be removed later
    navigate('ListView')
  }

	if (!device) {
		<Text>cameera not found</Text>;
	}

	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsActive(true);
		}, 500);
	}, []);




	return (
		<View style={styles.CameraView}>
			<Camera
        ref={camera}
				device={device}
				isActive={isActive}
        photo={true}
				style={StyleSheet.absoluteFill}
			/>
      <TouchableOpacity
      style={styles.shutter}
      onPress={Capture}
      > 
      </TouchableOpacity>
      
		</View>
	);
};

const shutterSize=80;

const styles = StyleSheet.create({
  CameraView:{
    flex:1,
    
    justifyContent:"flex-end"
  },
  shutter:{
    backgroundColor:"white",
    height:shutterSize,
    width:shutterSize,
    alignSelf:"center",
    marginBottom:"10%",
    borderRadius:shutterSize/2,
    borderWidth:2,
    borderColor:"black"
  }
});

export default Scanner;
