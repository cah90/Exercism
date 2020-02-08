//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
	this._matrix = string;
  }

  get rows() {
    return this._matrix.split('\n').map(element => element.split(' ').map(element => +element));
  }

  get columns() {
    return this.rows[0].map((element, index) => this.rows.map(element => element[index]));
  }
}