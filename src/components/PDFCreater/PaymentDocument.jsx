import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
    family: "SpoqaHanSans",
    src: "https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@2.1/SpoqaHanSansNeo-Regular.ttf",
  });
  
const styles = StyleSheet.create({
    layout: {
      padding: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      height: "90%",
    },
    table: {
      width: 636,
      height: 700,
      borderWidth: 2,
      borderColor: "#000",
      textAlign: "center",
      fontSize: 30,
    },
    row: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#000",
    },
    cell: {
      flex: 1,  // colSpan을 대체
      borderRightWidth: 1,
      borderRightColor: "#000",
      padding: 10,
      fontSize: 30,
      fontFamily: "SpoqaHanSans",
    },
    headerTitle: {
      width: "100%",  // colSpan 대체
      height: 150,
      fontSize: 30,
      fontFamily: "SpoqaHanSans",
      marginBottom: 10,
    },
    money: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "right",
      paddingRight: 20, // wordSpacing 대체
    },
    note: {
      fontSize: 20,
      marginTop: 10,
      fontFamily: "SpoqaHanSans",
    },
  });
  
  const PaymentDocument = () => (
    <Document>
      <Page size="A4" style={styles.layout}>
        <View style={styles.table}>
          {/* Header */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.headerTitle]}>
              영 수 증
            </Text>
          </View>
  
          <View style={styles.row}>
            <Text style={styles.cell}>차트번호</Text>
            <Text style={styles.cell}>1</Text>
            <Text style={styles.cell}>진료과</Text>
            <Text style={styles.cell}>소아과</Text>
          </View>
  
          <View style={styles.row}>
            <Text style={styles.cell}>영수액</Text>
            <Text style={[styles.cell, styles.money]}>원</Text>
          </View>
  
          <View>
            <Text style={styles.note}>위 금액을 영수함</Text>
            <Text style={styles.note}>2025년 03월 27일</Text>
            <Text style={styles.note}>담당확인: ㅇㅇ</Text>
            <Text style={styles.note}>
              이 계산서는 소득공제 납입 증명서로 사용할 수 있습니다.
            </Text>
            <Text style={styles.note}>담당자 확인이 없는 것은 무효입니다.</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

export default PaymentDocument;
