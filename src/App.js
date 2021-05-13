import React from 'react'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search'
import { ListOfCard } from './components/ListOfCard'

export function App() {
   return (
      <main>
         <Navbar />
         <Search />
         <ListOfCard />
      </main>
   )
}
