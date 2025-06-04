// src/styles/SettingsScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#fff8e1', // amarelo clarinho suave
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#3a1a55', // roxo escuro (mais suave que preto)
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  textLight: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a1b9a', // roxo escuro
    marginBottom: 20,
  },
  textDark: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fbc02d', // amarelo ouro vibrante
    marginBottom: 20,
  },
  buttonLight: {
    backgroundColor: '#8e24aa', // roxo médio
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonDark: {
    backgroundColor: '#fbc02d', // amarelo ouro
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonTextLight: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextDark: {
    color: '#3a1a55', // roxo escuro para texto em botão amarelo
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerLight: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: '#6a1b9a', // roxo escuro
  },
  footerDark: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: '#fbc02d', // amarelo ouro
  },
});

export default styles;
