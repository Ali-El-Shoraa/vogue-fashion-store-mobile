import EditScreenInfo from "@/components/EditScreenInfo";
import { useScrollToTop } from "@react-navigation/native";
import { FlashList, FlashListRef } from "@shopify/flash-list";
import React, { useRef } from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

// 1. البيانات (تخيلها قادمة من API)
const PRODUCTS_DATA = [
  { id: "1", title: "قميص قطني فاخر", price: "150 ريال", color: "bg-red-700" },
  { id: "2", title: "جاكيت شتوي", price: "300 ريال", color: "bg-blue-800" },
  { id: "3", title: "حذاء رياضي", price: "250 ريال", color: "bg-gray-800" },
  { id: "4", title: "ساعة يد أنيقة", price: "500 ريال", color: "bg-green-900" },
  { id: "5", title: "نظارة شمسية", price: "120 ريال", color: "bg-yellow-700" },
];

interface Product {
  id: string;
  title: string;
  price: string;
  color: string;
}
// 2. مكون الكارت (تحسين التنسيق ليعمل مع الشبكة)
const ProductCard = ({ item }: { item: Product }) => (
  <View className="flex-1 p-2">
    <Card className={`${item.color} rounded-2xl`}>
      <Card.Content>
        <Text className="!text-white text-xl !font-bold text-center h-14">
          {item.title}
        </Text>
        <Text className="text-white text-lg mt-4 font-semibold text-center">
          {item.price}
        </Text>
      </Card.Content>
      <Card.Actions className="justify-center pb-4">
        <Button
          mode="contained"
          buttonColor="black"
          className="rounded-lg"
          textColor="white"
          onPress={() => {}}
        >
          شراء
        </Button>
      </Card.Actions>
    </Card>
  </View>
);

export default function TabOneScreen() {
  const listRef = useRef<FlashListRef<any>>(null);

  // 2. ربط التبويب بالمرجع (هذا السطر هو كل ما تحتاجه للضغط المزدوج)
  useScrollToTop(listRef);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlashList<Product>
        ref={listRef} // ضروري جداً ربط الـ ref هنا
        data={PRODUCTS_DATA}
        renderItem={({ item }: { item: Product }) => (
          <ProductCard item={item} />
        )}
        keyExtractor={(item) => item.id}
        // 💡 أهم خاصية في FlashList: الطول التقريبي للعنصر الواحد
        // @ts-ignore --- (هذا السطر سيخفي الخط الأحمر مؤقتاً لتتمكن من التجربة)
        estimatedItemSize={200}
        // لعرض منتجين بجانب بعض (مثل المواقع الاحترافية)
        numColumns={2}
        // الهيدر: يوضع فيه البنرات والأقسام الثابتة
        ListHeaderComponent={() => (
          <View className="p-4 items-center">
            <Text className="text-3xl font-black mb-2">متجر الفاشن</Text>
            <View className="w-full h-40 bg-gray-100 rounded-3xl items-center justify-center mb-4">
              <Text className="text-gray-400">إعلان هيدر (Banner)</Text>
            </View>
          </View>
        )}
        // الفوتر: يظهر في نهاية القائمة
        ListFooterComponent={() => (
          <View className="py-10 items-center">
            {/* <ActivityIndicator color="red" />
            <Text className="mt-4 text-gray-400">تحميل المزيد...</Text> */}
            <EditScreenInfo path="app/(tabs)/index.tsx" />
          </View>
        )}
        // تنسيق الحاوية (Padding للقائمة ككل)
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// import { StyleSheet } from "react-native";

// import EditScreenInfo from "@/components/EditScreenInfo";
// import { View } from "@/components/Themed";

// // import { ScrollView } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// // import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
// import { Button, Card, Text } from "react-native-paper";

// function Home() {
//   return (
//     // أزلنا flex-1 واستخدمنا w-full لضمان ملء العرض
//     <View className="w-full p-4">
//       <Card className="bg-red-700 m-2">
//         <Card.Content>
//           <Text className="!text-white text-3xl !font-bold text-center">
//             قميص قطني فاخر
//           </Text>
//           <Text className="text-white text-2xl mt-14">سعر: 150 ريال</Text>
//         </Card.Content>
//         <Card.Actions>
//           <Button
//             mode="contained"
//             buttonColor="black"
//             className="!rounded-md"
//             textColor="white"
//             onPress={() => {}}
//           >
//             شراء الآن
//           </Button>
//         </Card.Actions>
//       </Card>
//     </View>
//   );
// }

// // 2. تعديل الشاشة الرئيسية
// export default function TabOneScreen() {
//   return (
//     <ScrollView
//       // flexGrow تضمن أن الخلفية تملأ الشاشة مع السماح بالتمدد
//       contentContainerStyle={{ flexGrow: 1 }}
//       showsVerticalScrollIndicator={true}
//     >
//       {/* تأكد أن هذا الـ View لا يحبس المحتوى */}
//       <View style={styles.container}>
//         <Home />
//         {/* نكرر المكون لاختبار التمرير */}
//         <Home />
//         <Home />

//         <Text style={styles.title}>Tab One</Text>
//         <View
//           style={styles.separator}
//           lightColor="#eee"
//           darkColor="rgba(255,255,255,0.1)"
//         />
//         <EditScreenInfo path="app/(tabs)/index.tsx" />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1, // مهم جداً ليعمل التمرير مع flex بشكل صحيح
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingVertical: 20, // إضافة مساحة من الأعلى والأسفل
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });
