import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Stack, Row, Col, Table } from 'react-bootstrap';

export default function App() {
  const titulo = useState("O que significa “CONTATO PRÓXIMO”?");


  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col>
          <Text style={Título.titleText}>
            {titulo}
            {"\n"}

          </Text>


          <Text>
            Para fins de vigilância, rastreamento, isolamento, monitoramento de contatos e {"\n"}quarentena, deve-se considerar o contato próximo a pessoa que:

          </Text>
          <Stack gap={3}>
            <div className="bg-light border">● Esteve a menos de um metro de distância, por um período mínimo de 15 minutos, com um caso confirmado sem ambos utilizarem máscara facial ou utilizarem de forma incorreta.</div>
            <div className="bg-light border">● Teve um contato físico direto (p. ex.: apertando as mãos) com um caso confirmado</div>
            <div className="bg-light border">● É profissional de saúde que prestou assistência em saúde ao caso de covid-19 sem utilizar equipamentos de proteção individual (EPI), conforme preconizado, ou com EPI danificados</div>
            <div className="bg-light border">● Seja contato domiciliar ou residente na mesma casa/ambiente (dormitórios, creche, alojamento, dentre outros) de um caso confirmado.</div>
          </Stack>
          <Text style={Título.titleText}>{"\n"}Critérios de ISOLAMENTO</Text>

          <StatusBar style="auto" />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pessoa exposta/Contato </th>
            <th>Condição</th>
            <th>Isolamento</th>
            <th>Teste</th>
            <th>Negativo</th>
            <th>Positivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assintomático</td>
            <td>Vacinação completa</td>
            <td> NÃO</td>
            <td>5º Dia</td>
            <td>-------</td>
            <td>Critério de paciente POSITIVO</td>
          </tr>
          <tr>
            <td></td>
            <td>Vacinação incompleta</td>
            <td>SIM(5º Dia)</td>
            <td>5º Dia</td>
            <td>ALTA</td>
            <td>Completar 10 dias</td>
          </tr>
          <tr>
            <td>Sintomático</td>
            <td>Teste(+)</td>
            <td>Critério de paciente POSITIVO</td>
            <td>-------</td>
            <td>-------</td>
            <td>---------------------</td>
          </tr>
          <tr>
            <td></td>
            <td>Teste(-)</td>
            <td>Afastar por 5 dias</td>
            <td>5º Dia</td>
            <td>ALTA</td>
            <td>Completar 10 dias</td>
          </tr>
        </tbody>
      </Table>
    </Container>

  )



}


const Título = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,

  }
});
