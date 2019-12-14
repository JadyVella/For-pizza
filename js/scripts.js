function pizza(size, crust, topings) {
    this.size = size;
    this.crust = crust;
    this.topings = topings;
}

var large = new pizza(["large", "medium", "small"], ["crispy", "stuffed", "gluten-free", "cheese-filled"], ["pepperoni", "mushroom", "onions", "sausage", "bacon", "extra cheese", "black olives", "green peppers"]);

function amount(size, crust, topings) {
    this.size = [large, medium, small];
}