// //CALLBACK HELL
//A callback is just a function you pass into another function to be called later. It's the oldest pattern — simple, but gets messy fast.

// zomato application

const orderDetail = {
    orderId: 12345,
    food: ["Pizza", "biryani"],
    cost:620,
    customer_name:"sonam",
    customer_location:"Bhopal",
    restaurant_location:"Bhopal"
}

function placeOrder(orderDetail, callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(() => {
        console.log("Payment is received and order get placed");
        orderDetail.status = true;
        callback(orderDetail);
    },3000);
}

function preparingOrder(orderDetail, callback){
    console.log("your food preparation started");

    setTimeout(()=>{
        console.log("Your order is now prepared");
        callback();
    },3000);
}

function pickupOrder(callback){
    console.log("Delivery boy is on the way to pick order");

    setTimeout(()=>{
        console.log("I've picked up the order");
        callback();
    },3000);
}

function deliverOrder(){
    console.log("I'm on my way to deliver order");

    setTimeout(()=>{
        console.log("Order delivered successfully");
    },5000);
}

placeOrder(orderDetail, (orderDetail) => {

    preparingOrder(orderDetail, () => {

        pickupOrder(() => {

            deliverOrder();

        });

    });

});



