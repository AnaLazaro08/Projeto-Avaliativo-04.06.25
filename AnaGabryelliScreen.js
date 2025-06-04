import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../src/styles/SobreMimScreenStyles';

export default function SobreMimScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Sobre Mim</Text>

        <Image 
      source={require('../assets/eudesenho.jpg')}  // Caminho correto da imagem local
      style={styles.profileImage}
        />


      <Text style={styles.name}>Ana Gabryelli Lazaro</Text>
      <Text style={styles.text}>
       Estou no último ano do curso técnico de Desenvolvimento de Sistemas no SENAI e me preparando para começar na área como desenvolvedora Front-End. Tenho conhecimentos em HTML, CSS, JavaScript, EJS, além de alguma experiência com Back-End e banco de dados. Gosto de entender como as tecnologias funcionam e estou sempre buscando aprender mais.
      </Text>

      <Text style={styles.sectionTitle}>Habilidades</Text>
      <Text style={styles.text}>• HTML, CSS, JavaScript, HTML, EJS</Text>
      <Text style={styles.text}>• Metodologias ágeis como Scrum e Kanban</Text>
      <Text style={styles.text}>• GitHub</Text>
      <Text style={styles.text}>• Banco de Dados (SQL)</Text>

      <Text style={styles.sectionTitle}>Objetivos</Text>
      <Text style={styles.text}>
        Atuar como desenvolvedora de software, contribuindo com soluções eficientes e modernas, e aplicando os conhecimentos adquiridos ao longo da graduação em projetos reais, com foco em qualidade de código, usabilidade e performance.
      </Text>
    </ScrollView>
  );
}
