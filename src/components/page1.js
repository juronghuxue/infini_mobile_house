import React, { Component }from 'react';
import '../less/page1.less';



export default class Page1 extends React.Component {
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
                <div className="wrap">
                    <h3 className="title">page1</h3>
                </div>
            </div>
        );
    }
}