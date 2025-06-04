import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e1', // amarelo clarinho suave
    padding: 25,
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 15,
    color: '#8e24aa', // roxo médio
    borderBottomWidth: 2,
    borderBottomColor: '#fbc02d', // amarelo ouro para contraste na borda
    paddingBottom: 5,
  },
  text: {
    fontSize: 17,
    color: '#4a148c', // roxo profundo
    lineHeight: 26,
    marginBottom: 15,
    letterSpacing: 0.3,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 18,
    marginRight: 12,
    color: '#fbc02d', // amarelo ouro vibrante
  },
  skillText: {
    fontSize: 16,
    color: '#4a148c',
  },
});

export default styles;
