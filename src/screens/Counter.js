import {Text, StyleSheet, View, Button} from 'react-native';
import {useState} from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);
  return (
    <View>
      <Text style={{fontSize: 24, color: '#000'}}>{value}</Text>
      <Button
        title="Increment"
        onPress={() => setValue(value === 10 ? 10 : value + 1)}
      />
      <Button
        title="Decrement"
        onPress={() => setValue(value === 0 ? 0 : value - 1)}
      />
      <Button title="Reset" onPress={() => setValue(0)} />
    </View>
  );
}
