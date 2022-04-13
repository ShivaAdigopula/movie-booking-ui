import React from 'react';
import MovieCard from './MovieCard';
export const MoviesList = ({movies}) => {
    return <div>
        <div className="container">
                    {
                         movies.map(movie => {
                            return <div className="item"><MovieCard {...movie}/></div>
                        })
                    }
            </div>
        </div>
}