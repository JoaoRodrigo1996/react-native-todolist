import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  header: {
    width: "100%",
    height: 219,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
  },

  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
  },

  form: {
    flexDirection: "row",
    marginTop: -30,
    marginBottom: 32,
  },

  input: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    height: 52,
    borderRadius: 6,
    marginRight: 4,
    padding: 16,
  },

  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonIcon: {
    color: "#F2F2F2",
  },

  taskList: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
  },

  taskHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },

  taskCreated: {
    flexDirection: "row",
    alignItems: "center",
  },

  textCreated: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },

  taskText: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },

  taskDone: {
    flexDirection: "row",
    alignItems: "center",
  },

  textDone: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },

  taskContainer: {
    marginLeft: 8,
    width: 25,
    height: 19,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
});
