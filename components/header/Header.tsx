import BottomSheetBottom from "@/app/DraggableBottomSheet";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { SearchTrigger } from "../../app/MainHeader";
import { LogoHeader } from "./Logo.component";
import Promo from "./Promo";

// --- Configuration & Data (Enhanced) ---
const CONFIG = {
  ar: {
    dir: "rtl",
    promo: "شحن مجاني للطلبات فوق 300 ريال - كود: VOGUE2024",
    searchPlaceholder: "ابحث عن فستان، حذاء، أو إكسسوار...",
    cart: {
      title: "حقيبة التسوق",
      empty: "لا توجد منتجات",
      total: "الإجمالي التقديري",
      checkout: "إتمام الشراء",
      freeShipping: "شحن مجاني",
    },
    nav: [
      {
        title: "الرجال",
        featured: {
          title: "وصل حديثاً",
          desc: "تشكيلة الربيع 2024",
          href: "/men/new",
          image: "https://via.placeholder.com/150",
        },
        items: [
          {
            title: "سترات وقمصان",
            href: "/men/tops",
            desc: "أناقة يومية مريحة",
            image: "https://via.placeholder.com/100",
          },
          {
            title: "بناطيل جينز",
            href: "/men/jeans",
            desc: "جودة تدوم طويلاً",
            image: "https://via.placeholder.com/100",
          },
          {
            title: "سترات",
            href: "/men/jackets",
            desc: "أناقة يومية مريحة",
            image: "https://via.placeholder.com/100",
          },
          {
            title: "جينز",
            href: "/men/jeans",
            desc: "جودة تدوم طويلاً",
            image: "https://via.placeholder.com/100",
          },
        ],
      },
      {
        title: "النساء",
        featured: {
          title: "الأكثر مبيعاً",
          desc: "فساتين السهرة الفاخرة",
          href: "/women/trending",
          image: "https://via.placeholder.com/150",
        },
        items: [
          {
            title: "فساتين",
            href: "/women/dresses",
            desc: "لكل مناسبة قصة",
            image: "https://via.placeholder.com/100",
          },
          {
            title: "حقائب يد",
            href: "/women/bags",
            desc: "إكسسوارات تكمل مظهرك",
            image: "https://via.placeholder.com/100",
          },
        ],
      },
    ],
  },
  en: {
    dir: "ltr",
    promo: "FREE SHIPPING ON ORDERS OVER $100 - CODE: VOGUE24",
    searchPlaceholder: "Search for dresses, shoes, accessories...",
    cart: {
      title: "Shopping Bag",
      empty: "Bag is empty",
      total: "Estimated Total",
      checkout: "Checkout",
      freeShipping: "Free Shipping",
    },
    nav: [
      {
        title: "Men",
        featured: {
          title: "New Arrival",
          desc: "Spring 2024 Collection",
          href: "/men/new",
          image: "https://via.placeholder.com/150",
        },
        items: [
          {
            title: "Tops & Shirts",
            href: "/men/tops",
            desc: "Daily comfort & style",
            image: "https://via.placeholder.com/100",
          },
          {
            title: "Denim & Jeans",
            href: "/men/jeans",
            desc: "Built to last",
            image: "https://via.placeholder.com/100",
          },
        ],
      },
      {
        title: "Women",
        featured: {
          title: "Best Sellers",
          desc: "Luxury Evening Gowns",
          href: "/women/trending",
          image: "https://via.placeholder.com/150",
        },
        items: [
          {
            title: "Dresses",
            href: "/women/dresses",
            desc: "A story in every piece",
            image: "https://via.placeholder.com/100",
          },
          {
            title: "Handbags",
            href: "/women/bags",
            desc: "Complete your look",
            image: "https://via.placeholder.com/100",
          },
        ],
      },
    ],
  },
};

// --- Main Header Component ---
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isLangSheetOpen, setIsLangSheetOpen] = useState(false);

  const content = CONFIG[lang];
  const isRTL = lang === "ar";

  return (
    // <View className="">
    // {/* Animated Header */}
    <Animated.View
      style={[
        {
          // backgroundColor: headerBackground,
          // borderBottomWidth: 1,
          // borderBottomColor: "#f0f0f0",
        },
        isScrolled && {
          shadowColor: "#000",
          // shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          // elevation: 4,
        },
      ]}
      // className="absolute top-0 left-0 right-0 z-10"
    >
      {/* Promo Bar */}
      <Promo content={content} />

      {/* Main Header Row */}
      <View className={`flex-row justify-between items-center px-4 py-2`}>
        {/* Left Side: Menu & Language */}
        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            className="p-2 rounded-full"
            onPress={() => setIsMegaMenuOpen(true)}
            activeOpacity={0.7}
          >
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center gap-1 px-2 py-1.5 border border-gray-200 rounded-full"
            onPress={() => setIsLangSheetOpen(true)}
          >
            <Feather name="globe" size={16} color="black" />
            <Text className="text-xs font-bold uppercase">
              {lang.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <LogoHeader />

        {/* Right Side: Icons */}

        <SearchTrigger />

        <BottomSheetBottom />
        {/* <CartSheet ref={cartModalRef} /> */}
      </View>
    </Animated.View>
    // </View>
  );
};

export default Header;
