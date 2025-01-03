import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '50%',
  },
  historyEntry: {
    marginBottom: 10,
  },
  historyOperation: {
    fontSize: 20,
    textAlign: 'left',
    padding: 5,
  },
  historyResult: {
    fontSize: 18,
    textAlign: 'left',
    padding: 5,
    color: '#555',
  },
  historySeparator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
});

const darkStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'black',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '50%',
  },
  historyEntry: {
    marginBottom: 10,
  },
  historyOperation: {
    fontSize: 20,
    textAlign: 'left',
    padding: 5,
    color: '#ccc',
  },
  historyResult: {
    fontSize: 18,
    textAlign: 'left',
    padding: 5,
    color: '#777',
  },
  historySeparator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 5,
  },
});

export { styles, darkStyles };
