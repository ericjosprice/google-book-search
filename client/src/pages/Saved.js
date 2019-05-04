import React from "react";
import SearchForm from "../components/SearchForm";
// import ResultsContainer from "../components/ResultsContainer";
// import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";


class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
componentDidMount(){
    API.getBooks().then(res =>  console.log("res from saved js", res))

}

    handleView(e) {
        e.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    this.setState({bookData: response.data});
                    this.setState({bookInput: ""});
                }
            );
    }
    handleDelete(e) {
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
            <div>
                <SearchForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                {(this.state.bookData.length >0 )?
                    <SearchResults bookData={this.state.bookData} path={this.props.match.path}/> : <div></div>
                }
            </div>
        );
    }
}

export default Saved;