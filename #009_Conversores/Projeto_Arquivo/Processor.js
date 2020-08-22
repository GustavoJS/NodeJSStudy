class Processor {
    static Process(data)
    {
        let a = data.split("\r\n");
        let rows= [];
        // console.log(a);
        a.forEach(row =>{
            rows.push(row.split(","));
        });
        // console.log(rows);
        return rows;
    }
}

module.exports = Processor;