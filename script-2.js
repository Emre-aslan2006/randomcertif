const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Cicero"
  },
  {
    text: "In the end, we only regret the chances we didn’t take.",
    author: "Lewis Carroll"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
  const quote = getRandomQuote();
  document.getElementById("text").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `- ${quote.author}`;
  document.getElementById("tweet-quote").href =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
}

document.getElementById("new-quote").addEventListener("click", updateQuote);

// Load first quote
window.onload = updateQuote;
