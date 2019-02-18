import React, { Component } from 'react';
import NewOrder from './NewOrder';

class Orders extends Component{

    constructor(props){
        super(props);
        this.state = {
            orders: [],
        }
    }

    componentDidMount(){      

        const url = `http://8.6.193.212/rest/all/V1/orders?searchCriteria[filter_groups][0][filters][0][field]=created_at&searchCriteria[filter_groups][0][filters][0][value]=2018-05-21&searchCriteria[filter_groups][0][filters][0][condition_type]=gteq`;
        
        fetch(url, { 
            method: 'GET',
            withCredentials: true,
            headers: ({
              'Authorization': 'Bearer 9uib3ap8m8h5jq2q1xn2qxku8ojoice8', 
              'Content-Type': 'application/x-www-form-urlencoded'
            }), 
            
          })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                orders: data.items
            })
        })
        .catch((error) => console.log(error));
    }

    renderItems(){
        return this.state.orders.map((item) => (
            <NewOrder key={item.items["0"].name} item={item} />
        ));
    }

    render(){
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }

}

export default Orders;
