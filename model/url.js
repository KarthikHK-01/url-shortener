import { getDB } from "../config/db.js";

const col_name = "URL";

async function handleURLPOST(short, url) {
    const db = getDB();

    const isExisting = await db.collection(col_name).find({shortid: short});

    if(isExisting) {
        return res.status(200).json({short, url});
    }

    const result = await db.collection(col_name).insertOne({shortid: short, url: url});

    return result;
}

// async function 



export {handleURLPOST};