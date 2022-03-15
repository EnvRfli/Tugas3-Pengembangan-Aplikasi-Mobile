import React from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import BackImage from '../assets/airplane-2748431_960_720.png';

const Screen1 = ({navigation}) => {
    const [berangkat, onChangeBerangkat] = React.useState('');
    const [sampai, onChangeSampai] = React.useState('');
    const [jadwal, onChangeJadwal] = React.useState('');

    const cariData = () => {
      navigation.navigate('Screen2',{
        keberangkatan : berangkat,
        tujuan : sampai,
        waktu : jadwal,
      })
    }
  
  return(
    <ImageBackground source={BackImage} style={styles.container}>
      <Text style={styles.namaapk}>mrar.id</Text>
      <View style={styles.bgbox}>
        
        <Text style={styles.teksDiBox}>Lokasi Keberangkatan</Text>
        
        <TextInput 
        style={styles.inputteks} 
        placeholder='e.g. monstadt/liyue/inazuma'
        onChangeText={(text) => onChangeBerangkat(text)}
        value={berangkat}
        />

        <Text style={styles.teksDiBox}>Lokasi Tujuan</Text>
        <TextInput 
        style={styles.inputteks} 
        placeholder='e.g. monstadt/liyue/inazuma' 
        onChangeText={(text) => onChangeSampai(text)}
        value={sampai}
        />    
        
        <Text style={styles.teksDiBox}>Tanggal Keberangkatan</Text>
        <TextInput 
        style={styles.inputteks} 
        placeholder='2022-08-10 atau 2022-08-11'
        onChangeText={(text) => onChangeJadwal(text)}
        value={jadwal}
        />
        
        <Button 
          title="Cari"
          onPress={cariData}    
          style={styles.tombol}
        />
      </View>
        <Text style={styles.namanim}>Copyright: M. Rafli - 119140124</Text>
    </ImageBackground>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },

  namaapk: {
    marginTop: 50,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: "bold",
    color: "white"
  },

  bgbox: {
    width: 300,
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 23,
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 15.5,
    backgroundColor: "white",
    alignItems: 'center'
    
  },
  teksDiBox: {
    color: "black",
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 5,
    },

  inputteks: {
    height: 40,
    width: 260,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#555',
    marginBottom: 5, 
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 15,
  },

  tombol:{
    height: 35,
    width: 260,
    borderRadius: 5,
    backgroundColor: "orange", 
    paddingVertical: 7,
    marginTop: 20
  },

  tekstombol: {
    fontsize: 15,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center'
  },

  namanim: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: "bold",
    color: "black",
  },
  Hasil : {
    position: 'absolute',
    left: 15,
    top: 5,
    fontWeight:'Bold',
  },

  Hasil2 : {
    fontSize: 21,
    position: 'absolute',
    left: 40,
    top: 65,
    fontWeight:'Bold',
  },

  Hasil3 : {
    fontsize: 20,
    position: 'absolute',
    left: 237,
    top: 73,
    fontWeight: 'Bold',
    color: 'blue',
  },

  imagestyle:{
    height: 40,
    width: 40,
  },

  boxlist: {
    width: 350,
    height: 100,
    marginBottom: 40,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 15.5,
    backgroundColor: "white",
  }
});

export default Screen1;
