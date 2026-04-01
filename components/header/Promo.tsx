import { Feather } from "@expo/vector-icons";

import { Text, View } from "react-native";

export default function Promo({ content }: { content: { promo: string } }) {
  return (
    <View className="bg-black py-2 items-center">
      <View className="flex-row items-center gap-2">
        <Feather name="zap" size={12} color="#FCD34D" />
        <Text className="text-white text-[10px] font-bold tracking-wide">
          {content.promo}
        </Text>
      </View>
    </View>
  );
}
