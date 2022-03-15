import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  FlatList,
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
} from 'react-native';
import { BANDARA, MASKAPAI, JADWAL } from '../data/datapenerbangan';

const Screen2 = ({navigation}) => {
  const route = useRoute();
  return (
    <SafeAreaView >
        <View style={styles.header}>
            <Text style={styles.namaapk}>mrar.id</Text>
            <Text style={styles.teksDiBox}>Hasil Pencarian Penerbangan</Text>
        </View>
        <View style={styles.findD}>                  
            <SearchData/>
        </View>
    </SafeAreaView>
  )
  function UnvalidData() {
    return (        
      <Text style={styles.tidakditemukan}>Maaf Hasil Pencarian Tidak Ditemukan</Text>  
    );
  }

  function DataGet (hasil){
    return (
        <FlatList
            data = {hasil}
            renderItem={({item}) => (
                <View style={styles.boxlist}>
                    <Text style={styles.Hasil}>{BANDARA.find(src => src.bandara_id == item.bandara_id_keberangkatan).bandara_nama}  {'->'}  {BANDARA.find(sub => sub.bandara_id === item.bandara_id_kedatangan).bandara_nama}</Text>
                    <Text style={styles.Hasil2}>{MASKAPAI.find(src => src.maskapai_id === item.maskapai_id).maskapai_nama}</Text>
                    <Text style={styles.Hasil3}>{JADWAL.find(src => src.tanggal === item.tanggal).tanggal}</Text>
                </View>
            )}
            keyExtractor={item => item.jadwal_id}
        />
    );
};


  function SearchData(){
    if (route.params.keberangkatan === '' || route.params.tujuan === '' || route.params.waktu === ''){
        return UnvalidData();
    }else{
        const brgkt = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.keberangkatan.toLowerCase()).bandara_id;
        const tjn = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.tujuan.toLowerCase()).bandara_id;
        const HasilFinal = JADWAL.filter(id => id.bandara_id_keberangkatan.toLowerCase() === brgkt.toLowerCase() && id.bandara_id_kedatangan.toLowerCase() === tjn.toLowerCase() && id.tanggal === route.params.waktu.toLowerCase());

        let findAll = (HasilFinal.length >= 1) ? DataGet(HasilFinal) : UnvalidData() ;

        return findAll;
        }
    }
}
const styles = StyleSheet.create({

    namaapk: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "bold",
        color: "white"
    },

    teksDiBox: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        paddingVertical: 5,
    },

    tidakditemukan: {
        color: "red",
        fontSize: 15,
        fontWeight: "bold",
        paddingVertical: 150,
    },

    boxlist: {
        width: 350,
        height: 100,
        marginBottom: 40,
        borderRadius: 5,
        shadowOpacity: 0.5,
        shadowRadius: 15.5,
        backgroundColor: "white",
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

    header:{
        alignItems:'center',
        backgroundColor: 'gray',
        height: 150,
    },

    findD:{
        marginVertical: 20,
        marginHorizontal: 10,
        alignItems: 'center',
    },
      
});


export default Screen2;