import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e1', // amarelo clarinho suave
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 25,
    color: '#6a1b9a', // roxo escuro
    textAlign: 'center',
    textShadowColor: 'rgba(106, 27, 154, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    color: '#4a148c', // roxo profundo
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  courseItem: {
    backgroundColor: '#ede7f6', // roxo bem clarinho
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b39ddb', // roxo claro na borda
    shadowColor: '#6a1b9a',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // sombra Android
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: '#8e24aa', // roxo médio
  },
});

export default styles;
