"use strict";
var home_component_1 = require("./home/home.component");
var books_list_component_1 = require("./books-list/books-list.component");
var phrase_details_component_1 = require("./phrase-details/phrase-details.component");
exports.routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: home_component_1.HomeComponent
    },
    {
        path: "books",
        component: books_list_component_1.BookListComponent
    },
    {
        path: "books/:name",
        component: phrase_details_component_1.BookDetailsComponent
    }
];
