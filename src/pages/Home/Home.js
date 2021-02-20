import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Search from "../../components/Others/Search";
import LoadingCard from "../../components/Loading/LoadingCard";
import api from "../../services/api";
import Colors from "../../styles/Colors";

var pokemonsOriginal = [];
const perPage = 40;
var max = 0;

function Home({ history, ...props }) {
  const { query } = props.match.params;

  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (query == undefined) {
      max = pokemonsOriginal.length;
      setPokemons(pokemonsOriginal.slice(0, perPage));
      setLoading(false);
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
    setLoading(false);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/pokemon?limit=9999`)
      .then((response) => {
        if (response.status == 200) {
          console.log("LoadPokemons success");
          console.log(response.data);
          LoadPokemons(response.data.results);
        }
      })
      .catch((error) => {
        console.log("LoadPokemons error " + error);
      });
  }, []);

  async function LoadPokemons(list) {
    var all = [];
    for (var i = 0; i < list.length; i++) {
      let response = await api.get(`/pokemon/${list[i].name}`);
      console.log(response.data);
      var obj = {
        name: response.data.name,
        id: response.data.id,
        types: response.data.types,
        number: response.data.id.toString().padStart(3, "0"),
        image:
          response.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
      };
      all.push(obj);
    }

    pokemonsOriginal = all;
    if (query != undefined) {
      var filterPokemons = all.filter(
        (i) => i.name.includes(query.toLowerCase()) || i.number.includes(query)
      );

      max = filterPokemons.length;
      setPokemons(filterPokemons.slice(0, perPage));
    } else {
      max = all.length;
      setPokemons(all.slice(0, perPage));
    }
    setLoading(false);
  }

  function LoadMore() {
    setTimeout(() => {
      var limit = pokemons.length + perPage;
      if (query == undefined) {
        setPokemons(pokemonsOriginal.slice(0, limit));
      } else {
        var filterPokemons = pokemonsOriginal.filter((item) => {
          return (
            item.name.includes(query.toLowerCase()) ||
            item.number.includes(query)
          );
        });
        setPokemons(filterPokemons.slice(0, limit));
      }
    }, 1000);
  }

  return (
    <div>
      <Header />

      <Container>
        <Search history={history} query={query} />

        {loading ? (
          <LoadingCard qty={12} />
        ) : (
          <InfiniteScroll
            style={{ overflow: "none" }}
            dataLength={pokemons.length}
            next={LoadMore}
            hasMore={pokemons.length < max}
            loader={
              <div className="mb-4 d-flex justify-content-center align-item-center">
                <Spinner
                  style={{ color: Colors.card_gray }}
                  animation="border"
                  role="status"
                >
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
              {pokemons.map((item) => {
                return <CardPokemon key={item.id} pokemon={item} />;
              })}
            </Row>
          </InfiniteScroll>
        )}
      </Container>
    </div>
  );
}

export default Home;
