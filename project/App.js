import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
export default function App() {
  const [codigo, onChangeText] = React.useState("");

  const JWT = 'eyJraWQiOiJlaHItZG9jIiwiYWxnIjoiUlMyNTYifQ.eyJpYXQiOjE2Mzc2MzY0MDAsImV4cCI6NDc5MTMyMjc5OSwibmJmIjoxNjM3NzEwNzA5LCJpc3MiOiJFSFIgU0VSVklDRVMgQkZGIiwic3ViIjoiQ09XN1BSWDVDTjJCWFlINCIsImNvZGlnbyI6IkNPVzdQUlg1Q04yQlhZSDQiLCJwYWNpZW50ZSI6eyJjcGYiOiI3OTcwNjAyOTU5MSIsIm5vbWUiOiJUSElBR08gREUgT0xJVkVJUkEgTElNQSIsIm5hc2NpbWVudG8iOiIxOTc5LTEwLTA0In0sInZhY2luYXMiOlt7ImRhdGEiOiIyMDIxLTA5LTAxIiwibm9tZSI6IkNPVklELTE5IEFTVFJBWkVORUNBL0ZJT0NSVVogLSBDT1ZJU0hJRUxEIiwiZG9zZSI6IjIvMiJ9LHsiZGF0YSI6IjIwMjEtMDYtMTIiLCJub21lIjoiQ09WSUQtMTkgQVNUUkFaRU5FQ0EvRklPQ1JVWiAtIENPVklTSElFTEQiLCJkb3NlIjoiMS8yIn1dLCJfVE9LRU5fVFlQRV9DTEFJTV8iOiJDZXJ0VmFjQ292aWQxOSJ9.hiIHHc4dygJ6OYgnbb_kzIJjqRXRym7XzXxC9VBM68UEMZTWQR1NijYJrJd1FvCievokaMpXACf_mrnhVm2o0BRzCpIes-onQZrn_zy_c7xktqh4Hgd3BBZGh1uhvipMkP4OqQ5KtAT07QRJZInXXI_-VllbpUBEAkPo6jXTPtqHPwFbQ_FKNAtrfqMDiNRjoVodXAw6Bqo1r_Po-_BHp7xAYQKU76IrpTxPoCXOsWnQeprSrJUgeuFSnntKtV8TAuhdBt1EnSsxRhH9LESGfQkAKgSes5C4GsKFyUoFPSPXj66uDZML-rrL1VoV2B04aAfFJdKWd3hBS63U35BHOw';
  var b64_header, b64_payload, b64_signature = JWT.split('.');
  var json = btoa(b64_header);
  const [paciente, pacientechange] = React.useState(json);

  return (
    <View style={styles.container}>
      <Text>
        Código inserido: {codigo}
        Paciente carregado: {json}
      </Text>
      <Button
        
        title="Verificar"
        color="blue"
        accessibilityLabel="Verificar se seu cadastro foi feito"
      />
      <Text>

      </Text>
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
