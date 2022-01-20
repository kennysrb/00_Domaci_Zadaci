let sportisti = (resolve, reject) => {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(this.responseText);
      resolve(data);
    } else if (this.readyState === 4) {
      reject("Doslo je do greske.");
    }
  });
  request.open("GET", "./sportisti.json");
  request.send();
};

let ispisPorukeStranica = (poruka) => {
  document.body.innerHTML += `<p class='error'>${poruka}</p>`;
};

let ispisPorukeKonzola = (poruka) => {
  console.log(poruka);
};

//PROSECNA VISINA
let zadatak1 = (niz) => {
  let sum = 0;
  niz.forEach((kor) => {
    sum += kor.visina;
  });
  console.log(`Prosecna visina je ${(sum / niz.length).toFixed(2)}`);
};

//NAJMANJE TRANSFERA
let zadatak2 = (niz) => {
  let min = niz[0];
  niz.forEach((kor) => {
    if (kor.timovi.length < min.timovi.length) {
      min = kor;
    }
  });
  console.log(min);
};

//SVI KOJI SU IGRLALI ZA PARTIZAN
let zadatak3 = (niz) => {
  niz.forEach((kor) => {
    if (kor.timovi.includes("Partizan")) {
      console.log(kor);
    }
  });
};

sportisti(zadatak1, ispisPorukeStranica);
sportisti(zadatak2, ispisPorukeStranica);
sportisti(zadatak3, ispisPorukeStranica);
