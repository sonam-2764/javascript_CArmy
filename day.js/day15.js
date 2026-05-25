// //CALLBACK HELL
//
//zomato application
function placeOrder(callback){
    console.log("Payment is in progress");

    setTimeout(() => {
        console.log("Payment is received and order get placed");
        callback();
},3000)
}

function preparingOrder(callback){
    console.log("your food preparatin started");
    setTimeout(()=>{
        console.log("Your order is now prepared");
        callback();
    },3000);
}

function pickupOrder(){
    console.log("Delivery boy is on the way to pick order");
    setTimeout(()=>{
        console.log("I've picked up the order");
    },3000);
}



placeOrder(() => {
    preparingOrder(()=>{
        pickupOrder();
    });
});

