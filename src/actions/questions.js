import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTIONS = 'ANSWER_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion({optionOneText, optionTwoText}) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions(questions) {
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function answerQuestions({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTIONS,
        authedUser,
        qid,
        answer
    }
}

export function handleAnswerQuestions(info) {
    return dispatch => {
        dispatch(answerQuestions(info))

        return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleAnswerQuestions: ', e)
            dispatch(saveQuestionAnswer(info))
            alert('There was an error. Try again')
        })
    }
}