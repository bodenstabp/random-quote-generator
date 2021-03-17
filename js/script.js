const quote = document.querySelector('.quote')
const source = document.querySelector('.source')
const citation = document.querySelector('.citation')
const year = document.querySelector('.year')
let previousQuotes = [];
let randomQuote
const bgColors = [`#333`, `#4f3233`, `#21a4bb`, `#ab4599`, `#ae0000`, `orange`]

/*** 
 * `quotes` array 
***/
  const quotes = [
    {
      quote : `"It is no evil for things to undergoe change and no good for things to subsist in the absence of change"`,
      source : `Marcus Aurelius`,
      citation : `Meditations`,
      tag : `Philosophy`
    },
    {
      quote : `"You must  know that it is no easy thing for a principle to become one's own, unless each day they maintain it and hear it maintained, as well as work it out in life"`,
      source : `Epictetus`,
      citation : `The Golden Teachings of Epictetus`,
      tag : `Philosophy`
    },
    {
      quote : `"Be assured that you will find Minerva no less fond of traversing the hills than Diana."`,
      source : `Pliny the Younger`,
      citation : `Letter to Tacitus`,
      tag : `History`
    },
    {
      quote : `The best-laid schemes of mice an' men oft go awry`,
      source : `Robert Burns`,
      citation : `To A Mouse`,
      year : `1785`,
      tag : `Poetry`
    },
    {
      quote : `"The haft of the arrow had been feathered with one of the eagle's own plumes. We often give our enemies the means of our own destruction."`,
      source : `Aesop`,
      tag : `Short Stories`
    }
  ];


/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  // Finds random number for array
  let randomQuoteNumber = Math.floor( ( Math.random() * quotes.length ) );

  //Cycles through to find a number that has not already been selected and maps it to an array item from quotes
  // Restarts cycle if all numbers have been used 
  if ( previousQuotes.length === quotes.length) {
    previousQuotes = [];
    getRandomQuote();
  } else if( previousQuotes.includes( randomQuoteNumber)) {
    getRandomQuote();
  } else {
    previousQuotes.push( randomQuoteNumber );
    randomQuote = quotes[randomQuoteNumber]
  }
}

/***
 * `printQuote` function
***/

function printQuote () {
  getRandomQuote()
  // Creates HTML
  let quoteHTML = 
  `<p class="quote">${randomQuote.quote}</p>
   <p class="source">${randomQuote.source}`;
  //  Checks for optional values
   if (randomQuote.citation) {
     quoteHTML += `<span class ="citation">${randomQuote.citation}</span>`
   }
   if (randomQuote.year) {
     quoteHTML += `<span class ="citation">${randomQuote.year}</span>`
   }
   if (randomQuote.tag) {
     quoteHTML += `<span class ="citation">${randomQuote.tag}</span>`
   }
    quoteHTML += `</p>`;
  // Prints object to screen
    document.querySelector('.quote-box').innerHTML = quoteHTML;
    
   // Changes background color with quotes 
    document.body.style.backgroundColor = bgColors[ Math.floor( Math.random() * bgColors.length )];
}



printQuote();

setInterval( printQuote, 7000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);