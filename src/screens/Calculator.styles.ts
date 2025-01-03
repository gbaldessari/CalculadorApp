import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    padding: 10,
  },
  savedInput: {
    fontSize: 40,
    marginBottom: 10,
    color: '#333',
    textAlign: 'right',
  },
  input: {
    fontSize: 68,
    marginBottom: 20,
    textAlign: 'right',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  numberButton: {
    backgroundColor: '#777',
    color: '#333',
  },
  operatorButton: {
    backgroundColor: '#ffcc20',
    color: '#fff',
  },
  clearButton: {
    backgroundColor: '#999',
    color: '#fff',
  },
  historyButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
  },
  historyButtonText: {
    color: '#000',
    fontSize: 50,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'flex-end',
    padding: 10,
  },
  savedInput: {
    fontSize: 32,
    marginBottom: 10,
    color: '#ccc',
    textAlign: 'right',
  },
  input: {
    fontSize: 48,
    marginBottom: 20,
    textAlign: 'right',
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  numberButton: {
    backgroundColor: '#555',
    color: '#ccc',
  },
  operatorButton: {
    backgroundColor: '#ffcc20',
    color: '#fff',
  },
  clearButton: {
    backgroundColor: '#999',
    color: '#fff',
  },
  historyButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  historyButtonText: {
    color: '#fff',
    fontSize: 40,
  },
});

export { styles, darkStyles };
