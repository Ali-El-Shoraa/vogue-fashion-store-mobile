import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Badge } from "react-native-paper";

// --- Mega Menu (Improved Layout) ---
export const MegaMenu = ({ visible, onClose, lang, isRTL, CONFIG }: any) => {
  const content = CONFIG[lang];
  const navigation = useNavigation();

  const navigateTo = (href: string) => {
    console.log("Navigate to:", href);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        className="flex-1 bg-black/50"
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          className={`absolute top-0 bottom-0 w-4/5 bg-white shadow-xl ${isRTL ? "right-0" : "left-0"}`}
        >
          <>
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-2xl font-bold tracking-tighter">
                VOGUE<Text className="text-red-500">.</Text>
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {content.nav.map((cat: any) => (
                <View key={cat.title} className="mb-6">
                  <Text className="text-lg font-bold mb-3">{cat.title}</Text>
                  <View className="flex-row flex-wrap justify-between">
                    {cat.items.map((item: any) => (
                      <TouchableOpacity
                        key={item.title}
                        className="w-[48%] mb-4"
                        onPress={() => navigateTo(item.href)}
                      >
                        <View className="bg-gray-100 rounded-xl aspect-square mb-2" />
                        <Text className="font-medium">{item.title}</Text>
                        <Text className="text-xs text-gray-500">
                          {item.desc}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  {cat.featured && (
                    <TouchableOpacity
                      className="mt-2 p-3 bg-gray-100 rounded-xl flex-row items-center gap-3"
                      onPress={() => navigateTo(cat.featured.href)}
                    >
                      <View className="w-12 h-12 bg-gray-200 rounded-full" />
                      <View>
                        <Badge className="bg-black self-start mb-1">
                          {cat.featured.title}
                        </Badge>
                        <Text className="font-bold">{cat.featured.desc}</Text>
                        <Text className="text-xs text-gray-600 mt-1">
                          {lang === "ar" ? "اكتشف التشكيلة →" : "Explore Now →"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>
          </>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
