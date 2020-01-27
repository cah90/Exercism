class Matrix {
  constructor(string) {
    console.log(`this is a string: ${string}`);
    this._matrix = string;
  }

  get rows() {

    const row = this._matrix.split('\n').map(element => element.split("").map(element => +element));
    console.log(`this is a row: ${row}`);
    return row;
  }

  get columns() {

    const column = this.rows[0].map((element, index) => this.rows.map(element => element[index]))
    console.log(`this is a column: ${column}`);
    return column;
  }

}

console.log(new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6').columns[3]);