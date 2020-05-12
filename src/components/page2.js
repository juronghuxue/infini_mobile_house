import React, { Component }from 'react';
import '../less/page1.less';



export default class Page2 extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //初始化函数
    }
    //事件函数
    render(){
        return(
            <div>
                <div class="wrap">
                    <h3 class="title">page2</h3>
                </div>
            </div>
        );
    }
}