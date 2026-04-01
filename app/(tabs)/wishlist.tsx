import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function WishlistScreen() {
  // مثال لبيانات فارغة حالياً
  const items = [];

  return (
    <View className="flex-1 bg-white justify-center items-center p-6">
      {items.length === 0 ? (
        <>
          <Feather name="heart" size={80} color="#eee" />
          <Text className="text-xl font-bold mt-4 text-gray-800">
            قائمة الأمنيات فارغة
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            احفظ القطع التي تعجبك هنا لتجدها بسهولة لاحقاً
          </Text>
        </>
      ) : (
        <Text>قائمة المنتجات المفضلة</Text>
      )}
    </View>
  );
}
