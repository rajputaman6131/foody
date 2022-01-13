import React, { useState } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
const SearchScreen=()=>{

    const [term, setTerm] = useState('');
    const [searchApi,results,errorMessage]=useResults();
    
    const filterResultsByPrice=(price)=>{
        return results.filter((result)=>{
            return result.price===price;
        })
    }
    return(
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=>{searchApi(term)}}
                // search={searchApi}    
            />
            {errorMessage?<Text>
                {errorMessage}
            </Text>:null}
            {/* <Text>We have found {results.length} results</Text> */}
            {/* <Text>{}</Text> */}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Splender"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$$')} 
                    title="Ultra Luxurious"
                />
            </ScrollView>
            
        </View>
    );
};

const styles=StyleSheet.create({
    background:{
        backgroundColor:'#fff',
        flex:1
    }
});

export default SearchScreen;