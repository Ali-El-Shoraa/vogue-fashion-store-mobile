import { Feather } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function ExploreScreen() {
  const categories = [
    {
      id: "1",
      name: "رجالي",
      image: "https://images.unsplash.com/photo-1488161628813-244a2dcba2aa",
    },
    {
      id: "2",
      name: "نسائي",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    },
    {
      id: "3",
      name: "أطفال",
      image: "https://images.unsplash.com/photo-1519238263530-99bbe187c909",
    },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      {/* شريط البحث العلوي */}
      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3 mb-6">
        <Feather name="search" size={20} color="#888" />
        <TextInput
          placeholder="ابحث عن قطعة، موديل، أو لون..."
          className="flex-1 ml-2 text-right" // لتناسب اللغة العربية
        />
      </View>

      <Text className="text-xl font-bold mb-4 text-right">الأقسام</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {categories.map((cat) => (
          <Pressable
            key={cat.id}
            className="mb-4 relative h-40 rounded-2xl overflow-hidden"
          >
            <Image
              source={{ uri: cat.image }}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-black/30 justify-center items-center">
              <Text className="text-white text-2xl font-bold">{cat.name}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

// import { FlashList } from "@shopify/flash-list";
// import { Text, View } from "react-native";

// const DATA = Array.from({ length: 10 }).map((_, i) => ({
//   id: String(i),
//   title: `Product ${i + 1}`,
// }));

// export default function ExploreScreen() {
//   return (
//     <View className="flex-1 bg-white p-4">
//       <Text className="text-2xl font-bold mb-4">Explore</Text>

//       <FlashList
//         data={DATA}
//         renderItem={({ item }) => (
//           <View className="bg-gray-100 rounded-xl p-4 mb-3">
//             <Text className="font-bold">{item.title}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         estimatedItemSize={80 as any}
//       />
//     </View>
//   );
// }
