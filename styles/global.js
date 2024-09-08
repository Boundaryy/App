import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    width:"100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    fontSize: 14,
    color: '#808080',
  },
  header: {
    position: "absolute",
    top: "50px",
    left: "50px",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5772FF',
  },
  subtitle: {
    fontSize: 28,
    whiteSpace:"nowrap",
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    color: '#898989',
    marginBottom: 20,
  },
  formGroup: {
    width: "75%",
    margin: "40 0",
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
  },
  input: {
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#5772FF',
      fontSize: 18,
      color: '#5772FF',
      marginBottom: 20,
  },
});