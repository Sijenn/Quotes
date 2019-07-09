import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] =
    [
      new Quote(
        2,
        '“Your thoughts are your message to the world. Just as the rays are the messages of the Sun.Succesful and unsuccesful dont vary in ability they vary in their desires to do things',
        0,
        '',
        new Date(2019, 6, 9)
      ),
      new Quote(
        2,
        '“Honestly, if everyone likes what you say something is wrong with your message.Strive for progress not perfection',
        0,
        '',
        new Date(2019, 6, 9)
      ),
      new Quote(
        2,
        '“Speak your heart. If they don’t understand, the message was never meant for them anyway.Theres no shortcuts to any place worth going',
        0,
        '',
        new Date(2019, 6, 9)
      ),
      new Quote(
        2,
        '“Right person, wrong timing doesn’t mean God was wrong. It means you were there at the right time to fulfill something else. Look for it."',
        0,
        '',
        new Date(2019, 6, 9)
      ),
      new Quote(
        2,
        '“They hurried when they could, and dozed when they had to, hiding in tangles of bloodtwig and heartsease at the edge of the road.”',
        0,
        '',
        new Date(2019, 6, 9)
      ),
      new Quote(
        2,
        '“Your thoughts are your message to the world. Just as the rays are the messages of the Sun.Succesful and unsuccesful dont vary in ability they vary in their desires to do things',
        0,
        '',
        new Date(2019, 6, 9)
      ),
      
    ];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }


  constructor() { }

  ngOnInit() {

  }

}