const inputbox = document.getElementById('inputbox')
// Beta api key
// const api_key = 'dc6zaTOxFJmzC';
// My api key
const api_key = 'anJbk89djIOxors8Eh7r9hzjVuJzzSyo';


//This is for input box
inputbox.addEventListener('input', function start() {


    const querryParams = inputbox.value.toString();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${querryParams}&limit=5&offset=0&rating=g&lang=en`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const imgurl = data.data[0].images.downsized.url;
            const imgTag = document.createElement('img');
            imgTag.setAttribute("src", `${imgurl}`);
            imgTag.setAttribute("width", "304");
            imgTag.setAttribute("height", "228");
            document.getElementById('result').appendChild(imgTag)
            // console.log(imgTag);
            // div.appendChild = imgTag;
        })
        .catch((e)=>{
            console.error(e);
        })
}
);

inputbox.value = '';