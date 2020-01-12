import React, { Component } from 'react'
import Results from './Results'
import Answer from './Answer'
import { connect } from 'react-redux'


class Questions extends Component {
    render() {
        const { answers, id } = this.props
        const answer = answers.filter(answer => answer === id)
        
        return(
            <div>
                {answer.length ? <Results id={id} /> : <Answer id={id} /> } 
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}, props) {
    const { id } = props.match.params
    const answers = Object.keys(users[authedUser].answers)
    
    return {
        id,
        answers
    }
}

export default connect(mapStateToProps)(Questions)