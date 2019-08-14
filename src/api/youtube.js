import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBIcOnnRqzrc4KVC-1_2AXpEn60ZW0dSM0'
    }
});