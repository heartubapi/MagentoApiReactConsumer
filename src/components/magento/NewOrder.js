import React from 'react';

const NewOrder = ({item}) => (
    <div className="col s4">
        <div className="card">
            <div className="card-image">
                {/* <img src={item.customer_lastname} alt={item.customer_lastname} /> */}
                {/* <span className="card-title">{item.customer_lastname}</span> */}
            </div>
            <div className="card-content">
                <p>First name: {item.billing_address.firstname}</p>
                <p>Item name: {item.items["0"].name}</p>
                <p>Billing address email:{item.billing_address.email}</p>
                <p>billing address phone: {item.billing_address.telephone}</p>
                <p>billing address street: {item.billing_address.street}</p>
            </div>
            <div className="card-action">
                <span>SKU: </span>
                <a href={item.items["0"].sku} target="_blank">{item.items["0"].sku}</a>

                <p>Payment information: {item.payment.additional_information["0"]}</p>
                <p>City: {item.billing_address.city}</p>
                <p>Region: {item.billing_address.region}</p>
                <p>Amount ordered: {item.payment.amount_ordered}</p>
                <p>Updated At: {item.items["0"].updated_at}</p>
            </div>
        </div>
    </div>
);

export default NewOrder;