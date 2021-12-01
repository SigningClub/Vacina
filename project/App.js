import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Test from './PdfReader';
export default function App() {
  const [codigo, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Insira seu código QR:</Text>
      <TextInput style={styles.input}
        onChangeText={onChangeText}
        value={codigo} />
      <Text>
        Código inserido: {codigo}
      </Text>
      <Button
        title="Verificar"
        color="blue"
        accessibilityLabel="Verificar se seu cadastro foi feito"
      />
      <Test/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,

  }
});
