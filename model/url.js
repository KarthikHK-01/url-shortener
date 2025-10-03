import { getDB } from "../config/db.js";

const col_name = "URL";

async function handleURLPOST(short, url) {
    const db = await getDB();

    console.log("Searching URL:", url);
    const isExisting = await db.collection(col_name).findOne({url});

    if(isExisting) {
        console.log("Found in DB:", isExisting);
        return isExisting;
    }

    const result = await db.collection(col_name).insertOne({shortid: short, url: url});

    const res = await db.collection(col_name).findOne({url});

    console.log("Inserted:", res);

    return res;
}

async function handleURLGET (shortid) {
    const db = await getDB();

    const result = await db.collection(col_name).findOne({shortid: shortid});

    return result;
}



export {handleURLPOST, handleURLGET};