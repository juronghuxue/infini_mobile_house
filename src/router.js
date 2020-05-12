import React from 'react'; 
//引入需要用到的页面组件 
import Page1 from './components/page1';
import Page2 from './components/page2';
//引入一些模块
import { BrowserRouter as Router, Route} from "react-router-dom";

function router(){
return (
<Router>
    <Route path="/Page1" component={Page1} />
    <Route path="/Page2" component={Page2} />
</Router>);
}

export default router;