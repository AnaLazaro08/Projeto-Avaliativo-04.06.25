import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e1', // amarelo bem clarinho (fundo suave)
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#6a1b9a', // roxo escuro
    textAlign: 'center',
    textShadowColor: 'rgba(106, 27, 154, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  newsItem: {
    backgroundColor: '#f3e5f5', // roxo super claro para contraste suave
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ce93d8', // roxo claro na borda
    shadowColor: '#6a1b9a', // sombra roxa suave
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // para sombra no Android
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: '#8e24aa', // roxo médio
  },
  description: {
    fontSize: 16,
    color: '#4a148c', // roxo profundo
    lineHeight: 24,
  },
});

export default styles;
