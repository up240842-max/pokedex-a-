import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import PokemonCard from "../components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {

  const [results, setResults] = useState<Pokemon[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

    const response = await fetch(URL, {
      method: "GET",
    });

    const data = await response.json();

    setResults(data.results);
  };

  return (
    <ScrollView>
      <View>
        {results.map((item) => {
          return (
            <PokemonCard
              key={item.name}
              name={item.name}
              url={item.url}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}