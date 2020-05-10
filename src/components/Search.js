import React, { Component } from 'react';
import InputAutocomplete from './InputAutocomplete.js' 
import axios from 'axios'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1A4542',
        },
    }
});

let badwordsArray = require('badwords/array');
badwordsArray.push("fuckup", "bitchy", "bitchery", "bitchiness", "bitched", "bitchen", "shittah", "shittim", "shitfaced", "shittle", "nigget", "niggerhead", "niggerheads", "niggerling", "nigged", "niggery", "niggle", "faggy", "fagged", "faggots", "faggoty", "faggotry", "faggoting", "faggoted", "cunty", "cunted", "cunting")


export class Search extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            autoCompleteWords: [],
            randomWords: ["Kitten", "Tacos", "Hockey", "Monkey", "Muffin"]
        }
    }

    onAutoCompleteItemSelected = (event) => {
        // When the user uses the arrow keys or a mouse to select items
        // from the autocomplete dropdown, onChange is not fired for the 
        // text input. Instead, we have to listen to onChange for the parent element.
        this.setState({
            userInput: event.target.innerText
        });
    }   
    
    onTextChange = (event) => {

        this.setState({
            userInput: event.target.value
        });

        if (this.state.userInput.trim() !== "") {
            axios("https://api.datamuse.com/sug?s=" + this.state.userInput)
                .then(result => {
                    //for loop to ensure only single words are suggested
                    let singleWords = []
                    for (let i=0; i < result.data.length; i++) {
                        if (!result.data[i]['word'].includes(" ") && badwordsArray.indexOf(result.data[i]['word']) === -1)  {
                            singleWords.push(result.data[i])
                        }
                    }

                    this.setState({
                        autoCompleteWords: singleWords
                    })
                });
        }
        else {
            this.setState({
                autoCompleteWords: []
            })
        }
    }

    getRandomWord = () => {
        let randomWord = this.state.randomWords[Math.floor(Math.random() * this.state.randomWords.length)]
        this.setState({userInput:randomWord})
    }    
    
    handleSubmit = async (event) => {
        event.preventDefault();

        let result = await axios({
            method: 'GET',
            url: `https://api.datamuse.com/words`,
            params: {
                topics: this.state.userInput,
                max: 40
            }
        })
        
        const generatedWords = result.data.map((value) => {
            return {content: value.word, id: JSON.stringify(value.score)}
        })
        
        this.props.setGeneratedWords(generatedWords)

        // Now get the functional words
        result = await axios({
            method: 'GET',
            url: `https://api.datamuse.com/words`,
            params: {
                rel_bga: this.state.userInput,
                max: 20
            }
        })

        const functionalWords = result.data.map((value) => {
            return { content: value.word, id: JSON.stringify(value.score) }
        })

        this.props.setFunctionalWords(functionalWords)
        this.props.changePage('gameBoard')
    }    

    render() {
        const { userInput } = this.state
        return (
            <>
                <form action="" onSubmit={this.handleSubmit}>
                    <MuiThemeProvider theme={theme}>

                        <InputAutocomplete onTextChange={this.onTextChange} autoCompleteWords={this.state.autoCompleteWords} onAutoCompleteItemSelected={this.onAutoCompleteItemSelected} 
                        userInput = {userInput} 
                        borderColor="primary"
                        />
                        </MuiThemeProvider>

                    <button className="main-button" type="submit">
                        Get Started
                    </button>
                </form>
                <button className="secondary-button" 
                onClick={this.getRandomWord}>
                    Generate Word
                </button>
            </>
        )
    }
}  

export default Search
