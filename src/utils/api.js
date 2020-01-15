import { _getUsers, 
    _getQuestions, 
    _saveQuestionAnswer, 
    _saveQuestion,
    _saveUser,
    _removeQuestion
} from './_DATA'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ])
    .then(([users, questions]) => ({
        users,
        questions
    }))
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info)
}

export function saveQuestion(info) {
    return _saveQuestion(info)
}

export function saveUser(info) {
    return _saveUser(info)
}

export function removeQuestion(info) {
    return _removeQuestion(info)
}