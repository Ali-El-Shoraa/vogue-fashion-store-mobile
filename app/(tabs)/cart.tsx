import { Pressable, Text, View } from "react-native";

export default function CartScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-6 text-right mt-10">
        حقيبة التسوق
      </Text>

      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-400">لا توجد منتجات في الحقيبة حالياً</Text>
      </View>

      {/* زر إتمام الشراء يظهر دائماً في الأسفل */}
      <View className="border-t border-gray-100 pt-4">
        <View className="flex-row justify-between mb-4">
          <Text className="text-lg font-bold">0 ج.م</Text>
          <Text className="text-lg text-gray-600">الإجمالي</Text>
        </View>
        <Pressable className="bg-black py-4 rounded-full items-center">
          <Text className="text-white font-bold text-lg">إتمام الشراء</Text>
        </Pressable>
      </View>
    </View>
  );
}
