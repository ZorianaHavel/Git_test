
class Coffe (water, coffe, milk){
    this.water;
    this.coffe;
    this.milk;
};


class Latte extends Coffe {
    constructor() {
        super(0, 0.33, 0.67);
    }
}

class Cuppchino extends Coffe {
    constructor() {
        super(0, 0.5, 0.5);
    }
}

class CoffeMachine {
    #waterAmount;
    #milkAmount;
    #coffeAmount;
    constructor();
    get waterAmount() {
        return this.#waterAmount
    }

    set waterAmount(value) {
        if (value > 0) {
            this.#coffeAmount = balue
        }
    }
    #makeCoffe(value, coffeClass) {
        this.#makeCoffe
    }

}
