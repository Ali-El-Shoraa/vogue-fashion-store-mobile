import Header from "@/components/header/Header";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * TabLayout - الهيكل الرئيسي للتبويبات لمتجر الفاشن
 * يتميز بهيدر ثابت في الأعلى وشريط تابات أنيق في الأسفل
 */
export default function TabLayout() {
  return (
    <View className="flex-1 bg-white">
      {/* الهيدر العلوي الموحد لجميع التبويبات */}
      <SafeAreaView edges={["top"]} style={{ backgroundColor: "white" }}>
        <Header />
      </SafeAreaView>

      <Tabs
        screenOptions={{
          // الألوان: الأسود للأيقونة النشطة والرمادي للخاملة (Fashion Look)
          tabBarActiveTintColor: "#dd0000", // الأحمر الداكن يليق بعلامة فاشن
          tabBarInactiveTintColor: "#333",
          headerShown: false, // نخفي الهيدر الافتراضي لأننا وضعنا Header مخصص

          // تنسيق شريط التابات السفلي
          tabBarStyle: {
            height: 65,
            borderTopWidth: 0.5,
            borderTopColor: "#aaa",
            paddingBottom: 20,
            paddingTop: 5,
            backgroundColor: "#fff",
            elevation: 0, // إلغاء الظل الثقيل في أندرويد
            shadowOpacity: 0, // إلغاء الظل في iOS
          },

          // تنسيق الخطوط أسفل الأيقونات
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            // fontFamily: "System", // تأكد من استخدام خط يدعم العربية إذا توفر
          },
        }}
      >
        {/* 1. الشاشة الرئيسية */}
        <Tabs.Screen
          name="index"
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              const isFocused = navigation.isFocused();
              if (isFocused) {
                // إذا ضغط وهو داخل الصفحة بالفعل
                console.log("إعادة تحميل البيانات...");
                // يمكنك هنا استدعاء دالة fetchProducts() مثلاً
              }
            },
          })}
          options={{
            title: "الرئيسية",
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={22} color={color} />
            ),
          }}
        />

        {/* 2. اكتشف (البحث والأقسام) */}
        <Tabs.Screen
          name="explore"
          options={{
            title: "اكتشف",
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={22} color={color} />
            ),
          }}
        />

        {/* 3. المفضلة (Wishlist) */}
        <Tabs.Screen
          name="wishlist"
          options={{
            title: "المفضلة",
            tabBarIcon: ({ color }) => (
              <Feather name="heart" size={22} color={color} />
            ),
          }}
        />

        {/* 4. السلة (Shopping Bag) */}
        <Tabs.Screen
          name="cart"
          options={{
            title: "السلة",
            tabBarIcon: ({ color }) => (
              <Feather name="shopping-bag" size={22} color={color} />
            ),
            // إظهار إشعار أحمر صغير بعدد المنتجات (اختياري)
            tabBarBadge: undefined,
            tabBarBadgeStyle: {
              backgroundColor: "#B91C1C",
              color: "white",
              fontSize: 10,
            },
          }}
        />

        {/* 5. حسابي (Profile) */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "حسابي",
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={22} color={color} />
            ),
          }}
        />

        {/* --- قسم التنظيف: إخفاء الملفات الافتراضية القديمة --- */}

        {/* إخفاء Tab Two إذا كان الملف لا يزال موجوداً في المجلد */}
        <Tabs.Screen
          name="two"
          options={{
            href: null, // هذا السطر هو السحر الذي يخفي الزر نهائياً
          }}
        />
      </Tabs>
    </View>
  );
}

// import Header from "@/components/header/Header";
// import { useColorScheme } from "@/components/useColorScheme";
// import { Feather } from "@expo/vector-icons"; // استيراد أيقونات Feather
// import { Tabs } from "expo-router";
// import { View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <View className="flex-1">
//       <SafeAreaView edges={["top"]} style={{ backgroundColor: "white" }}>
//         <Header />
//       </SafeAreaView>

//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: "#000", // الأسود ملك الأناقة في براندات الفاشن
//           tabBarInactiveTintColor: "#888",
//           headerShown: false,
//           tabBarStyle: {
//             height: 60,
//             borderTopWidth: 0.5,
//             borderTopColor: "#eee",
//             paddingBottom: 8,
//           },
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontWeight: "500",
//           },
//         }}
//       >
//         {/* 1. الرئيسية */}
//         <Tabs.Screen
//           name="index"
//           options={{
//             title: "الرئيسية",
//             tabBarIcon: ({ color }) => (
//               <Feather name="home" size={24} color={color} />
//             ),
//           }}
//         />

//         {/* 2. اكتشف (بديل الأقسام والبحث) */}
//         <Tabs.Screen
//           name="explore"
//           options={{
//             title: "اكتشف",
//             tabBarIcon: ({ color }) => (
//               <Feather name="search" size={24} color={color} />
//             ),
//           }}
//         />

//         {/* 3. المفضلة */}
//         <Tabs.Screen
//           name="wishlist"
//           options={{
//             title: "المفضلة",
//             tabBarIcon: ({ color }) => (
//               <Feather name="heart" size={24} color={color} />
//             ),
//           }}
//         />

//         {/* 4. السلة */}
//         <Tabs.Screen
//           name="cart"
//           options={{
//             title: "السلة",
//             tabBarIcon: ({ color }) => (
//               <Feather name="shopping-bag" size={24} color={color} />
//             ),
//             tabBarBadge: 0, // يمكن تحديثه ديناميكياً عند إضافة منتج
//           }}
//         />

//         {/* 5. حسابي */}
//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: "حسابي",
//             tabBarIcon: ({ color }) => (
//               <Feather name="user" size={24} color={color} />
//             ),
//           }}
//         />

//         {/* إخفاء التبويب الافتراضي القديم */}
//         <Tabs.Screen
//           name="two"
//           options={{
//             href: null, // هذا السطر يمنع ظهور الزر نهائياً
//           }}
//         />
//       </Tabs>
//     </View>
//   );
// }
