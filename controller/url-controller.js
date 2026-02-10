import { nanoid } from "nanoid"
import { handleURLPOST, handleURLGET } from "../model/url.js";

async function handleShortURL (req, res) {
    const shortID = nanoid();
    const url = req.body.url;

    const result = await handleURLPOST(shortID, url);

    return res.status(200).json(result);
    // console.log(shortID);
}

async function getURL (req, res) {
    const shortid = req.query.id;

    const result = await handleURLGET(shortid);
    console.log(result);
    res.redirect(result.url);

    return result;
}

export {handleShortURL, getURL};
// handleShortURL()