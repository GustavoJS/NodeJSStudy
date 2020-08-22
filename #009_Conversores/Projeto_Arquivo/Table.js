class Table {
    constructor(arr){
        this.header = arr[0]; // Cabeçalho
        arr.shift();
        this.rows = arr; // Linhas
    }

    get RowCount(){
        return this.rows.length;
    }

    get ColumnsCount(){
        return this.header.length;
    }
}


module.exports = Table;