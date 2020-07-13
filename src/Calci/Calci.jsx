import React, { Component } from 'react'
import Button from '../Button/Button.jsx'
import './Calci.scss'
import Input from '../Input/Input'
import * as math from 'mathjs'


export default class Calci extends Component {

    constructor(){
        super();
        this.state={
            input:"",
            history:[],
            
        }
    }

    
    
    
    OnClick=(v)=>{
        
      
        this.setState({
            
            input:this.state.input+v,
           
        })
      
                }

                Equal=()=>{
                    this.setState({
                        input:math.evaluate(this.state.input),
                        history:this.state.history.concat(this.state.input)
                    })
                }
                handleclear=()=>{
                    this.setState({
                        input:""
                    })
                }
                handlehistoryclear=()=>{
                    this.setState({
                        history:[]
                    })
                }
              
    render() {
        const  View=()=>{
            console.log("view ");
            let hstyle=document.getElementById("history");
            let istyle=document.getElementById("inputbox");
            let cstyle=document.getElementById("input-clear");
            let chstyle=document.getElementById("history-clear");
            chstyle.style.display="block";
            cstyle.style.display="none";
            hstyle.style.display="block";
            istyle.style.display="none";

         
    
       }
       let listItems = this.state.history.map((myList) =>  
       <h6 key="">{myList}</h6>  
       ); 
        return (
            <div className="calci-box">
            <div className="input-btns" id="inputbox">
             <Input input={this.state.input}/> 
            <div className="row">
                <Button click={this.OnClick}>1</Button>
                <Button click={this.OnClick}>2</Button>
                <Button click={this.OnClick}>3</Button>
                <Button click={this.OnClick}>/</Button>
            </div>
            <div className="row">
                <Button click={this.OnClick}>4</Button>
                <Button click={this.OnClick}>5</Button>
                <Button click={this.OnClick}>6</Button>
                <Button click={this.OnClick}>*</Button>
            </div>
            <div className="row">
                <Button click={this.OnClick}>7</Button>
                <Button click={this.OnClick}>8</Button>
                <Button click={this.OnClick}>9</Button>
                <Button click={this.OnClick}>+</Button>
            </div>
            <div className="row">
                <Button click={this.OnClick}>.</Button>
                <Button click={this.OnClick}>0</Button>
                <Button click={this.Equal}>=</Button>
                <Button click={this.OnClick}>-</Button>
            </div>
           
            </div>
            <div className="History" id="history">
            <div className="text"> {listItems}</div>
                </div>

            <div className="clear"onClick={()=>this.handleclear()} id="input-clear">clear</div>
            <div className="hclear"onClick={()=>this.handlehistoryclear()} id="history-clear">clear</div>
            <div className="history-btn" onClick={()=>View()}>
        History
       
        </div>
        </div>
           
            
            
            
        )
    }
}
