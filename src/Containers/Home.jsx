import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FeaturedMovies } from './FeaturedMovies';
import { Search } from '../Components/Search';
import { SearchedMovies } from '../Components/SearchedMovies';
import { searchMovies } from '../Slices/MovieSearchSlicer';

export function HomePage() {
    const [searchText, setSearchText] = useState(null);
    const { results } = useSelector(state => state.searchResults);
    const dispatch = useDispatch();
    const onSearchSubmitHandler = () => {
        dispatch(searchMovies(searchText));
    } 
    

    return <>
        
        <Search onChangeValue={setSearchText} 
        onSubmit={onSearchSubmitHandler} 
        onEnter={onSearchSubmitHandler} 
        placeholder={'Find movie...'}/>

        {results.length !== 0 && <SearchedMovies/> }
        {results.length === 0 && <FeaturedMovies/> }
        
    </>
}