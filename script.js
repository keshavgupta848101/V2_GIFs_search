// input box from html page
const inputbox = document.getElementById('inputbox');

// Beta api key
const api_key = 'dc6zaTOxFJmzC';

// Eventlistner to input box
inputbox.addEventListener('input', apiCall);

// fetching the url with fetch api method using async await
async function apiCall(e) {
    // Converting all types of text to a string
    let querryParams = e.target.value;
    console.log(querryParams);
    // Building the url 
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${querryParams}&limit=5&offset=0&rating=g&lang=en`;
    // Fetch api
    let response = await fetch(url);
    let data = await response.json();
    // Building img url
    const imgurl = await data.data[0].images.downsized.url;
    // Building img tag and appending to document
    const imgTag = document.createElement('img');
    imgTag.src = imgurl;
    imgTag.alt = data.data[0].title;
    document.getElementById('result').insertAdjacentElement('afterbegin', imgTag);   
}
