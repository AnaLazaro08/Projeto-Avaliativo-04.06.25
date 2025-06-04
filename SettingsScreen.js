import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../src/styles/SettingsScreenStyles';


export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);


  const themeStyles = {
    container: darkMode ? styles.containerDark : styles.containerLight,
    text: darkMode ? styles.textDark : styles.textLight,
    button: darkMode ? styles.buttonDark : styles.buttonLight,
    buttonText: darkMode ? styles.buttonTextDark : styles.buttonTextLight,
    footer: darkMode ? styles.footerDark : styles.footerLight,
  };


  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.text}>Configurações</Text>


      <TouchableOpacity
        style={themeStyles.button}
        onPress={() => setDarkMode(!darkMode)}
      >
        <Text style={themeStyles.buttonText}>
          {darkMode ? 'Modo Claro' : 'Modo Noturno'}
        </Text>
      </TouchableOpacity>


      <Text style={themeStyles.footer}>@ 2025 Ana Gabryelli</Text>
    </View>
  );
}


