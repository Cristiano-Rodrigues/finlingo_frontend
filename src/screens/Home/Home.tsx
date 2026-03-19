import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./style";
import { BtnStage } from "../../components/BtnStage/BtnStage";

export function Home() {
    return(
        <ScrollView>
            <View style={styles.container}>
                <BtnStage />
                <BtnStage />
                <BtnStage />
                <BtnStage />
                <BtnStage />
                <BtnStage />
                <BtnStage />
                <BtnStage />
                <BtnStage />
                <BtnStage />
            </View>
        </ScrollView>
    )
}