class Media {
  constructor(title) {
    this._title = title;
    this._isCheckout = isCheckout;
    this._ratings = ratings;
  }

  get title() {
    return this._title;
  }

  get isCheckout() {
    return this._isCheckout;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckout(isCheckout) {
    return (this._isCheckout = isCheckout);
  }

  toggleCheckOutStatus() {
    this._isCheckout = !this._isCheckout;
  }
}
console.log(Media);
