import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FeaturedMovies } from './FeaturedMovies';
import { Search } from '../Components/Search';
import { SearchedMovies } from '../Components/SearchedMovies';
import { searchMovies } from '../Slices/MovieSearchSlicer';
import { Grid } from '@material-ui/core';

export function HomePage() {
    const [searchText, setSearchText] = useState(null);
    const searchResults = useSelector(state => state.searchResults);
    const dispatch = useDispatch();
    const onSearchSubmitHandler = () => {
        dispatch(searchMovies(searchText));
    } 
    

    return <>
        
        <Search onChangeValue={setSearchText} 
        onSubmit={onSearchSubmitHandler} 
        onEnter={onSearchSubmitHandler} 
        placeholder={'Find movie...'}/>

        <Grid container justifyContent='center' alignContent='center' alignItems='center' direction='row'>
            <Grid item>
            {searchResults.length !== 0 && <SearchedMovies/> }
        {searchResults.length === 0 && <FeaturedMovies/> }
        </Grid>
       </Grid>
        
    </>
}