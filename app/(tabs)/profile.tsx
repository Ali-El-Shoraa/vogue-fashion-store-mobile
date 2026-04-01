import { Feather } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function ProfileScreen() {
  const menuItems = [
    { title: "طلباتي", icon: "package" },
    { title: "العناوين", icon: "map-pin" },
    { title: "طرق الدفع", icon: "credit-card" },
    { title: "الإعدادات", icon: "settings" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-8 items-center border-b border-gray-100">
        <View className="w-24 h-24 bg-gray-200 rounded-full mb-4 items-center justify-center">
          <Feather name="user" size={40} color="#888" />
        </View>
        <Text className="text-xl font-bold">زائر</Text>
        <Pressable className="mt-2">
          <Text className="text-red-600 font-bold">
            تسجيل الدخول / إنشاء حساب
          </Text>
        </Pressable>
      </View>

      <View className="mt-4">
        {menuItems.map((item, index) => (
          <Pressable
            key={index}
            className="flex-row items-center bg-white p-4 border-b border-gray-50"
          >
            <Feather name="chevron-left" size={20} color="#ccc" />
            <Text className="flex-1 text-right mr-4 text-gray-700">
              {item.title}
            </Text>
            <Feather name={item.icon as any} size={22} color="#333" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
