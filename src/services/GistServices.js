import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';
const ACCESSTOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const getGistsByUsername = async (username) => {

    const headers = { 'Authorization': 'Bearer ' + ACCESSTOKEN };
    let url = API_BASE_URL + '/users/' + username  + '/gists';
    
    return axios.get(url, {headers})
    .then(res => {             

        let nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;      
        let linkHeader = res.headers.link;
        let nextUrl;

        if(linkHeader){
            let nextUrls = linkHeader.match(nextPattern);
            if(nextUrls && nextUrls[0]){
                nextUrl =  nextUrls[0];
            }
        }
      
        const data = {
            gists:res.data,
            nextUrl: nextUrl
        }
      
        return data;
    })
    .catch(err => {
      console.log(err);
    })
};

export const getForksByGistId = async (gistId) => {

    const headers = { 'Authorization': 'Bearer ' + ACCESSTOKEN };
    let url = API_BASE_URL + '/gists/' + gistId  + '/forks';
    return axios.get(url, {headers})
    .then(res => {        
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
};
   
export const getGistsPageByUrl = async (url) => {

    const headers = { 'Authorization': 'Bearer ' + ACCESSTOKEN };
    return axios.get(url, {headers})
    .then(res => {


      let nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
      let prevPattern = /(?<=<)([\S]*)(?=>; rel="prev")/i;  
      let linkHeader = res.headers.link;
      let nextUrl;
      let prevUrl;

      if(linkHeader){
        let nextUrls = linkHeader.match(nextPattern);
        if(nextUrls &&  nextUrls[0]){
            nextUrl =  nextUrls[0];
        }
        let prevUrls = linkHeader.match(prevPattern);
        if(prevUrls  &&  prevUrls[0]){
            prevUrl =  prevUrls[0];
        }

        const data = {
            gists:res.data,
            nextUrl: nextUrl,
            prevUrl: prevUrl
        }
      
        return data;
      }              
    })
    .catch(err => {
      console.log(err);
    })
}