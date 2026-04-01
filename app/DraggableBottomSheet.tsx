import { Feather } from "@expo/vector-icons";
import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useMemo } from "react";

export default function GlobalCart() {
  const sheetRef = useRef<any>(null);

  const openCart = () => {
    sheetRef.current?.present(); // 🔥 هنا الفرق
  };

  return (
    <>
      <View>
        <TouchableOpacity
          className="flex-row items-center bg-black rounded-full px-4 py-3 gap-2"
          onPress={openCart}
        >
          <Feather name="shopping-bag" size={18} color="white" />
          <Text className="text-white text-xs font-bold">2</Text>
        </TouchableOpacity>
      </View>

      {/* الشيت */}
      <CartSheet ref={sheetRef} />
    </>
  );
}

export const CartSheet = forwardRef((props, ref: any) => {
  const snapPoints = useMemo(() => ["50%", "90%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>سلة المشتريات</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
});
