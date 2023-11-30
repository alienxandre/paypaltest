
const PAYPAL_CLIENT_ID = 'AeNJpU7yAlrTs6iocfNzfHCOTP6Gnn6Mps_RI8POJObOCjQvz7aHYkfRG4eJixv-Tnsq3Qw4xhinJS_M';


function initiatePayPal() {

    const firstName = document.getElementById('firstName').value;
 

    //  PayPal SDK
    paypal.Buttons({
        createOrder: function (data, actions) {
          
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10.00', 
                    },
                    shipping: {
                        name: {
                            full_name: firstName,
                        },
                       
                    },
                }],
            });
        },
        onApprove: function (data, actions) {
            
            return actions.order.capture().then(function (details) {
               
                showThankYouPage(details.id);
            });
        },
    }).render('#paypal-button-container');
}

// agradecimento
function showThankYouPage(transactionId) {
 
    window.location.href = `/thank-you?transactionId=${transactionId}`;
}
