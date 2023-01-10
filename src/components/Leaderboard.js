import React, { useEffect, useState } from 'react';
import { aocFetch } from '../api/aocFetch';
//import MockData from '../testData/2254107.json';

const Leaderboard = () => {
    const [fetchedData, setFetchedData] = useState(null);
    // const data = MockData;
    // console.log(data.members);
    // //const parsedData =null;
    // //checkSchema(data)
    // const parsedData = JSON.parse(data.members);
    // console.log(parsedData)

    useEffect(() => {
        const data = aocFetch();
        setFetchedData(data);
       console.log(fetchedData)
    }, [])

    function checkSchema(obj) {
        for (const key in obj) {
          if (typeof obj[key] === 'object') {
            console.log(`${key}: object`);
            checkSchema(obj[key]);
          } else {
            console.log(`${key}: ${typeof obj[key]}`);
          }
        }
      }

    return(<div>
        <p>stats</p>
        <ul>
            <li>test</li>
            {fetchedData ? fetchedData.map((item) => (
        <p key={item.id}>{item.name}</p>
      )) : null}
        </ul>
        </div>)
}


export default Leaderboard;