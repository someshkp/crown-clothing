import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 73.95;
    const publishableKey = 'pk_test_51HrGRDEBJJaBrL2Jr3N8em1I1Ura4rwiRPYmaqONfn8gRVv1cwgzTD54lUq9TYLViXcRRjaVluYvLlT9HKMpx0Ne00wUzfXGtI';


    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            currency='Rupee'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;