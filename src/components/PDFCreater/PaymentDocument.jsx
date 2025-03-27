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
  src: "/font/SpoqaHanSansNeo-Regular.ttf",
});

const styles = StyleSheet.create({
  layout: {
    padding: 40, // 패딩을 늘려 여백 확보
    display: "flex",
    justifyContent: "flex-start", // 상단부터 시작하도록 변경
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%", // 높이를 A4 전체에 맞춤
  },
  table: {
    width: "100%", // 전체 너비 사용
    borderWidth: 2,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 24, // 글자 크기를 줄여서 레이아웃 정돈
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  cell: {
    flex: 1,
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    padding: 8,
    fontSize: 24,
    fontFamily: "SpoqaHanSans",
  },
  cell2: {
    flex: 1,
    width: "25%",
    height: "10%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    padding: 8,
    fontSize: 24,
    fontFamily: "SpoqaHanSans",
  },
  noBorderCell: {
    flex: 1,
    padding: 8,
    fontSize: 24,
    fontFamily: "SpoqaHanSans",
  },
  headerTitle: {
    width: "100%",
    height: 120,
    fontSize: 28,
    fontFamily: "SpoqaHanSans",
    textAlign: "center",
    letterSpacing: 5,
  },
  money: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 20,
  },
  note: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "SpoqaHanSans",
    textAlign: "center",
  },
  signIcon: {
    fontSize: 20,
    marginLeft: 10,
  },
});

const PaymentDocument = () => (
  <Document>
    <Page size="A4" style={styles.layout}>
      <View style={styles.table}>
        {/* Header */}
        <View style={styles.row}>
          <Text style={styles.headerTitle}>영 수 증</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>차트번호</Text>
          <Text style={styles.cell}>17</Text>
          <Text style={styles.cell}>진료과</Text>
          <Text style={styles.cell}>소아과</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell2}>영수액</Text>
          <Text style={styles.noBorderCell}>일금 100,000원</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell2}>내 용</Text>
          <Text style={styles.noBorderCell}></Text>
        </View>

        <View>
          <Text style={styles.note}>위 금액을 영수함</Text>
          <Text style={styles.note}>2025년 3월 27일</Text>
          <Text style={styles.note}>
            담당확인: 공인 <Text style={styles.signIcon}>🖐️</Text>
          </Text>
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
