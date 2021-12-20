import React from 'react';
import './pagination.css'

function Paginado({charactersPerPage, allCharacters, paginado}) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allCharacters/charactersPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        <nav>
            <ul className='pagination'>
                { pageNumbers &&
                pageNumbers.map(number => (
                    
                        <button key={number} onClick={() => paginado(number)}>{number}</button>
                    
                ))
                }
            </ul>
        </nav>
    )
};

export default Paginado;


/* 

    */ 