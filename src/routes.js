import Home from './components/home/home'
import Search from './components/search/search';

const routes = {
    '/': () => <Home />,
    '/search/:category': ({category}) => <Search category={category} />,
}

export default routes