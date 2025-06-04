import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from '../src/styles/CursoScreenStyles.js';

export default function DesenvolvimentoSistemasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Curso: Desenvolvimento de Sistemas</Text>

      <Text style={styles.sectionTitle}>Descrição</Text>
      <Text style={styles.text}>
        O curso técnico em Desenvolvimento de Sistemas do SENAI prepara o aluno para criar, testar e manter sistemas computacionais, utilizando linguagens de programação, bancos de dados e ferramentas modernas de desenvolvimento.
      </Text>

      <Text style={styles.sectionTitle}>O que você vai aprender</Text>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.text}>Lógica de Programação</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.text}>Programação Orientada a Objetos</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.text}>Desenvolvimento Web e Mobile</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.text}>Banco de Dados e SQL</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.text}>Versionamento com Git</Text>
      </View>

      <Text style={styles.sectionTitle}>Duração</Text>
      <Text style={styles.text}>1200 horas (aproximadamente 18 meses)</Text>

      <Text style={styles.sectionTitle}>Pré-requisitos</Text>
      <Text style={styles.text}>Estar cursando ou ter concluído o Ensino Médio.</Text>
    </ScrollView>
  );
}
