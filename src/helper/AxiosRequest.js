import axios from 'axios';

export default axios.create({
    headers: {
        "Content-type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
    }
})