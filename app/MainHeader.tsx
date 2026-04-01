import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // الاعتماد الكلي على router في Expo
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * 1. مكون الزر (SearchTrigger)
 * يُستورد في الهيدر الرئيسي لفتح صفحة البحث.
 */
export const SearchTrigger = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="p-2 rounded-full" // لون خلفية خفيف للزر
      onPress={() => router.push("/MainHeader")} // يفتح هذا الملف كصفحة كاملة
      activeOpacity={0.7}
    >
      <Feather name="search" size={22} color="black" />
    </TouchableOpacity>
  );
};

/**
 * 2. شاشة البحث الكاملة (SearchScreen)
 * هي المكون الافتراضي الذي يعرضه Expo Router عند الانتقال للمسار.
 */
const SearchScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* هيدر صفحة البحث */}
      <View className="flex-row items-center p-4 gap-4 border-b border-gray-100">
        {/* زر الإغلاق/الرجوع */}
        <TouchableOpacity
          onPress={() => router.back()} // يغلق المودال ويعود للخلف
          className="p-1"
        >
          {/* arrow-right للغة العربية، arrow-left للانجليزية */}
          <Feather name="arrow-right" size={24} color="black" />
        </TouchableOpacity>

        {/* حقل الإدخال */}
        <TextInput
          autoFocus
          placeholder="ابحث عن منتجات..."
          placeholderTextColor="#9CA3AF"
          className="flex-1 text-lg font-bold text-right py-1" // يدعم الكتابة من اليمين
          returnKeyType="search"
        />

        <Feather name="search" size={20} color="#9CA3AF" />
      </View>

      {/* محتوى الصفحة (النتائج) */}
      <View className="flex-1 justify-center items-center px-10">
        <Feather name="shopping-bag" size={60} color="#F3F4F6" />
        <Text className="text-gray-400 text-center mt-4 leading-6">
          ابدأ البحث عن أناقتك اليوم...{"\n"}أحدث الموديلات بانتظارك.
        </Text>
      </View>
    </SafeAreaView>
  );
};

// التصدير الافتراضي هو ما يجعل Expo Router يتعرف عليه كصفحة
export default SearchScreen;
