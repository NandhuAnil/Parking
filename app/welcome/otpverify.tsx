import CustomOtpInput from "@/components/CustomOtpInput";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const { height } = Dimensions.get("window");

export default function Otp() {
  const router = useRouter();
  const [email, setEmail] = useState("Example@gmail.com");
  const handleCodeFilled = (code: string) => {
      Alert.alert('OTP Entered', `Your OTP: ${code}`);
      setTimeout(() => {
        router.push("/welcome/newpass");
      },1000)
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          style={{
            height: height / 2.5,
            marginTop: 100,
            backgroundColor: "transparent",
          }}
          resizeMode="contain"
          source={require("../../assets/images/otpverify.png")}
        />
        <Text style={styles.heading}>Enter Verification Code</Text>
        <Text style={styles.description}>Please enter the code we just send to email</Text>
        <Text style={styles.email}>{email}</Text>
        <CustomOtpInput length={4} onCodeFilled={handleCodeFilled} /> 
        <View style={styles.Btn}>
            <Text style={[styles.description, { paddingHorizontal: 0}]}>Don't receive the code? </Text>
            <TouchableOpacity>
                <Text style={styles.resendBtn}>Resend Code</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing,
  }, 
  heading: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 30
  },
  email: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 30,
    color: Colors.light.tint
  },
  resendBtn: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: Colors.light.tint
  },
  Btn: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});