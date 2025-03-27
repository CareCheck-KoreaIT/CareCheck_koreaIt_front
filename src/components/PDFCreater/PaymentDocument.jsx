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
    padding: 40,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "auto",
  },
  table: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 20,
  },
  titleRow: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  mainRow: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  footerRow: {
    flexDirection: "column",
    height: 200,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  cell: {
    flex: 1,
    height: "100%",
    borderRightWidth: 1,
    borderRightColor: "#000000",
    fontSize: 16,
    fontFamily: "SpoqaHanSans",
  },
  celllast: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    fontFamily: "SpoqaHanSans",
  },
  cellmain: {
    width: "25.1%",
    height: "100%",
    borderRightWidth: 1,
    borderRightColor: "#000000",
    fontSize: 16,
    fontFamily: "SpoqaHanSans",
  },
  noBorderCell: {
    padding: 6,
    height: "100%",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "SpoqaHanSans",
  },
  headerTitle: {
    width: "100%",
    fontSize: 25,
    fontFamily: "SpoqaHanSans",
    textAlign: "center",
    letterSpacing: 5,
  },
  money: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 20,
  },
  note: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: "SpoqaHanSans",
    textAlign: "center",
  },
  signIcon: {
    fontSize: 20,
    marginLeft: 10,
  },
});

const PaymentDocument = ({
  searchPatientData,
  dateString,
  totalPayAdmId,
  username,
}) => (
  <Document>
    <Page size="A4" style={styles.layout}>
      <View style={styles.table}>
        {/* Header */}
        <View style={styles.titleRow}>
          <Text style={styles.headerTitle}>영 수 증</Text>
        </View>

        <View style={styles.mainRow}>
          <Text style={styles.cell}>차트번호</Text>
          <Text style={styles.cell}>{searchPatientData.patientId}</Text>
          <Text style={styles.cell}>진료과</Text>
          <Text style={styles.celllast}>{searchPatientData.clinicDeft}</Text>
        </View>

        <View style={styles.mainRow}>
          <Text style={styles.cellmain}>영수액</Text>
          <Text style={styles.noBorderCell}>일금 {totalPayAdmId} 원</Text>
        </View>

        <View style={styles.mainRow}>
          <Text style={styles.cellmain}>내 용</Text>
          <Text style={styles.noBorderCell}></Text>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.note}>위 금액을 영수함</Text>
          <Text style={styles.note}>{dateString}</Text>
          <Text style={styles.note}>담당확인: {username}</Text>
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
