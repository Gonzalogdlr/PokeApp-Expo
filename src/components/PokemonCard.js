import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function PokemonCard(props) {
  const [image, setImage] = useState("");
  const { name, url } = props.pokemon;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setImage(json.sprites.front_default);
      });
  }, []);
  return (
    <View style={styles.pokemonContainer}>
      {image == "" ? (
        <Text>Czdor Cagando</Text>
      ) : (
        <Image source={{ uri: image }} style={styles.logo} />
      )}

      <Text>{capitalizeFirstLetter(name)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  pokemonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
