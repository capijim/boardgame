import { Text, View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import React, {useState} from "react";
import nhauDeData from '../assets/data/nhauDe.json';

const { width, height } = Dimensions.get('window');

export default function NhauDe() {
  const [that, setThat] = useState("Thật")
  const [thach, setThach] = useState("Thách")
  const [tfThat, setTfThat] = useState(true)
  const [tfThach, setTfThach] = useState(true)

  const layNgauNhienThat = () => {
    const danhSachThat = nhauDeData.that;
    const index = Math.floor(Math.random() * danhSachThat.length);
    return danhSachThat[index];
  };

  const layNgauNhienThach = () => {
    const danhSachThach = nhauDeData.thach;
    const index = Math.floor(Math.random() * danhSachThach.length);
    return danhSachThach[index];
  };

  return (
    <ImageBackground 
      source={require('../assets/images/background.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.homeButton}>
            <Text style={styles.buttonText}>HOME</Text>
          </TouchableOpacity>
        </Link>

        <View style={styles.main}>
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: 'rgba(255, 153, 153, 0.9)' }]}
            onPress={() => {
              if (tfThat) {
                setThat(layNgauNhienThat());
                setTfThat(false);
              }
            }}>
            <Text style={styles.cardText}>{that}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, { backgroundColor: 'rgba(153, 255, 153, 0.9)' }]}
            onPress={() => {
              if (tfThach) {
                setThach(layNgauNhienThach());
                setTfThach(false);
              }
            }}>
            <Text style={styles.cardText}>{thach}</Text>
          </TouchableOpacity>
        </View>    

        <TouchableOpacity 
          style={styles.resetButton}
          onPress={()=> {
            setThat("Thật")
            setThach("Thách")
            setTfThat(true)
            setTfThach(true)
          }}>
          <Text style={styles.buttonText}>Lá Mới</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Tạo lớp overlay tối để text dễ đọc hơn
    padding: 20,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  card: {
    width: width * 0.85,
    height: height * 0.3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: 'rgba(0, 122, 255, 0.9)',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginTop: 40,
  },
  resetButton: {
    backgroundColor: 'rgba(255, 107, 107, 0.9)',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
