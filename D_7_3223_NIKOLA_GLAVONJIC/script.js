// 10. ZADATAK Napisati funkciju množi koja određuje proizvod brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
    let proizvod = 1;
    for (i = n; i <= m; i++) {
      proizvod *= i;
    }
    return proizvod;
  }
  
  let multi = mnozi(2, 4);
  console.log(multi);
  
  // 11. ZADATAK Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
  
  function sredina(n, m) {
    let rez = (n + m) / 2;
    return rez;
  }
  
  let rez = sredina(4, 8);
  console.log(rez);
  
  // 12. ZADATAK Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
  
  function arSredina(n, m) {
    let brojac = 0;
    let suma = 0;
  
    for (i = n; i <= m; i++) {
      if (i % 10 == 3) {
        suma += i;
        brojac++;
      }
    }
    let rez = suma / brojac;
    return rez;
  }
  
  let arRez = arSredina(1, 34);
  console.log(arRez);
  
  // 13. ZADATAK Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
  
  function fontSize(a, boja, sirina) {
    document.body.innerHTML += `<p style="font-size:${a}px; color:${boja}; text-align: center; width:${sirina}%; margin: auto; margin-top: 150px">Igru igraju 2 ekipe sa po 5 igraca i jednim golmanom. Cilj igre je dati gol protivnickoj ekipi i sacuvati svoj gol. Utakmica traje 3 puta po 20 minuta.</p>`;
  }
  
  let text = fontSize("22", "blue", 50);