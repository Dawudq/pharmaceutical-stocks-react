import React, {Component} from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { iex } from "../config/iex";



class StockRow extends Component{

    constructor(props){
        super(props)
        this.state ={
            data: {}
        }

    }

    componentDidMount() {
        
        const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                data: data[data.length -1 ]
            })
        })
    }
       
    
    


    render(){

        return (
        <tr>
            <td> {this.props.ticker}</td>
            <td> {this.data.close}</td>
            <td> {this.data.date}</td>
            <td> {this.data.label}</td>
           
        </tr>
    
     
        )
   
    }

    

}


export default StockRow;