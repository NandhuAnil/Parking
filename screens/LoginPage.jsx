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
            Login here
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: 20,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
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
        </View>

        <View>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: 14,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
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
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
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
            Create new account
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