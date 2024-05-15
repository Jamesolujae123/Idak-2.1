import './App.css';
import Midcont from './midcont'
import Nxt from './nxtpart'
import Featuredh from './houses'
import Insight from './insights';
import Loc from './loc';
import Article from './articles';

const Home = () => {
    return (<div>
        <Midcont />
        <Nxt />
        <Featuredh />
        <Insight />
        <Loc />
        <Article />
    </div>)

}

export default Home