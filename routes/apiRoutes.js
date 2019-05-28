// require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");
const router = require("express").Router();


router.get("/api/books", (req, res) => {
    db.Book.find().then(booksdata => {
            res.json(booksdata);
        })
        .catch(err => {
            res.json({error: err});
        }
    );
});

//we don't make outside API calls from within react, so we make them from the server root folder

router.post("/search", (req, res) => {
    // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
    let booktitle = req.body.title.replace(/\s/g, "+");
    axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${booktitle}&maxResults=5&key=` + API_Key)
    .then(response => {
        // console.log(response.data.items)
        res.json(response.data.items)})
        .catch(error => {
        
            res.json({error: error})
        }
    );
});

router.post("/api/books", (req, res) => {
    db.Book.create(req.body)
    .then((response) => {
        res.json({successful: response});
    })
    .catch((err) => {
        res.json({error: err});
    });
});

router.delete("/api/books/:id", (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
    .then((response) => {res.json({successful: response});})
    .catch((err) => {res.json({error: err});});
});

// Route all other requests to React
router.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router


