"use strict";
const persons = [
  {
    id: "ZfPTVEMQKf9vhNiUh0bj",
    image:
      "https://www.baaa.dk/media/b5ahrlra/maria-louise-bendixen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921650330000&format=webp",
    mail: "<a href=\"mailto:mlbe@eaaa.dk\">mlbe@eaaa.dk</a>",
    name: "Maria Louise Bendixen",
    title: "Senior Lecturer",
  },
  {
    id: "fTs84KRoYw5pRZEWCq2Z",
    image:
      "https://www.eaaa.dk/media/mfcpsgy1/rasmus-cederdorf.jpg?width=800&height=450&v=1db97e246f73210",
    mail: "<a href=\"mailto:race@eaaa.dk\">race@eaaa.dk</a>",
    name: "Rasmus Cederdorff",
    title: "Senior Lecturer",
  },
  {
    id: "gCs33KRoYg5pRZEWCq8J",
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen.jpg?width=800&height=450&v=1db9744144491d0",
    mail: "<a href=\"mailto:bki@eaaa.dk\">bki@eaaa.dk</a>",
    name: "Birgitte Kirk Iversen",
    title: "Senior Lecturer",
  },
  {
    id: "fjpRTRTjZHwrq3tTLHri",
    image:
      "https://www.baaa.dk/media/5buh1xeo/anne-kirketerp.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921531600000&format=webp",
    mail: "<a href=\"mailto:anki@eaaa.dk\">anki@eaaa.dk</a>",
    name: "Anne Kirketerp",
    title: "Head of Department",
  },
  {
    id: "pqzGY1MnHYm3I4Ca79Xn",
    image:
      "https://www.eaaa.dk/media/14qpfeq4/line-skjodt.jpg?width=800&height=450&rnd=133178433559770000",
    mail: "<a href=\"mailto:lskj@eaaa.dk\">lskj@eaaa.dk</a>",
    name: "Line Skjødt",
    title: "Senior Lecturer & Internship Coordinator",
  },
  {
    id: "HlvRHr58C05guOLl64k5",
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
    mail: "<a href=\"mailto:dob@eaaa.dk\">dob@eaaa.dk</a>",
    name: "Dan Okkels Brendstrup",
    title: "Senior Lecturer",
  },
  {
    id: "MlvJJr83C55auHLl64s7",
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?width=800&height=450&v=1da8a5a7a84e370",
    mail: "<a href=\"mailto:mnor@eaaa.dk\">mnor@eaaa.dk</a>",
    name: "Martin Aagaard Nøhr",
    title: "Lecturer",
  },
  {
    id: "NlvKKr84D66bvIMm75t8",
    image:
      "https://www.eaaa.dk/media/1yfflb3v/lars-boge-eskildsen.jpg?width=850&height=450&v=1dc16997f2dfd40",
    mail: "<a href=\"mailto:laes@eaaa.dk\">laes@eaaa.dk</a>",
    name: "Lars Bøge Eskildsen",
    title: "Senior Lecturer",
  },
];

const personList = document.querySelector("#person-list");

function showPersons() {
  personList.innerHTML = "";

  for (const person of persons) {
    showPerson(person);
  }
}

function showPerson(person) {
  const html = /* html */ `
    <article class="person-card">
        <img class="person-image" src="${person.image}" alt="${person.name}">
      <div class="person-info">
        <h3>${person.name}</h3>
        <p>${person.title}</p>
        <p>${person.mail}</p>
        <p>${person.image}</p>
      </div>
    </article>
  `;

  personList.insertAdjacentHTML("beforeend", html);
}

showPersons();