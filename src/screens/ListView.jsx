import React, {useState} from 'react';
import WhiteStatus from '../components/WhiteStatus';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	FlatList,
	ScrollView,
} from 'react-native';
import ListHead from '../components/ListHead';
import ListSubBar from '../components/ListSubBar';
import {CheckBox} from '@rneui/themed';

//tab navigation
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

//family list
const familydata = [{item: 'apple'}, {item: 'cake'}, {item: 'orange'}];
// personal list
const privatedata = [{item: 'water melon'}, {item: 'water bottle'}];

//styles 
import styles from '../styles/ListViewStyles';


const ListView = ({navigation}) => {
	// const navigation = useNavigation();

	const [ispressed, setpressed] = useState(false);

	const Structure = ({itemname}) => {
		return (
			<View style={{flexDirection: 'row'}}>
				<CheckBox
					checked={ispressed}
					onPress={() => {
						setpressed(!ispressed);
					}}
					style={styles.checkboxStyle}
					title={itemname}
					size={24}
					textStyle={styles.listTextStyle}
					containerStyle={{
						backgroundColor: 'transparent',
					}}
				/>
			</View>
		);
	};

	const TopName = ' ';
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
			<WhiteStatus />

			<ListHead
				topage={'setting'}
				navigation={navigation}
				title={TopName.concat('List')}
			/>
      <ScrollView>
      <ListSubBar
				leftText={'Family'}
				rightText={'Add item'}
			/>
			<View style={styles.liststyle}>
				<FlatList
				scrollEnabled={false}
					data={familydata}
					renderItem={({item}) => (
						<Structure
							itemname={item.item}
						/>
					)}
				/>
			</View>
			<ListSubBar
				leftText={'Personal'}
				rightText={'Add item'}
			/>
			<View style={styles.liststyle}>
				<FlatList
					data={privatedata}
					scrollEnabled={false}
					renderItem={({item}) => (
						<Structure
							itemname={item.item}
						/>
					)}
				/>
			</View>
      </ScrollView>

		</SafeAreaView>
	);
};
export default ListView;
