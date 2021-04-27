const Main = require('./views/pages/Main.html');
const Result = require('./views/pages/Result.html');
const Error404 = require('./views/pages/Error404.html');
import MainJs     from './views/js/Main.js'
import ResultJs   from './views/js/Result.js'
import Error404Js from './views/js/Error404.js'
import Style    from './css/Style.css';

const routes = {
    '/'             : { html : Main , js: MainJs }
    , '/result'     : { html : Result, js: ResultJs }
};

const router = async () => {
    const content = null || document.getElementById('app');
    const request = parseRequestURL();
    const parsedURL = request.resource ? '/' + request.resource : '/';
    const page = routes[parsedURL] ? routes[parsedURL] : { html : Error404, js: Error404Js };
    const {html, js} = page;
    if(beforePage !== parsedURL) {
        beforePage = parsedURL;
        content.innerHTML = html() ;
        await js.after_render();
    }
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);


function parseRequestURL() {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split("/")
    let request = {
        resource    : null,
    }
    request.resource    = r[1]

    return request
}
