import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export function LogoHeader() {
  return (
    // 'href' هو المسار الذي تريد الذهاب إليه (مثل "/" للرئيسية)
    // 'asChild' تخبر المكون بأن يستخدم المكون الداخلي كـ Touchable
    <Link href="/" asChild>
      <TouchableOpacity>
        <Text className="text-2xl font-black tracking-tighter">
          VOGUE<Text className="text-red-500">.</Text>
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
