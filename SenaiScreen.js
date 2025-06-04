import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from '../src/styles/SenaiScreenStyles.js';

export default function SenaiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sobre o SENAI</Text>
      <Text style={styles.description}>
        O Serviço Nacional de Aprendizagem Industrial (SENAI) é uma das principais instituições de educação profissional do Brasil, preparando jovens e adultos para o mercado de trabalho.
      </Text>

      <Text style={styles.header}>Cursos em Destaque</Text>
      <FlatList
        data={coursesData}
        renderItem={({ item }) => <CourseItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const coursesData = [
  { id: '1', title: 'Técnico em Mecânica', description: 'Curso voltado à manutenção e operação de sistemas mecânicos.' },
  { id: '2', title: 'Técnico em Informática', description: 'Foco em programação, redes e manutenção de computadores.' },
  { id: '3', title: 'Eletricista Industrial', description: 'Formação para atuar com instalações elétricas industriais.' },
  { id: '4', title: 'Desenvolvedor Web', description: 'Curso voltado ao desenvolvimento de sites e sistemas web.' },
  { id: '5', title: 'Segurança do Trabalho', description: 'Capacita profissionais para promover saúde e segurança nas empresas.' },
];

const CourseItem = ({ item }) => (
  <View style={styles.courseItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);
