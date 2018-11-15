import * as React from 'react';
import { Component } from 'react';
import './style.css';

export default class FoodQuotes extends Component {
    private quoteList = [
        {quote: "Good food is good mood"},
        {quote: "Eat good feel good"},
        {quote: "Nothing brings people together like good food"},
        {quote: "If we are not meant to have midnight snacks, why there is a light in the fridge?"},
        {quote: "The only thing I like better than talking about food is eating. -John Walters"},
        {quote: "I'm sorry for what I said when I was hungry"},
        {quote: "People who love to eat are always the best people"},
        {quote: "An apple a day keeps anyone away if you throw it hard enough"},
        {quote: "Count the memories not the calories"},
        {quote: "All you need is love but a little chocolate now and then doesn't hurt. -Charles M. Shulz"},
        {quote: "Don't be eye candy, be soul food"},
        {quote: "I could lay next to you forever. Or until we decide to go eat."},
        {quote: "Wine is bottled poetry"},
        {quote: "Life is short, eat dessert first"},
        {quote: "You can't live a full life on an empty stomach"},
        {quote: "I'm just a girl standing in front of salad asking it to be a donut"},
        {quote: "Stressed is spelled backwards desserts"},
        {quote: "WTF - Where's the food"},
        {quote: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world. ―J.R.R. Tolkien"},
        {quote: "One cannot think well, love well, sleep well, if one has not dined well. -Virginia Woolf, A Room of One's Own"},
        {quote: "I cook with wine, sometimes I even add it to the food. -W. C. Fields"},
        {quote: "If you’re afraid of butter, use cream. -Julia Child"},
        {quote: "First we eat, then we do everything else. -M. F. K. Fisher"},
        {quote: "Life is uncertain. Eat dessert first. -Ernestine Ulmer"},
        {quote: "Age and glasses of wine should never be counted."},
        {quote: "In wine there is wisdom, in beer there is strength, in water there is bacteria."},
        {quote: "You don't need a silver fork to eat good food. -Paul Prudhomme"},
        {quote: "We all eat, and it would be a sad waste of opportunity to eat badly. -Anna Thomas"},
        {quote: "A balanced diet is a cookie in each hand. -Barbara Johnson"},
        {quote: "Food is symbolic of love when words are inadequate. -Alan D. Woltfelt"},
        {quote: "All happiness depends on a leisurely breakfast. -John Gunther"}
    ]   

    render() {
        const randomQuote = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];

        return (
            <div className="foodQuote"><p>{randomQuote.quote}</p></div>
        )
    }
}