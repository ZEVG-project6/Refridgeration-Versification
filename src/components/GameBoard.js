import React, { Component } from 'react';
import Modal from './Modal.js'
// import Swal from 'sweetalert2';
import ListElement from './ListElement'
import GeneratedWord from './GeneratedWord.js'
import { ListManager } from 'react-beautiful-dnd-grid';
import { TwitterShareButton } from "react-share";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../styles/gameBoard.scss';

const sortList = (list) => list.slice().sort((first, second) => first.order - second.order)
// draggable items generated by beautiful-dnd-grid:
const listElement = ({ item: { content } }) => 
    <div className="generated__item">{content}</div>

class GameBoard extends Component {
    constructor() {
        super();
        this.state = {
            modal: true,
            modalToShow: 'start',
            sortedList: [],
            wordOrder: 0,
        }
        
    }

    showModal = (modalShowBoolean) => this.setState({ modal: modalShowBoolean })
    sortList = () => this.setState({ sortedList: sortList(this.state.sortedList) })
    
    reorderList = (sourceIndex, destinationIndex) => {
        if (destinationIndex === sourceIndex) {
            return;
        }
        const list = this.state.sortedList;
        if (destinationIndex === 0) {
            list[sourceIndex].order = list[0].order - 1;
            this.sortList();
            return;
        }
        if (destinationIndex === list.length - 1) {
            list[sourceIndex].order = list[list.length - 1].order + 1;
            this.sortList();
            return;
        }
        if (destinationIndex < sourceIndex) {
            list[sourceIndex].order = (list[destinationIndex].order + list[destinationIndex - 1].order) / 2;
            this.sortList();
            return;
        }
        list[sourceIndex].order = (list[destinationIndex].order + list[destinationIndex + 1].order) / 2;
        this.sortList();
    }
    
    generatedWordClick = (wordObject) => {
        const { sortedList, wordOrder } = this.state
        const { id, content } = wordObject
        const newList = [...sortedList]

        newList.push({
            id: id, 
            order: wordOrder, 
            content: content
        });

        this.props.disableWord(wordObject.id)
        this.setState({
            sortedList: sortList(newList),
            wordOrder: wordOrder + 1
        })
    }

    saveToGalleryClick = () => {
        const { sortedList } = this.state
        const maxWordsInPoem = 20 // placeholder number for now

        if (sortedList.length <= maxWordsInPoem && sortedList.length > 5) {
            this.setState({ modalToShow: "share" })
            this.showModal(true)
        // 1st level error handling:
        } else if (sortedList.length < 6) {
            alert("You need more than 5 words in your poem.")
        } else if (sortedList.length > maxWordsInPoem ) {
            alert(`Your poem is too long! Nothing longer than ${maxWordsInPoem} please.`)
        } else {
            alert("Safi, please stop bringing my shit again.")
        }
    }

    clearPoem = () => {
        this.setState({
            sortedList: [],
            wordOrder: 0
        })
        // remove disabled and disabled style from words: 
        this.props.enableAllWords();
    }

    poemString = () => {
        const rawWords = this.state.sortedList.map(wordObject => wordObject.content)
        return rawWords.join(' ')
    }

    savePoem = () => {
        const { sortedList } = this.state // destructuring state for clean code
        const maxWordsInPoem = 10 // placeholder number for now
        if (sortedList.length <= maxWordsInPoem && sortedList.length > 2) {
            const dbRef = this.database().ref()
            // This was called on 'firedbase' but I'm being told it's undefined
            dbRef.push(sortedList)
        // error handling:
        } else if (sortedList.length < 3) {
            alert('You need more than 2 words in your poem.')
        } else if (sortedList.length > maxWordsInPoem ) {
            alert(`Your poem is too long! Nothing longer than ${maxWordsInPoem} please.`)
        }
    }

    render() {
        const { sortedList, modal, modalToShow, wordOrder } = this.state
        const { generatedWords, functionalWords } = this.props
        return(
            <>
                <Modal show={modal} showModal={this.showModal} 
                whichModal={modalToShow} changePage={this.props.changePage} 
                sortedList={sortedList} />
                <div className="container__game-board">
                    <div className="game-board__generated">
                        {
                        functionalWords.map((word) => {
                            return(
                                <GeneratedWord key={word.id} word={word} 
                                generatedWordClick={this.generatedWordClick} />
                            )
                        })
                        }
                    </div>
                    <div className="sandbox__container">
                        <h2 className="main-header">Create a 6 - 20 words poem:</h2>
                        <p>{wordOrder} / 20</p>
                        <div className="game-board__sandbox">
                            <div className="sandbox__droppable">
                                <ListManager
                                    items={sortedList}
                                    direction="horizontal"
                                    maxItems={5} // change this mediaQs
                                    render={(item) => <ListElement item={item} />}
                                    onDragEnd={this.reorderList} 
                                />
                            </div>
                            <div className="sandbox__buttons">
                                <button className="secondary-button" onClick={this.clearPoem}>Clear</button>
                                <button className="main-button" onClick={this.saveToGalleryClick}>
                                    Save
                                </button>
                                <TwitterShareButton url="https://bit.ly/2yHFNdM"
                                title={`Check out my magnet poem!\n"${this.poemString()}"\nCreate your own @`} >
                                        Share <FontAwesomeIcon icon={faTwitter}/>
                                </TwitterShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default GameBoard