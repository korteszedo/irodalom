const authors = [
    {
      Szerző_neve: "Balassi Bálint",
      Korszak: "reformáció",
      Szerelmek1: "Losonczy Anna",
      Szerelmek2: "Dobó Krisztina"
    },
    {
      Szerző_neve: "Csokonai Vitéz Mihály",
      Korszak: "felvilágosodás",
      Szerelmek1: "Vajda Juliána"
    },
    {
      Szerző_neve: "Petőfi Sándor",
      Korszak: "magyar romantika",
      Szerelmek1: "Mednyánszky Berta",
      Szerelmek2: "Szendrey Júlia"
    },
    {
      Szerző_neve: "Ady Endre",
      Korszak: "20. század",
      Szerelmek1: "Léda",
      Szerelmek2: "Csinszka"
    }
];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const tbody = document.createElement('tbody');
  

const szerzo_nev = document.createElement('th');
szerzo_nev.innerHTML = 'Szerző neve';

const korszak = document.createElement('th');
korszak.innerHTML = 'Korszak';

const szerelem1 = document.createElement('th');
szerelem1.innerHTML = 'Szerelem';

szerelem1.colSpan = 2;

  
  

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
table.appendChild(tbody);

tr.appendChild(szerzo_nev);
tr.appendChild(korszak);
tr.appendChild(szerelem1);

render();
const form = document.getElementById('form');


form.addEventListener('submit', function(e){

    const nev = document.getElementById('kolto_nev');
    e.preventDefault();
    const korszak = document.getElementById('korszak');
    const szerelem1 = document.getElementById('szerelem1');
    const szerelem2 = document.getElementById('szerelem2');
    const check = document.getElementById('masodik');

    const nevvalue = nev.value;
    const korszakvalue = korszak.value;
    let szerelem1value = szerelem1.value;
    let szerelem2value = szerelem2.value;
    const checkvalue = check.checked;



    
    if(validatefields(nev, korszak)){

        if(checkvalue == false){
            szerelem2value = undefined;
        }

        if (szerelem1value == "") {
           szerelem1value = '-';
        }

        if (szerelem2value == "") {
            szerelem2value = undefined;
        }



        const uj_adatok ={
            Szerző_neve: nevvalue,
            Korszak: korszakvalue,
            Szerelmek1: szerelem1value,
            Szerelmek2: szerelem2value
        }

        authors.push(uj_adatok);
        render();
        form.reset()
    }
    
})




function render() {
    const tablebody = tbody;
    tbody.innerHTML = '';
    
  
    for (let elso of authors) {
      let sor = document.createElement('tr');
  
      const szerzo = document.createElement('td');
      szerzo.innerHTML = elso.Szerző_neve;
      sor.appendChild(szerzo);
  
      const korszak = document.createElement('td');
      korszak.innerHTML = elso.Korszak;
      sor.appendChild(korszak);
  
      const szerelem1 = document.createElement('td');
      szerelem1.innerHTML = elso.Szerelmek1;
      sor.appendChild(szerelem1);
  
      if (elso.Szerelmek2 != undefined) {
        const szerelem2 = document.createElement('td');
        szerelem2.innerHTML = elso.Szerelmek2;
        sor.appendChild(szerelem2);
      }
      else
      {
        szerelem1.colSpan = 2;
        }
  
      tablebody.appendChild(sor);
    }

}

function validatefields(nev, korszak){
    let result = true;

    if(nev.value == ''){
        const error = document.getElementById('nev_error');
        error.innerHTML = 'ki kell töletni'

        result = false;
    }

    if (korszak.value == ''){
        const error = document.getElementById('korszak_error');
        error.innerHTML = 'ki kell töletni'

        result = false;
    }

    return result;
}
  
