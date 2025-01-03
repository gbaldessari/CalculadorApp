import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 10,
    minWidth: 70,
    aspectRatio: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
  },
  settingsButton: {
    backgroundColor: '#555',
    color: '#fff',
  },
  settingsIcon: {
    color: '#fff',
    fontSize: 35,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 10,
    minWidth: 70,
    aspectRatio: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  settingsButton: {
    backgroundColor: '#333',
    color: '#fff',
  },
  settingsIcon: {
    color: '#fff',
    fontSize: 24,
  },
});

export { styles, darkStyles };
