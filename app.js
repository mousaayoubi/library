class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  get ratings() {
    return this._ratings;
  }
  
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  
  getAverageRating() {
    let arrSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    let arrLength = this.ratings.length;
    return (arrSum / arrLength).toFixed(2);
  }
  
  addRating(rating) {
    if (Math.max(rating) > 5 || Math.min(rating) < 1) {
      return console.log('Rating should be between 1 and 5');
    } else {
      return this.ratings.push(rating);
    }
  }
  
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }
};
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
};
class Movie extends Media {
  constructor(director, title, runTime, movieCast) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  
  get director() {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }
  
  get movieCast() {
    return this._movieCast;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  
  get artist() {
    return this._artist;
  }
  
  get songs() {
    return this._songs;
  }
  
  addSongs(song) {
   return this._songs.push(song);
  }
  
  shuffle() {
    let arrSongLength = this.songs.length; 
    let random = Math.floor(Math.random() * arrSongLength)
    return this.songs[random];
  }
}
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything);
historyOfEverything.getAverageRating();
console.log('The average rating for the History of Everything book is '+ historyOfEverything.getAverageRating());
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log('The average rating for the speed movie is '+ speed.getAverageRating());
const lushLife = new CD('Zara Larsson', 'Lush Life', 'I...');
lushLife.toggleCheckOutStatus();
lushLife.addRating(4);
lushLife.addRating(5);
lushLife.addRating(5);
lushLife.addSongs('song1');
lushLife.addSongs('song2');
lushLife.addSongs('song3');
console.log(lushLife);
console.log(lushLife.shuffle());
class Catalog extends Media {
  constructor(title) {
    super(title)
  }
};
console.log(Catalog);