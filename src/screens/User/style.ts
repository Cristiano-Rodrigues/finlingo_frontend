import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
    height: 46,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: '#F0F4FF'
  },

  headerText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  container: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 90,
    backgroundColor: '#F0F4FF'
  },

  userInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 14
  },

  details: {
    backgroundColor: '#0597F2',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12
  },

  badgesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4
  },

  points: {
    color: 'white',
    fontWeight: 'bold'
  },

  userName: {
    color: '#737373',
    fontWeight: 'bold',
  },

  userEmail: {
    color: '#737373'
  }
});