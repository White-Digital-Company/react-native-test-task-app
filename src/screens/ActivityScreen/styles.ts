import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: '50%',
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  content: {
    padding: 20,
    marginBottom: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 16,
  },
  taxes: {
    fontSize: 12,
    opacity: 0.5,
  },
  divider: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  subtitle: {
    marginTop: 20,
  },
  description: {
    marginTop: 20,
    fontSize: 14,
    opacity: 0.5,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 25,
    marginTop: 'auto',
  },
  disabled: { 
    opacity: .5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
})
