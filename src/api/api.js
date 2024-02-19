import axios from 'axios';

const instanceAPi = axios.create({
    baseURL: 'https://bank.gov.ua/', // Replace with your API base URL
    timeout: 5000, // Set the timeout for requests
    headers: {
        'Content-Type': 'application/json',
        // Add any other default headers here
    },
});

export default instanceAPi;