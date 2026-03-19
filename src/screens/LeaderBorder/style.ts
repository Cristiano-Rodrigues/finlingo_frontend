import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F0F4FF'
    },

     tabs: {
    flexDirection: 'row',
    borderRadius: 25,
    padding: 4,
    marginBottom: 20,
    marginTop:10,
  },

   tabButton: {
    flex:1,
    paddingVertical:8,
    paddingHorizontal:60,
    alignItems: 'center',
    borderRadius: 14
  },

  activeTab: {
        backgroundColor: '#0597F6',
  },

   activeText: {
    color: '#FFFFFF'
  },

   tabText: {
    color: '#82D1F6',
    fontWeight: '600'
  },

  message: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#FFC800',
    paddingVertical:11,
    paddingHorizontal: 12,
    borderRadius:10,
    maxWidth: '70%',
    marginBottom: 10
  },

  cheerMessage: {
    color: 'white',
    fontSize:15
  },

  messageDescription: {
    flexShrink:1,
  },

  messageText: {
    height: '90%',
    display: 'flex',
    flexShrink: 1
  },

  topPlayers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: -10
  },
  
  topPlayerDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5
  },
  topUserContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  topUserName: {
    color: '#777777',
    fontWeight: 'bold',
    marginBottom: 8
  },

  topUserXp: {
    color: '#FFC800',
    fontWeight: 'bold'
  },

  nonTopUserContainer: {
     display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#F0F4FF',
     width: 345,
     paddingHorizontal:20,
     paddingVertical: 8,
     gap:8,
     borderRadius:8,
  },

  nonTopUserInfo: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    gap: 10
  },

  nonTopUserName: {
    color: '#4B4B4B',
    fontWeight: 'bold'
  },

  nonTopUserXp: {
    color: '#FFC800',
    fontWeight: 'bold'
  },

  nonTopPosition: {
    color: '#737373',
    fontWeight: 'bold',
    backgroundColor: 'white',
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
  },

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
  }
})

