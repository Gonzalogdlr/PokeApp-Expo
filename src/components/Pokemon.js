import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import PokemonCart from "./PokemonCard"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function Pokemon() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPokemon(json);
        console.log(pokemon.results,"Hola")
        setLoading(false)
      });
  }, []);

  return (
    (loading? <Text>AAAAAAAAAAAAAAAAAAAAa</Text>:
    <> 
    <View>
    <FlatList 
        data={pokemon.results}
        renderItem={({item})=> <PokemonCart pokemon={item}/>}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
      />
    </View>
    </>)
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height,
  }
});
