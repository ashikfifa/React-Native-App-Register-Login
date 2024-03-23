import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className=" h-full w-full absolute"
        source={require("../assets/background.png")}
      />

      {/* lights */}

      <View className="w-full flex-row justify-around absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require("../assets/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[90]"
          source={require("../assets/light.png")}
        />
      </View>

      {/* title and form */}

      <View className=" h-full w-full flex justify-around pt-40">
        {/* Title */}

        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000)}
            className="text-white font-bold text-5xl tracking-wider"
          >
            Register
          </Animated.Text>
        </View>

        {/* Form */}

        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeIn.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Name" placeholderTextColor={"gray"} />
          </Animated.View>

          <Animated.View
            entering={FadeIn.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity className="w-full bg-sky-400 rounded-2xl mb-3">
              <Text className="p-2 text-2xl text-white font-bold text-center">
                {" "}
                Login{" "}
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push("LogIn")}>
              <Text className=" text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
