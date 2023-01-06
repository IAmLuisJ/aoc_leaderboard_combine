//Fetch from AoC API

//Need to provide a session cookie

//rate limit to once every 15 minutes(900) seconds

//For mock data use testData

const APIURL =  "https://adventofcode.com";

export const aocFetch = async () => {
    const results = await fetch(`${APIURL}"/2022/leaderboard/private/view/2254107.json"`, {
        headers: {
            "session": "SESSION_ID",
        }
    });
    return results.json();
}

