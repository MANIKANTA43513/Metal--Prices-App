import React from "react";
import { View, Text } from "react-native";

export default function DetailsScreen({ route }) {
  const { metalData } = route.params;
  const now = new Date();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#020617",
      }}
    >
      <Text
        style={{
          fontSize: 26,
          color: "#f8fafc",
          fontWeight: "bold",
        }}
      >
        {metalData.name}
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: "#22d3ee",
          marginTop: 15,
        }}
      >
        Price: ₹ {metalData.price}
      </Text>

      <Text style={{ color: "#cbd5f5", marginTop: 10 }}>
        Open: ₹ {metalData.open}
      </Text>

      <Text style={{ color: "#cbd5f5", marginTop: 5 }}>
        Close: ₹ {metalData.close}
      </Text>

      <Text style={{ color: "#94a3b8", marginTop: 20 }}>
        {now.toDateString()}
      </Text>

      <Text style={{ color: "#94a3b8" }}>
        {now.toLocaleTimeString()}
      </Text>
    </View>
  );
}
