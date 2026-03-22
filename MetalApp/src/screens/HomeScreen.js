import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, RefreshControl } from "react-native";
import MetalCard from "../components/MetalCard";
import { fetchMetalData } from "../services/api";

const metalsList = ["Gold", "Silver", "Platinum", "Palladium"];

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    metalsList.forEach(loadMetal);
  }, []);

  const loadMetal = async (metal) => {
    setLoading((prev) => ({ ...prev, [metal]: true }));
    setError((prev) => ({ ...prev, [metal]: null }));

    try {
      const result = await fetchMetalData(metal);
      setData((prev) => ({ ...prev, [metal]: result }));
    } catch (err) {
      setError((prev) => ({ ...prev, [metal]: err }));
    } finally {
      setLoading((prev) => ({ ...prev, [metal]: false }));
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await Promise.all(metalsList.map(loadMetal));
    setRefreshing(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#020617" }}>
      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 30 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#f8fafc",
            marginBottom: 15,
          }}
        >
          Precious Metals
        </Text>

        {metalsList.map((metal) => (
          <MetalCard
            key={metal}
            metal={metal}
            data={data[metal]}
            loading={loading[metal]}
            error={error[metal]}
            onPress={() =>
              navigation.navigate("Details", { metalData: data[metal] })
            }
            onPressRetry={() => loadMetal(metal)}
          />
        ))}
      </ScrollView>
    </View>
  );
}