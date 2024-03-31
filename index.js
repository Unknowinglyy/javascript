const axios = require('axios');

const fetchData = async () => {
    const response = await axios.get('https://cat-fact.herokuapp.com/facts');
    for (item of response.data) {
        console.log(item.text)
    }
}

fetchData()