import React from 'react'

const Search = (props) => {
    return(
        <div className="searching">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Pesquisar</button>
                <select defaultValue="Sort" onChange={props.handleSort}> 
                    <option disabled value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default Search;