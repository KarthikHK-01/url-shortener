import { nanoid } from "nanoid"

async function handleShortURL (req, res) {
    const shortID = nanoid();
    const url = req.body.url;

    
    console.log(shortID);
}

handleShortURL();