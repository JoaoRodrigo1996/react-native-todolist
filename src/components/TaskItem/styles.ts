import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#333333",
    borderStyle: "solid",
  },

  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  taskButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#4EA8DE",
  },

  checkboxDone: {
    width: 16,
    height: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#F2F2F2",
    fontSize: 14,
    marginLeft: 12,
  },

  textDone: {
    textDecorationLine: "line-through",
    color: "#F2F2F2",
    fontSize: 14,
    marginLeft: 12,
    opacity: 0.2,
  },

  iconsContainer: {},

  trashButton: {},
});
