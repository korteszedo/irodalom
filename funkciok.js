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