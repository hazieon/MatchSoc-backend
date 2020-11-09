const { query }=require('../scripts/poolConnect')

const sql = "INSERT INTO users (id SERIAL PRIMARY KEY, firstname TEXT, surname TEXT, address TEXT, email TEXT, phone INTEGER, image TEXT, isbootcamper BOOLEAN, industry TEXT, interests TEXT[])";

const arrayData = [
    
]

async function populateTable() {
    const res = await query(sql);
    console.log(res)
}

populateTable()