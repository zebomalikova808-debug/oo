let ism = prompt("Ismingizni kiriting:");

if (ism) {
  let harf = prompt("Istalgan harfni kiriting:");

  if (harf) {
    let kichikIsm = ism.toLowerCase();
    let kichikHarf = harf.toLowerCase();

    if (kichikIsm.includes(kichikHarf)) {
      alert(`${ism} ismida "${harf}" harfi bor.`);
    } else {
      alert(`${ism} ismida "${harf}" harfi yo'q.`);
    }
  }
}
