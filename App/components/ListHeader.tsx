import {Text, View, StyleSheet} from 'react-native';

const Card = ({top, player}) => {
    return (
        <View style={[styles.cardContainer, top === 1 && {height:'120%'}, top === 3 && {height:'110%'}]}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {player.name}
                </Text>    
           </View>
            <Text>{player.name}</Text>
            <View style={[styles.topNumber, top ===1 && {backgroundColor:'gold'}, 
                top===2 && {backgroundColor: 'silver'},
                top===3 && {backgroundColor:'brown'}
            ]}>
                {top}
            </View>
        </View>
    );
}

export const ListHeader = ({dataTop}) => {


    return (
        <View style={styles.topContainer}>
            <Card top={2} player={dataTop[1]}/>
            <Card top={1} player={dataTop[0]}/>
            <Card top={3} player={dataTop[2]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#0476BD',
        marginBottom: 30,
        paddingVertical: 2,
        zIndex: '-1'
    },

    cardContainer:{
       display: 'flex',
       backgroundColor: 'white',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       width: '30%',
       borderRadius: 8,
       height: '90%',
       paddingVertical: 5,
       boxShadow: '5px 5px 20px gray'    
    },
    
  avatar: {
    width: 60,
    height:60,
    borderRadius:30,
    backgroundColor: '#7d6cff',
    marginRight: 12
  },

  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  topNumber:{
    backgroundColor: 'pink',
    height:20,
    width: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  }
});