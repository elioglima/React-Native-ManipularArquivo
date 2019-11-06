import React from 'react';
import styles from './styles';

let RNFS = require('react-native-fs');
import shorthash from 'shorthash';


import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textoEntrada: '',
      textoSaida: '',
      statusSave: '',
      statusRead: ''
    }
  }

  SaveToFile = () => {
    const nameFile = 'nomedoarquivo';
    const name = shorthash.unique(nameFile);
    const extension = (Platform.OS === 'android') ? 'file://' : ''
    const path = `${extension}${RNFS.CachesDirectoryPath}/${name}.text`;
    RNFS.writeFile(path, this.state.textoEntrada)
      .then(res => {
        this.setState({ statusSave: 'Dados gravados com sucesso.' })
      }).catch(err => {
        this.setState({ statusSave: 'Falha ao gravar os dados.' })
      })

  }

  ReadToFile = () => {
    const nameFile = 'nomedoarquivo';
    const name = shorthash.unique(nameFile);
    const extension = (Platform.OS === 'android') ? 'file://' : ''
    const path = `${extension}${RNFS.CachesDirectoryPath}/${name}.text`;
    RNFS.exists(path).then(exists => {
      RNFS.readFile(path)
        .then(res => {
          this.setState({ statusRead: 'Leitura efetuada com sucesso.' })
          this.setState({ textoSaida: res })
        }).catch(err => {
          this.setState({ statusRead: 'Falha ao efetuar leitura do arquivo.' })
        })

    }).catch(err => {
      this.setState({ statusRead: 'Falha ao encontrar o arquivo.' })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Manipulando arquivo</Text>
        <View style={styles.containerEntrada}>

          <TextInput
            style={styles.input}
            multiline
            numberOfLines={9}
            editable
            maxLength={40}
            onChangeText={text => this.setState({ textoEntrada: text })}
            value={this.state.textoEntrada}
          />

          <TouchableOpacity style={styles.button} onPress={this.SaveToFile}>
            {/* <ActivityIndicator size="small" color="#fff" /> */}
            <Text style={styles.buttonText}>Gravar Arquivo Local</Text>
          </TouchableOpacity>
          <Text style={styles.statusSave}>{this.state.statusSave}</Text>
        </View>

        <View style={styles.containerSaida}>

          <TouchableOpacity style={styles.button} onPress={this.ReadToFile}>
            {/* <ActivityIndicator size="small" color="#fff" /> */}
            <Text style={styles.buttonText}>Ler arquivo Local</Text>
          </TouchableOpacity>
          <Text style={styles.statusRead}>{this.state.statusRead}</Text>
          <Text style={styles.textoSaida}>{this.state.textoSaida}</Text>

        </View>
      </View>
    );
  }
}
