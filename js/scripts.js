$(document).ready(function() {
    $("#order").submit(function(event) {

        var priceOfPizza = function getSize() {
        var Size = document.getElementById("size").value;
        return parseInt(Size);
        };
        alert("function is working");
    
        var pizzaCrustPrice = function getCrustType() {
            var Crust = document.getElementById("crusts").value;
            return parseInt(Crust);
        };

        var pizzaToppingsPrice = function getToppings() {
            var Toppings = document.getElementById("topings").value;
            return parseInt(Toppings);
        };

        var pizzaQuantityPrice = function getQuantity() {
            var Quantity = document.getElementById("number").value;
            return parseInt(Quantity);
        };

        function UserOrder(size, crust, toppings, quantity) {
            this.newSize = size;
            this.newCrust = crust;
            this.newToppings = toppings;
            this.newQuantity = quantity;
        };

        var inputForUserOrder = new UserOrder(
            priceOfPizza(),
            pizzaCrustPrice(),
            pizzaToppingsPrice(),
            pizzaQuantityPrice()
        );
        var totalPrice = (inputForUserOrder.newSize + inputForUserOrder.newCrust + inputForUserOrder.newToppings) * inputForUserOrder.newQuantity;
        alert(totalPrice);

            if (delivery === true) {
                for (;;) {
                    var location = prompt(
                    "where is your location? "
                    );
                    if (location !== "") {
                    alert(
                        "Your order will be delivered at " +
                        location +
                        ". Thank you for your trust"
                    );

                }
                alert(
                    "Your order is = ksh" +
                    totalPrice +
                    " + ksh100 delivery fee."
                );
                
                alert(
                    "Your total order is = ksh" + totalPrice
                );
                }
                $("#myForm").reset();
            } else {
                alert("Please fill in all the valid fields for an order");
            }
        event.preventDefault();
    });
});
