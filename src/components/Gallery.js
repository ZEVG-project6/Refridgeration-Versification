import React, { Component } from 'react';
import firebase from './firebase.js';

import '../styles/gallery.scss';

class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            firebaseDataObject: [],
            poemsToShow: 6
        }
    }

    componentDidMount() {
        // get data from FB, save it to state
        const dbRef = firebase.database().ref();
        dbRef.on( 'value', (result) => this.setState({ firebaseDataObject: result.val() }) )
    }

    showMoreLessClick = (number) => {
        const { poemsToShow, firebaseDataObject } = this.state
        if (poemsToShow <= 6 && number < 0) {
        } else if (poemsToShow > Object.keys(firebaseDataObject).length && number > 0) {
        } else {
            this.setState({ poemsToShow: poemsToShow + number })
        }
    }

    render() { 
        const { firebaseDataObject, poemsToShow } = this.state
        return (
            <div className="app__container__gallery">
                <h1>Verse By Magnet Poets</h1>
                <div className="app__container__gallery__grid">
                    {/* map over array from firebase. slice to control how many results to show */
                    Object.values(firebaseDataObject).reverse().slice(0, poemsToShow).map(({ title, author, poem }, index) => {
                        return(
                            <div key={Object.keys(firebaseDataObject)[index]}
                            className="app__container__gallery__grid__poem">
                                <h2 className="verse__title">{title}</h2>
                                <div className="verse__container">
                                {
                                poem.map((wordObj) => {
                                    return( 
                                        <div key={wordObj.order} 
                                        className="app__container__gallery__grid__poem__word">
                                            {wordObj.content}
                                        </div>
                                    )
                                })
                                }
                                </div>
                                <p className="verse__by">by, {author}</p>      
                            </div>
                        )
                    })
                    }
                </div>
                <div className="app__container__gallery__buttons">    
                    <button onClick={() =>this.showMoreLessClick(-6)}
                    className="secondary-button">Less</button>
                    <button onClick={() =>this.showMoreLessClick(6)}
                    className="main-button">More</button>
                </div>
            </div>
        )
    }
}

export default Gallery;