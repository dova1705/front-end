const container = document.querySelector(".container");
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(json => render(json))

const render = arr => {
    arr.forEach(({url, title, albumId}) => {
        if([3, 7, 43, 59, 32, 9].includes(albumId)){ // .includes() роверяет, есть ли искомый элемент в массиве.
            const cardElement = document.createElement("div");
            const imgElement = document.createElement("img");
            const titleElement = document.createElement("p");
            const albumElement = document.createElement("p");
            
            imgElement.src = url;
            imgElement.alt = title;

            titleElement.innerText = `Title: ${title}`;
            albumElement.innerText = `Album ID: ${albumId}`;
            cardElement.append(imgElement, titleElement, albumElement);
            container.append(cardElement);
        }
    })
}