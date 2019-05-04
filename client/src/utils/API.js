// import axios from "axios";

// // The getBooks method retrieves recipes from the server
// // It accepts a "query" or term to search the books api for
// export default {
//   getRecipes: function(query) {
//     return axios.get("/api/books", { params: { q: query } });
//   }
// };

import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    searchBooks: (title) => {
        console.log(title);
        return axios.post("/search", {title: title});
    },
    addBookToDB: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}

// export default {
//     getRandomDog: function() {
//       return axios.get("https://dog.ceo/api/breeds/image/random");
//     },
//     getDogsOfBreed: function(breed) {
//       return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//     },
//     getBaseBreedsList: function() {
//       return axios.get("https://dog.ceo/api/breeds/list");
//     }
//   };