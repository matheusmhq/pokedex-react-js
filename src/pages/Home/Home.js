import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Search from "../../components/Others/Search";
import api from "../../services/api";

var pokemonsOriginal = [];
const perPage = 40;
var max = 0;

function Home({ history, ...props }) {
  const { query } = props.match.params;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (query == undefined) {
      max = pokemonsOriginal.length;
      setPokemons(pokemonsOriginal.slice(0, perPage));
      return false;
    }

    history.push(`/${query}`);
    var filterPokemons = pokemonsOriginal.filter((item) => {
      return (
        item.name.includes(query.toLowerCase()) || item.number.includes(query)
      );
    });

    max = filterPokemons.length;
    setPokemons(filterPokemons.slice(0, perPage));
  }, [query]);

  useEffect(() => {
    function LoadPokemons() {
      api
        .get(`/pokemon?limit=9999`)
        .then((response) => {
          if (response.status == 200) {
            console.log("LoadPokemons success");
            console.log(response.data);

            pokemonsOriginal = response.data.results;
            var newList = response.data.results.filter((item, index) => {
              item.pokemonIndex = index + 1;
              item.number = (index + 1).toString().padStart(3, "0");

              if (query != undefined) {
                if (
                  item.name.includes(query.toLowerCase()) ||
                  item.number.includes(query)
                )
                  return item;
              } else {
                return item;
              }
            });

            if (query != undefined) {
              max = newList.length;
            } else {
              max = response.data.results.length;
            }
            setPokemons(newList.slice(0, perPage));
          }
        })
        .catch((error) => {
          console.log("LoadPokemons error " + error);
        });
    }

    LoadPokemons();
  }, []);

  function LoadMore() {
    setTimeout(() => {
      if (query == undefined) {
        setPokemons(pokemonsOriginal.slice(0, pokemons.length + perPage));
      } else {
        var filterPokemons = pokemonsOriginal.filter((item) => {
          return (
            item.name.includes(query.toLowerCase()) ||
            item.number.includes(query)
          );
        });
        setPokemons(filterPokemons.slice(0, pokemons.length + perPage));
      }
    }, 1000);
  }

  return (
    <div>
      <Header />

      <Container>
        <Search history={history} query={query} />
        <InfiniteScroll
          style={{ overflow: "none" }}
          dataLength={pokemons.length}
          next={LoadMore}
          hasMore={pokemons.length < max}
          loader={
            <div className="mb-4 d-flex justify-content-center align-item-center">
              <Spinner variant={"light"} animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          }
          endMessage={
            <p className="text-light" style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Row>
            {pokemons.map((item, index) => {
              return <CardPokemon key={index} pokemon={item} />;
            })}
          </Row>
        </InfiniteScroll>
      </Container>
    </div>
  );
}

export default Home;
