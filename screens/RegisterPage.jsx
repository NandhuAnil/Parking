import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";

const LoginScreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordShown1, setIsPasswordShown1] = useState(false);
  return (
    <SafeAreaView>
      <View 
        style={{
          backgroundColor: Colors.primary,
          opacity: 0.1,
          width: 350,
          height: 350,
          position: 'absolute',
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
          position: 'absolute',
          right: "-15%",
          top: -160,
          borderRadius: 200,
          borderColor: Colors.primary,
          borderWidth: 2
        }}
      ></View>
      <View
        style={{
          padding: Spacing * 2,
          marginTop: 20
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: 16,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Create an account to reduce your Time
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" cursorColor={Colors.primary}/>
          <View>
            <AppTextInput placeholder="Password" secureTextEntry={!isPasswordShown} cursorColor={Colors.primary} />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
                marginVertical: Spacing * 3,
              }}
            >
              {isPasswordShown ? (
                <Ionicons name="eye-off" size={24} color={Colors.black} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.black} />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <AppTextInput placeholder="Confirm Password" secureTextEntry={!isPasswordShown1} cursorColor={Colors.primary} />
            <TouchableOpacity
              onPress={() => setIsPasswordShown1(!isPasswordShown1)}
              style={{
                position: "absolute",
                right: 12,
                marginVertical: Spacing * 3,
              }}
            >
              {isPasswordShown1 ? (
                <Ionicons name="eye-off" size={24} color={Colors.black} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.button,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.button,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
            marginTop: -10,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            padding: Spacing,
            backgroundColor: Colors.gray,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});