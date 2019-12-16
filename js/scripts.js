$(document).ready(function(event) {
    $("#order").submit(function(event) {
        var sizePrice = function getSize() {
        var pizzaSize = document.getElementById("size").value;
        return parseInt(pizzaSize);
        };
        var crustPrice = function getCrustType() {
            var pizzaCrust = document.getElementById("crusts").value;
            return parseInt(pizzaCrust);
        };
        var toppingsPrice = function getToppings() {
            var pizzaToppings = document.getElementById("toppings").value;
            return parseInt(pizzaToppings);
        };
        var quantityPrice = function getQuantity() {
            var pizzaQuantity = document.getElementById("numbers").value;
            return parseInt(pizzaQuantity);
        };
        function Order(size, crust, toppings, quantity) {
            this.newSize = size;
            this.newCrust = crust;
            this.newToppings = toppings;
            this.newQuantity = quantity;
        }
        var inputForUserOrder = new Order(
            sizePrice(),
            crustPrice(),
            toppingsPrice(),
            quantityPrice()
        );

        $(document).ready(function() {
            $("#checkout").on("click",function() {
                var totalPrice = (inputForUserOrder.newSize +
                    inputForUserOrder.newCrust +
                    inputForUserOrder.newToppings) *
                    inputForUserOrder.newQuantity;
                alert(totalPrice);
            });
        });

  });

});


