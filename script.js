document.body.innerHTML = `<div class="heading-container">
<h1>List of brewerys</h1>
<img class="icon" src="https://media.istockphoto.com/vectors/modern-beer-and-brewery-emblem-icon-design-vector-id845295396" width="176px" height="127px"alt="icon">
<img class="icon" src="https://image.flaticon.com/icons/png/512/1484/1484269.png" width"150px" height="150px"alt="icon">
</div>
<div id="mainContainer" class="main-container"> </div>`;

const getData = async () => {
 try {
   const data = await fetch("https://api.openbrewerydb.org/breweries");
   const brewerys = await data.json();
   mainContainer.innerHTML = "";
   brewerys.forEach((brewery) => {
     displayData(brewery);
   });
 } catch (error) {
   console.log(error);
 }
};

getData();
const displayData = (object) => {
 mainContainer.innerHTML += `
 <div class="container">
 <h3 class="blue">Breweries Name:<span>${object.city}</span></h3>
 <p class="para blue">Brewries Type:<span>${object.brewery_type}</span></p>
 <p class="para blue">Brewries Phone:<span>${object.phone}</span></p>
 <p class="para blue">Brewries Website:<span>${object.website_url}</span></p>
 <p class="para blue">Brewries Address:<span>${object.street}</span></p>
 <p class="para blue">Brewries State:<span>${object.state}</span></p>
 <p class="para blue">Brewries Zip:<span>${object.postal_code}</span></p>
 <p class="para blue">Brewries Country:<span>${object.country}</span></p>
 </div>`;
};

