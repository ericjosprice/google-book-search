import React from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";


class Search extends React.Component {
    
        state = {
            bookInput: "",
            bookData: []
        }

    handleInputChange=(e) => {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    this.setState({bookData: response.data});
                    this.setState({bookInput: ""});
                }
            );
    }
  render() {
    // console.log(this.state)
    
        return(
            <div className="container">
                <SearchForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                {(this.state.bookData.length > 0 )?
                    <SearchResults bookData={this.state.bookData} path={this.props.match.path}/> : <div></div>
                }
            </div>
        );
    }
}

export default Search;
