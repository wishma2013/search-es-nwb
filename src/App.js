import './App.css'

import React, {Component} from 'react'

import {
    SearchBox,
    RefinementListFilter,
    Hits,
    HitsStats,
    SearchkitComponent,
    SelectedFilters,
    MenuFilter,
    HierarchicalMenuFilter,
    Pagination,
    ResetFilters,

    SearchkitManager,
    SearchkitProvider
} from 'searchkit';

const sk = new SearchkitManager("https://kili-eu-west-1.searchly.com/movies/", {
    basicAuth:"read:teetndhjnrspbzxxyfxmf5fb24suqxuj"
})

class App extends Component {

  render() {
    return <div className="App">
        <SearchkitProvider searchkit={sk}>
            <RefinementListFilter id="genres" title="Genres" field="genres.raw" operator="AND"/>
        </SearchkitProvider>
    </div>
  }
}

export default App
