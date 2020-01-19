import React, {Component} from "react";
import "./Grid.css";
import champBlocks from "../../champs.json";
import Card from "../Card";
import Header from "../Header";

class Grid extends Component {
    state = {
        champs: champBlocks,
        score: 0
    }

    resetGame = () => {
        this.setState({
            score:0,
            champs: champBlocks
        })
    }

    handleCorrect = newChamps => {
        this.setState({
            champs: this.shuffleArray(newChamps),
            score: this.state.score+1
        });

        if (this.state.score === 11) {
            this.resetGame();
            alert("You won!");
        }
    };

    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newChamps = this.state.champs.map(champ => {
            const newPic = {...champ};
            if (newPic.name === name) {
                if (!newPic.clicked){
                    console.log("Already guessed");
                    newPic.clicked = true;
                    guessedCorrect = true;
                }
            }
            return newPic;
        })
        console.log("Guessed Correct: ", guessedCorrect)
        guessedCorrect ? this.handleCorrect(newChamps) : this.handleWrong(newChamps)
    };

    shuffleArray = champs => {
        for (let i = champs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i +1));
            [champs[i], champs[j]] = [champs[j], champs[i]];
        }
        return(champs);
    };

    render() {
        return(
            <div>
                <Header score={this.state.score}/>
                <div className="gridWrapper">
                    <div className="grid">
                        {this.state.champs.map(champ => {
                            return(<Card 
                                name={champ.name}
                                key={champ.name}
                                handleClick={this.handleClick}
                                src={champ.image}
                                alt={champ.name}
                                />)
                        })}
                    </div>
                </div>
            </div>
        );
    }


};

export default Grid;