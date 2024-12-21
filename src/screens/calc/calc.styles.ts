import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  input: {
    fontSize: 32,
    marginBottom: 10,
    color : '#333',
  },
  result: {
    fontSize: 48,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
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
  settingsButton: {
    backgroundColor: '#555',
    color: '#fff',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});

export default styles;
