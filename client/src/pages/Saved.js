
import React from "react";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Saved extends React.Component {
    state = {
            savedBooks: []
        }

    componentWillMount = () => {
        API.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        // console.log(this.state.savedBooks);
        return(
            <div className="container">
            
                <SearchResults savedBooks={this.state.savedBooks} path={this.props.match.path}/>
           
            </div>
        );
    }
}

export default Saved;
