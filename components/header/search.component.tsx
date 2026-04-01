import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// --- Search Modal with suggestions ---
export const SearchModal = ({ visible, onClose, placeholder }: any) => {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [suggestions] = useState([
    "فساتين",
    "حقائب يد",
    "أحذية رياضية",
    "تي شيرت",
    "جينز",
  ]);

  const handleSearch = (text: string) => {
    if (text.trim()) {
      setRecentSearches((prev) =>
        [text, ...prev.filter((s) => s !== text)].slice(0, 5),
      );
      // Perform search logic here
    }
  };

  const clearRecent = () => setRecentSearches([]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-white">
        <SafeAreaView className="flex-1 p-4">
          <View className="flex-row items-center gap-4 border-b-2 border-black pb-2">
            <Feather name="search" size={24} color="black" />
            <TextInput
              autoFocus
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={() => handleSearch(query)}
              placeholder={placeholder}
              className="flex-1 text-xl font-bold text-black p-0"
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {query === "" && (
            <>
              {recentSearches.length > 0 && (
                <View className="mt-6">
                  <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-gray-500 text-sm">
                      {placeholder.includes("عربي")
                        ? "عمليات البحث الأخيرة"
                        : "Recent Searches"}
                    </Text>
                    <TouchableOpacity onPress={clearRecent}>
                      <Text className="text-xs text-red-500">
                        {placeholder.includes("عربي")
                          ? "مسح الكل"
                          : "Clear All"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {recentSearches.map((item, idx) => (
                    <TouchableOpacity
                      key={idx}
                      className="py-2 flex-row items-center gap-2"
                      onPress={() => setQuery(item)}
                    >
                      <Feather name="clock" size={14} color="#999" />
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              <View className="mt-6">
                <Text className="text-gray-500 text-sm mb-2">
                  {placeholder.includes("عربي") ? "اقتراحات" : "Suggestions"}
                </Text>
                {suggestions.map((item, idx) => (
                  <TouchableOpacity
                    key={idx}
                    className="py-2"
                    onPress={() => setQuery(item)}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default function SearchComponent({
  content,
}: {
  content: { searchPlaceholder: string };
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        className="p-2 rounded-full"
        onPress={() => setIsSearchOpen(true)}
      >
        <Feather name="search" size={20} color="black" />
      </TouchableOpacity>

      <SearchModal
        visible={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        placeholder={content.searchPlaceholder}
      />
    </>
  );
}
