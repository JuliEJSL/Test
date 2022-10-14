/**
 * Wrap everything in a IIFE
 */
(function(){

    /* Package data and constructor objects **/

    // Package data array simulated data source, such as JSON or database recordset.

    var data = [
    {
        name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url:'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2456,
        price: 10.50,
        selector:'p1'
    },
    {
        name: 'atom-beautify',
        description:'The atom-beautify package will clean uo your code',
        author: 'Glavin001',
        url: 'https://atom.io/packages/atom-beautify',
        downloads: 4228040,
        stars:4541,
        price: 6.75,
        selector:'p2'

        },
    ];

    //Atom Package constructor function
    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocalString();
        };
        this.getFormattedStars = function(){
            return this.stars.toLocalString();
        };

    }
/** Utility Fuctions */

// Return today´s date, formatted
var getTodaysDate = function(){
    var today = new Date ();
    return today.toDateString();
}

//Returns DOM elemenent by id
var getEl = function(id){
    return document.getElementById(id);
};
// Write the package object's data to the 
//appropriate DOM element using the package selector property

var writePackageInfo = function(package) {
    // Get reference to DOM elements
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + 'description'),
        authEl = getEl(selector + '-author'),
        downloadsEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

    // Write package data to the page
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadsEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedDownloads();
};

// Write Date
 var dateEl = getEl('date');
 dateEl.textContent = getTodaysDate(); 

 
}());
