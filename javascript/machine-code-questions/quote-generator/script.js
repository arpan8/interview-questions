const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

function showLoading () {
    loader.hidden = false
    quoteContainer.hidden = true
}

function removeLoading() {
    loader.hidden = true
    quoteContainer.hidden = false
}

function newQuote(){
    showLoading()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    authorText.textContent = quote.author || 'Unknown'
    quote.text.length > 30 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote')
    quoteText.textContent =  quote.text
    removeLoading()
}

async function getQuotes() {
    showLoading()
    const api = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(api)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        alert('Something went wrong')
    }
}

// tweet quote
function tweetQuote(){
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(tweetUrl, '_blank')
}

//event listeners

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

getQuotes()

// (async () =>{
//     const api = 'https://type.fit/api/quotes'
//     try {
//         const response = await fetch(api)
//         let apiQuotes = await response.json()
//         console.log(apiQuotes)
//     } catch (error) {
//         console.log(error)
//     }
// })();