import {
     RECEIVE_QUESTIONS, 
     ANSWER_QUESTIONS,
     ADD_QUESTION,
     REMOVE_QUESTION
     } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {...state, ...action.questions}
        case ANSWER_QUESTIONS :
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case ADD_QUESTION : 
            return {
                ...state,
                [action.question.id]: action.question
            }
        case REMOVE_QUESTION :
            const questionList = Object.keys(state).map(question => state[question]).filter((currentQuestion) => currentQuestion.id !== action.removedQuestion.id)
            const newQuestion = questionList.map(question => ( { [question.id]: question } ))
            const filteredQuestions = Object.assign({}, ...newQuestion)
            console.log(questionList)
            return {
                ...filteredQuestions
            } 
        default : 
            return state
    }
}