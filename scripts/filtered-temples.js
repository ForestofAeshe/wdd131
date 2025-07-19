const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Logan Utah",
        location: "Logan, UT, USA",
        dedicated:"1884, May, 17",
        area: 119619,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
    },
    {
        templeName: "Taipei Taiwan",
        location: "Taipei, Taiwan",
        dedicated: "1984, November, 17",
        area: 9945,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg"
    },
    {
        templeName: "Bountiful Utah",
        location:"Bountiful, UT, USA",
        dedicated: "1994, November, 4",
        area: 104000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
    }
    ];




// function titleTemple (temples) {
//     document.querySelector("#temple-card").innerHTML = `${temples.templeName}`;
// }
// for (let i = 0; i <temples.length; i++)
// {
//     titleTemple(temples[i]);
// }
let templelist = "";

document.getElementById("home").addEventListener("click",myFunction());
document.getElementById("old").addEventListener("click",myFunction());
document.getElementById("new").addEventListener("click", myFunction());
document.getElementById("large").addEventListener("click", myFunction());
document.getElementById("small").addEventListener("click", myFunction());

function myFunction() {

  let templebutton = window.location.href.split("#")[1]
  temples
  .filter((data) =>
    {
      if (templebutton === "Large") {
        return data.area > 90000
      } else if (templebutton === "Small") { 
        return data.area < 10000
      } else if (templebutton === "Old") {
        return data.dedicated < 1900
      } else if (templebutton === "New") {
        return data.dedicated > 2000
      } else {
        return data
      }
    })
  .map((data) =>
  {
    templelist += `<div class="temple-card">
            <h2 class="temple-title">` + data.templeName + `</h2>
            <div class="temple-location">` + data.location + `</div>
            <div class="temple-dedicated">` + data.dedicated + `</div>
            <div class="temple-size">` + data.area + `</div>
            <img class="temple-image" src="` + data.imageUrl + `" alt="` + data.templeName + `" loading="lazy">
          </div>`;
  })

  document.getElementById("temple-grid").innerHTML = templelist;
};

myFunction();
