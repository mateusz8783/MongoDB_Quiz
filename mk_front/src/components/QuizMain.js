import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';


export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Who is Ann\'s and Terry\'s daughter?',
            2: 'How is John related to Michael?',
            3: 'Rebaca is Lucian\'s:',
            4: 'What is John Barkley\'s middle name?'
        },
        answers: {
            1: {
                1: 'Julia',
                2: 'Patricia',
                3: 'Barbra'
            },
            2: {
                1: 'they are cousins',
                2: 'Michael is John\'s son',
                3: 'they are not related'
            },
            3: {
                1: 'daughter',
                2: 'mother',
                3: 'grandmother'
            },
            4: {
                1: 'Stephen',
                2: 'Mike',
                3: 'Jadon'
            },
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '1',
            4: '3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}