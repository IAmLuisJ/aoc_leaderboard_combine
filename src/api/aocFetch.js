import axios from "axios";
//Fetch from AoC API

//Need to provide a session cookie

//rate limit to once every 15 minutes(900) seconds

//For mock data use testData


export const aocFetch = async () => {
    const results = await axios.get(`https://adventofcode.com/2022/leaderboard/private/view/2254107.json`, {
        headers: {
            "session": process.env.SESSION_ID,
        }
    });
    return results.json();
}

