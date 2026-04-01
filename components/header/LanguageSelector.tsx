import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { DraggableBottomSheet } from "./Header";

// --- Language Selection Bottom Sheet ---
export const LanguageSelector = ({
  visible,
  onClose,
  currentLang,
  onSelectLang,
}: any) => {
  const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "en", name: "English", flag: "🇬🇧" },
  ];

  return (
    <DraggableBottomSheet
      visible={visible}
      onClose={onClose}
      snapPoints={[0.4]}
    >
      <View className="p-4">
        <Text className="text-xl font-bold text-center mb-4">
          {currentLang === "ar" ? "اختر اللغة" : "Select Language"}
        </Text>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            className={`flex-row items-center justify-between p-4 rounded-xl mb-2 ${
              currentLang === lang.code ? "bg-gray-100" : ""
            }`}
            onPress={() => {
              onSelectLang(lang.code);
              onClose();
            }}
          >
            <View className="flex-row items-center gap-3">
              <Text className="text-2xl">{lang.flag}</Text>
              <Text className="text-lg">{lang.name}</Text>
            </View>
            {currentLang === lang.code && (
              <Feather name="check" size={20} color="black" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </DraggableBottomSheet>
  );
};
