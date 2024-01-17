
import React, { useEffect } from "react";
import axios from 'axios';


const Worldrank = async() => {
    const options = {
        method: 'POST',
        url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
        params: {
          cat: 'movies',
          count: '10'
        },
        headers: {
          'X-RapidAPI-Key': 'c3b0af8933msha4c6091ea95be72p187aaajsn144d6ebc216b',
          'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

      useEffect(() =>{
        Worldrank();
      }, [])

    return(
        <div></div>
    )
}


export default Worldrank;