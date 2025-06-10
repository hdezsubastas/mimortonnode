import sql from 'mssql'

const dbSettings = {
    user:'auctuser',
    password:'rfcsystems',
    server:'130.82.1.75',
    database:'auction',
    port: 1433,
    options:{
        encrypt: false,
        trustServerCertificate: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

export const getConnection = async () => {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(error){
        console.log(error);
    }
}
