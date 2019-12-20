// $(document).ready(function() {
//     $("#myForm").submit(function(event) {

//         var priceOfPizza = function getSize() {
//         var Size = document.getElementById("size").value;
//         return parseInt(Size);
//         };
    
//         var pizzaCrustPrice = function getCrustType() {
//             var Crust = document.getElementById("crusts").value;
//             return parseInt(Crust);
//         };

//         var pizzaToppingsPrice = function getToppings() {
//             var Toppings = document.getElementById("topings").value;
//             return parseInt(Toppings);
//         };

//         var pizzaQuantityPrice = function getQuantity() {
//             var Quantity = document.getElementById("number").value;
//             return parseInt(Quantity);
//         };

//         function UserOrder(size, crust, toppings, quantity) {
//             this.size = size;
//             this.crust = crust;
//             this.toppings = toppings;
//             this.quantity = quantity;
//         };

//         var inputForUserOrder = new UserOrder(
//             priceOfPizza(),
//             pizzaCrustPrice(),
//             pizzaToppingsPrice(),
//             pizzaQuantityPrice()
//         );
//         var totalPrice = (inputForUserOrder.size + inputForUserOrder.crust + inputForUserOrder.toppings) * inputForUserOrder.quantity;
//         alert(totalPrice);

//             if (delivery === true) {
//                 for (;;) {
//                     var location = prompt(
//                     "where is your location? "
//                     );
//                     if (location !== "") {
//                     alert(
//                         "Your order will be delivered at " +
//                         location +
//                         ". Thank you for your trust"
//                     );

//                 }
//                 alert(
//                     "Your order is = ksh" +
//                     totalPrice +
//                     " + ksh100 delivery fee."
//                 );
                
//                 alert(
//                     "Your total order is = ksh" + totalPrice
//                 );
//                 }
//                 $("#myForm").reset();
//             } else {
//                 alert("Please fill in all the valid fields for an order");
//             }
//         event.preventDefault();
//     });
// });


function fn(){
        var price = 0;
        var pizzaSize = document.getElementById("size");
        var pizzaSizePrice = pizzaSize.options[pizzaSize.selectedIndex].value;
        var pizzaCrusts = document.getElementById("crusts");
        var pizzaCrustsPrice = pizzaCrusts.options[pizzaCrusts.selectedIndex].value;
        var pizzaTopings = document.getElementById("topings");
        var pizzaTopingsPrice = pizzaTopings.options[pizzaTopings.selectedIndex].value;
        var pizzaNumber = document.getElementById("numbers").value;
        var location = document.getElementById("location").value;
        price = parseInt(pizzaSizePrice) + parseInt(pizzaCrustsPrice) + parseInt(pizzaTopingsPrice);
        totalPrice = price * parseInt(pizzaNumber);
        alert("Your total price is" +totalPrice + "and your pizza will be delivered at " + location);
        event.preventDefault();
}

// function fn1(){
//         var price = 0;
//         var pizzaSize = document.getElementById("size1");
//         var pizzaSizePrice = pizzaSize.options[pizzaSize.selectedIndex].value;
//         var pizzaCrusts = document.getElementById("crusts1");
//         var pizzacrustsPrice = pizzaCrusts.options[pizzaCrusts.selectedIndex].value;
//         var pizzaTopings = document.getElementById("toppings1");
//         var pizzaTopingsPrice = pizzaTopings.options[pizzaTopings.selectedIndex].value;
//         var pizzaNumber = document.getElementById("numbers1").value;
//         price = parseInt(pizzaSizePrice) + parseInt(pizzacrustsPrice) + parseInt(pizzaTopingsPrice);
//         totalPrice = price * parseInt(pizzaNumber);
//         alert("Your total price is" + totalPrice);
//         event.preventDefault();
// };
