import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

export default function ComingSoon() {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});
