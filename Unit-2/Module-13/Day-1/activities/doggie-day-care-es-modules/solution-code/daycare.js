// exporting the DoggieDayCare class
export default class DoggieDayCare {

    // creates a constructor that takes in a capacity of dogs
    // with an empty array.
    constructor(capacity) {
        this.capacity = capacity;
        this.dogsField = [];
    }

    // getters and setters, equals & hashcode, and toString for the dogs
    get dogCount() {
        return this.dogsField.length;
    }

    get dogs() {
        return [...this.dogsField];
    }

    hasDog(name) {
        return this.dogsField.some(d => d.toLowerCase() === name.toLowerCase());
    }

    capacityExceeded() {
        return this.dogsField.length >= this.capacity - 1;
    }

    checkIn(name) {
        if (this.capacityExceeded() || this.hasDog(name)) {
            return false;
        }

        this.dogsField.push(name);

        return true;
    }

    checkOut(name) {
        const dogIndex = this.dogsField.findIndex(d => d.toLowerCase() === name.toLowerCase());
        if (dogIndex === -1) {
            return false;
        }
        this.dogsField.splice(dogIndex, 1);
        return true;
    }
}