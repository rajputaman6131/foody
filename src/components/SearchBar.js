import React from 'react';
import {View,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'; 


const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
              />
              <TouchableOpacity 
              style={styles.iconContainer}
              onPress={onTermSubmit}
              >
                <Feather name="search" style={styles.iconStyle} />
              </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    backgroundStyle:{
        marginVertical:15,
        backgroundColor:'#f0eeee',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
    },
    inputStyle:{
        // borderColor:'black',
        // borderWidth:1,
        backgroundColor: 'white',
        borderColor: '#f0eeee',
        borderWidth: 1,
        // overflow: 'hidden',
        // shadowColor: '#f0eeee',
        // shadowRadius: 10,
        // shadowOpacity: 1,
        paddingHorizontal:20,
        fontSize:18, 
        flex:1,
    },
    iconContainer:{
        alignSelf:'center'
    },
    iconStyle:{
        fontSize:25,
        alignSelf:'center',
        marginHorizontal:20,
        
    }
})

export default SearchBar;