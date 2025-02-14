class Movie {
    constructor(title, rating) {
        this.title = title;
        this.rating = rating;
    }

    isHit() {
        return this.rating >= 8;
    }
}


const movie1 = new Movie("Inception", 8.8);
console.log(`${movie1.title} is a hit: ${movie1.isHit()}`); 

const movie2 = new Movie("Some Random Movie", 6.5);
console.log(`${movie2.title} is a hit: ${movie2.isHit()}`); 
