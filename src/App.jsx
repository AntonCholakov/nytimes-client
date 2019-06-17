import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainContainer from './containers/main/MainContainer';
import ArticlesContainer from './containers/articles/Articles/ArticlesContainer';
import ArticleDetails from './containers/articles/ArticleDetails/ArticleDetails';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <MainContainer>
                <BrowserRouter>
                    <Switch>
                        <Route path="/:id" component={ArticleDetails}/>
                        <Route path="/" exact component={ArticlesContainer}/>
                    </Switch>
                </BrowserRouter>
            </MainContainer>
        </React.Fragment>
    );
}

export default App;
