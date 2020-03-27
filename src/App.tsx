// src/App.tsx
import * as React from 'react'
import { Query } from 'react-apollo'
import pokemonsQuery from './queries/pokemonsQuery'
import { Pokemons, PokemonsVariables } from './queries/types/Pokemons'

// class PokemonsQuery extends Query<Pokemons, PokemonsVariables> {}

export default class App extends React.Component {
  render() {
    return (
      <Query
        query={pokemonsQuery} 
        variables={{ first: 10 }} // Throws an error!
      >
        {({ data }: any ) => (
          <React.Fragment>
           {data && data.pokemons.map((pokemon: {id: string, name: string}) => {
             return <p>{pokemon.name}</p>
           })}
          </React.Fragment>
         )}
      </Query>
    )
  }
}