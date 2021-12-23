const btn = document.querySelectorAll('.btn')
const emptyDiv = document.getElementById('emptydiv')
const place1 = document.getElementById('tajmahal')
const place2 = document.getElementById('redfort')
const place3 = document.getElementById('jallianwalabagh')
const place4 = document.getElementById('victoriamemorial')
const place5 = document.getElementById('fatehpurisikri')


function toggleAppearance(e) {
  const btnValue = e.target.textContent.replace(/\s/g, "").toLowerCase();
  let place;

  switch(btnValue){
    case 'tajmahal': place = place1; break; 
    case 'redfort': place = place2; break; 
    case 'jallianwalabagh': place = place3; break; 
    case 'victoriamemorial': place = place4; break; 
    case 'fatehpurisikri': place = place5; break; 
  }

  place.classList.toggle('invisible');
  
  emptyDiv.classList.add('invisible')

}

btn.forEach(button => button.addEventListener('click', toggleAppearance))