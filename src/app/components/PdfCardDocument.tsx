// PdfCardDocument.tsx
import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

// (Опціонально) додати кастомні шрифти, якщо потрібен український гарний шрифт
// Font.register({ family: "Inter", src: "/fonts/Inter-Regular.ttf" });

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica"
  },
  header: {
    fontSize: 22,
    fontWeight: 700,
    color: "#ffffff",
    backgroundColor: "#000",
    padding: 12,
    marginBottom: 8
  },
  category: { fontSize: 10, color: "#666", marginBottom: 6 },
  title: { fontSize: 18, fontWeight: 700, marginBottom: 8 },
  body: { fontSize: 12, lineHeight: 1.4, marginBottom: 10 },
  violationsTitle: { fontSize: 12, fontWeight: 700, marginBottom: 6 },
  violationsList: { marginLeft: 8 },
  footer: { position: "absolute", bottom: 30, left: 40, right: 40, fontSize: 10, color: "#555" }
});

export default function PdfCardDocument({ items }: { items: any[] }) {
  return (
    <Document>
      {items.map((it) => (
        <Page size="A4" style={styles.page} key={it.id}>
          <View style={{ marginBottom: 6 }}>
            <Text style={styles.header}>ДОКАЗ № — ROTTENLEMON</Text>
          </View>

          <Text style={styles.category}>{it.category}</Text>
          <Text style={styles.title}>{it.title}</Text>

          <Text style={styles.body}>{it.text}</Text>

          <Text style={styles.violationsTitle}>Порушує:</Text>
          <View style={styles.violationsList}>
            {it.violations?.map((v: string, idx: number) => (
              <Text key={idx}>• {v}</Text>
            ))}
          </View>

          <Text style={styles.footer}>
            Джерело: перелік злочинів — “ГНИЛИЙ ЛИМОН”. Документація і стандарти: Міжнародні пакти та ЄКПЛ.
          </Text>
        </Page>
      ))}
    </Document>
  );
}