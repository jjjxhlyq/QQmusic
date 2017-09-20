
require("./styles/app.scss")
import RootComponent from './scripts/components/RootComponent'
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import RecommendComponent from './scripts/components/RecommendComponent'
import RankingComponent from './scripts/components/RankingComponent'
import SearchComponent from './scripts/components/SearchComponent'
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            <IndexRoute component={RecommendComponent}/>
            <Route path="/recommend" component={RecommendComponent}></Route>
            <Route path="/ranking" component={RankingComponent}></Route>
            <Route path="/search" component={SearchComponent}></Route>
            <Route path="*" component={RecommendComponent}></Route>

        </Route>
    </Router>
    
    ,document.getElementById("app"))