import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e1', // amarelo clarinho suave
    padding: 20,
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#8e24aa', // roxo médio na borda
    shadowColor: '#6a1b9a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // sombra android
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#8e24aa', // roxo médio
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 12,
    color: '#8e24aa', // roxo médio
    borderBottomWidth: 2,
    borderBottomColor: '#fbc02d', // amarelo ouro para destaque da seção
    paddingBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#4a148c', // roxo profundo
    marginBottom: 12,
    lineHeight: 24,
    letterSpacing: 0.3,
  },
});

export default styles;
