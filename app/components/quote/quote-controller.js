import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawquote(quote) {
	let template = ''

	template += `
					<div>
					<h5>${quote.quote.body}</h5>
					<h5>${quote.quote.author}</h5>
					</div>
	`
	console.log(quote)


	document.getElementById("quote").innerHTML = template
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote);
			drawquote(quote)
		})
	}
}
