import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
const { height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: Colors.primary,
          opacity: 0.1,
          width: 350,
          height: 350,
          position: "absolute",
          right: "-20%",
          top: -140,
          borderRadius: 200,
        }}
      ></View>
      <View
        style={{
          opacity: 0.1,
          width: 400,
          height: 400,
          position: "absolute",
          right: "-15%",
          top: -160,
          borderRadius: 200,
          borderColor: Colors.primary,
          borderWidth: 2,
        }}
      ></View>
      <View>
        <ImageBackground
          style={{
            height: height / 2.5,
            marginTop: 100,
          }}
          resizeMode="contain"
          source={require("../assets/car.png")}
        />
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              textAlign: "center",
            }}
          >
            Discover Your Dream Job here
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
              marginTop: Spacing * 2,
            }}
          >
            Explore all the existing job roles based or your interest and study
            major
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: "row",
            gap: 5
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
              opacity: 0.9
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: Colors.onPrimary,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
              borderRadius: Spacing,
              backgroundColor: Colors.gray
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: Colors.text,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
