import React from "react";
import SearchForm from "../components/SearchForm";
// import ResultsContainer from "../components/ResultsContainer";
// import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
    }

    handleFormSubmit(e) {
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
    console.log(this.state)
    
        return(
            <div>
                <SearchForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                {(this.state.bookData.length >0 )?
                    <SearchResults bookData={this.state.bookData} path={this.props.match.path}/> : <div></div>
                }
            </div>
        );
    }
  //   return (
  //     <div>
  //       <Container style={{ minHeight: "80%" }}>
  //           <h1 className="text-center">Search for a book</h1>
  //             <SearchForm
  //               handleFormSubmit={this.handleFormSubmit}
  //               handleInputChange={this.handleInputChange}
  //               books={this.state.books}
  //             />
  //           <SearchResults results={this.state.results} path={this.props.match.path} />
  //         </Container>
  //     </div>
  //   );
  // }

   
}

export default Search;

/////////////////////




// import React, { Component } from "react";
// // import API from "../utils/API";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Container from "../components/Container";
// import API from "../utils/API"

// class Search extends Component {
//   state = {
//     search: "",
//     books: [],
//     results: [],
//     error: ""
//   };

//   // When the component mounts, get a list of harry potter books and update this.state.books
//   componentDidMount() {
//     this.searchBookOnLoad("Harry Potter");
//   }

//   searchBookOnLoad = query => {
//     API.search(query)
//     .then(res => this.setState({ books: res.data.message }))
//     .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getBooks(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//             <h1 className="text-center">Search for a book</h1>
//               <SearchForm
//                 handleFormSubmit={this.handleFormSubmit}
//                 handleInputChange={this.handleInputChange}
//                 books={this.state.books}
//               />
//             <SearchResults results={this.state.results} />
//           </Container>
//       </div>
//     );
//   }
// }

// export default Search;
