import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

export default function MetalCard({
  metal,
  data,
  loading,
  error,
  onPress,
  onPressRetry,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: metal === "gold" ? "#f59e0b" : "#1e293b",
        padding: 16,
        borderRadius: 16,
        marginBottom: 15,
      }}
    >
      {/* METAL NAME */}
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
        {metal.charAt(0).toUpperCase() + metal.slice(1)}
      </Text>

      {/* LOADING */}
      {loading && <ActivityIndicator color="#38bdf8" style={{ marginTop: 10 }} />}

      {/* ERROR */}
      {error && (
        <Text style={{ color: "red", marginTop: 10 }}>
          Error loading. Tap to retry.
        </Text>
      )}

      {/* DATA */}
      {!loading && !error && data && (
        <>
          <Text style={{ fontSize: 18, color: "#38bdf8", marginTop: 8 }}>
            ₹ {data.price}
          </Text>

          {/* ✅ TIMESTAMP */}
          <Text style={{ color: "#94a3b8", marginTop: 5 }}>
            Updated:{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}