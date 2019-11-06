import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: 5,
  },

  containerEntrada: {
    backgroundColor: colors.dark,
    padding: 10,
    marginBottom: 10,
  },

  containerSaida: {
    backgroundColor: colors.dark,
    padding: 10,
  },

  textoSaida: {
    marginTop: metrics.baseMargin,
    backgroundColor: colors.white,
    height: 100,

  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 14,
    color: colors.light,
    lineHeight: 21,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
