// //CALLBACK HELL
//
//zomato application
function placeOrder(callback){
    console.log("Payment is in progress");

    setTimeout(() => {
        console.log("Payment is received and order get placed");
        callback;
},3000)
}

function preparingOrder(){
    console.log("your food preparatin started");
    setTimeout(()=>{
        console.log("Your order is now prepared");
    },3000);
}
placeOrder(preparingOrder);
//preparingOrder();
