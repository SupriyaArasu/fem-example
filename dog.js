// const dg=document.querySelector(".doggos");

function api() {
    var promise = new Promise(function (resolve, reject) {
        const url="https://dog.ceo/api/breeds/image/random";
        fetch(url)
            .then((response) => {
                const dogUrl=response.json();
                console.log("dogUrl",dogUrl)
                return dogUrl;
            })
            .then((dogUrl)=>{
                const img=document.createElement("img")
                img.src=dogUrl.message;
                img.alt="doggies"
                doggos.appendChild(img);
            })
        })
        return promise;
}
api();


const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      console.log("processingPromise",processingPromise);
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
