function getArticleState(state) {
    return state.article;
}

export function getArticlesSelector(state) {
    return getArticleState(state).articles;
}
