import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, Linking} from 'react-native';

const DetailsScreen = ({navigation}) => {
  const route = useRoute();
  const item = route?.params.item;

  const url_home = 'deeplinking://app/home';
  const url_counter = 'deeplinking://app/counter';

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, color: '#000'}}>
        {item.id} {item.name}
      </Text>
      <Text style={{fontSize: 24, color: '#000'}}>
        {item.address.suite}, {item.address.street}, {item.address.city},
        {item.address.street}, {item.address.zipcode}
      </Text>
      <Text style={{fontSize: 24, color: '#000'}}>{item.username}</Text>
      <Text style={{fontSize: 24, color: '#000'}}>{item.email}</Text>
      <Text style={{fontSize: 24, color: '#000'}}>{item.website}</Text>
      <Text style={{fontSize: 24, color: '#000'}}>{item.phone}</Text>
      <Button
        title="navigate to home"
        onPress={() => Linking.openURL(url_home)}
      />
      <Button
        title="navigate to counter"
        onPress={() => Linking.openURL(url_counter)}
      />
    </View>
  );
};

export default DetailsScreen;
