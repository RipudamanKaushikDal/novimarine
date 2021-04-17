import Details from './components/details/details';
import Home from './components/home/home'
import Search from './components/search/search';

const routes = {
    '/': () => <Home />,
    '/search/:category': ({category}) => <Search category={category} />,
    '/details/:variation/:productId': ({variation,productId}) => <Details category={variation} id={productId} />,
}

export default routes