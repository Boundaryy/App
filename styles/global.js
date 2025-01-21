import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
  },
  logincontainer: {
    width:"100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom:20,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    fontSize: 14,
    color: '#808080',
  },
  header: {
    padding: 15,
    paddingTop: 20, // 상단 패딩 줄임
  },
  title: {
    fontSize: 16, // 폰트 크기 줄임
    fontWeight: 'bold',
    color: '#5772FF',
  },
  subtitle: {
    fontSize: 26, // 폰트 크기 줄임
    whiteSpace:"nowrap",
    fontWeight: '700',
  },
  description: {
    fontSize: 15, // 폰트 크기 줄임
    textAlign: 'left',
    color: '#898989',
    marginBottom: 10, // 하단 마진 줄임
    marginTop: -10,
  },
  formGroup: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backText: {
    fontSize: 18,
    color: '#808080',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#5772FF',
    fontSize: 18,
    color: '#5772FF',
    width: '100%',
  },
});