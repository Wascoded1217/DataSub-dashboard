
// amountVisiblility on user dashboard
  function togglePin() {
            let amountElement = document.getElementById('userBalance');
            let icon = document.getElementById('hiddenIcon');

            if (amountElement.dataset.hidden === "true") {
                amountElement.innerText = amountElement.dataset.amount;
                icon.classList.remove('fas', 'fa-eye-slash');
                icon.classList.add('fas', 'fa-eye'); 
                icon.style.cursor = 'pointer';
                amountElement.dataset.hidden = "false";
            }
            else {
                const masked = '*'.repeat(amountElement.dataset.amount.length);
                amountElement.innerText = masked;
                icon.classList.remove('fas', 'fa-eye');
                icon.classList.add('fas', 'fa-eye-slash');
                icon.style.color = 'white';
                amountElement.dataset.hidden = "true";
            }
        }
            document.addEventListener("DOMContentLoaded", function() {
            const amountElement = document.getElementById('userBalance');
            amountElement.dataset.amount = amountElement.innerText;
            amountElement.dataset.hidden = "true"; 
            amountElement.innerText = '*'.repeat(amountElement.dataset.amount.length); 
            });

function btnAccordion() {
    let accordion = document.getElementById('clickBtn');
    accordion.style.border = '0'
    accordion.style.outline = 'none'
    accordion.style.boxShadow = 'none'
    accordion.style.color= 'black'
    accordion.style.backgroundColor = 'transparent'
  }      

function btnAccordion1() {
    let accordion1 = document.getElementById('clickBtn1');
    accordion1.style.border = '0'
    accordion1.style.outline = 'none'
    accordion1.style.boxShadow = 'none'
    accordion1.style.color= 'black'
    accordion1.style.backgroundColor = 'transparent'
  }      

function btnAccordion2() {
    let accordion2 = document.getElementById('clickBtn2');
    accordion2.style.border = '0'
    accordion2.style.outline = 'none'
    accordion2.style.boxShadow = 'none'
    accordion2.style.color= 'black'
    accordion2.style.backgroundColor = 'transparent'
  }      

function btnAccordion3() {
    let accordion3 = document.getElementById('clickBtn3');
    accordion3.style.border = '0'
    accordion3.style.outline = 'none'
    accordion3.style.boxShadow = 'none'
    accordion3.style.color= 'black'
    accordion3.style.backgroundColor = 'transparent'
  }      

function btnAccordion4() {
    let accordion4 = document.getElementById('clickBtn4');
    accordion4.style.border = '0'
    accordion4.style.outline = 'none'
    accordion4.style.boxShadow = 'none'
    accordion4.style.color= 'black'
    accordion4.style.backgroundColor = 'transparent'
  }      
function btnAccordion5() {
    let accordion5 = document.getElementById('clickBtn5');
    accordion5.style.border = '0'
    accordion5.style.outline = 'none'
    accordion5.style.boxShadow = 'none'
    accordion5.style.color= 'black'
    accordion5.style.backgroundColor = 'transparent'
  }      

function btnAccordion6() {
    let accordion6 = document.getElementById('clickBtn6');
    accordion6.style.border = '0'
    accordion6.style.outline = 'none'
    accordion6.style.boxShadow = 'none'
    accordion6.style.color= 'black'
    accordion6.style.backgroundColor = 'transparent'
  }      

function btnAccordion7() {
    let accordion7 = document.getElementById('clickBtn7');
    accordion7.style.border = '0'
    accordion7.style.outline = 'none'
    accordion7.style.boxShadow = 'none'
    accordion7.style.color= 'black'
    accordion7.style.backgroundColor = 'transparent'
  }      

function btnAccordion8() {
    let accordion8 = document.getElementById('clickBtn8');
    accordion8.style.border = '0'
    accordion8.style.outline = 'none'
    accordion8.style.boxShadow = 'none'
    accordion8.style.color= 'black'
    accordion8.style.backgroundColor = 'transparent'
  }      

function btnAccordion9() {
    let accordion9 = document.getElementById('clickBtn9');
    accordion9.style.border = '0'
    accordion9.style.outline = 'none'
    accordion9.style.boxShadow = 'none'
    accordion9.style.color= 'black'
    accordion9.style.backgroundColor = 'transparent'
}    
  

// open and close menu bar
document.addEventListener('DOMContentLoaded', () => {
  let openBtn = document.querySelector('#openBtn');
  let menuIcon = document.querySelector('.openbtn i');
  let sideBar = document.querySelector('.side-menubar');
  
  openBtn.addEventListener('click', () => {
    sideBar.classList.toggle('open')

    if (sideBar.classList.contains('open')) {
      menuIcon.classList.remove('fas', 'fa-bars')
      menuIcon.classList.add('fas', 'fa-times')
 
    }

    else {
      menuIcon.classList.remove('fas', 'fa-times')
      menuIcon.classList.add('fas', 'fa-bars')
  

    }
  });
  
});

        const date = new Date();
        const hour = date.getHours(); 
        const greeting = document.getElementById('greeting');

       if (hour >= 0 && hour < 12) {
            greeting.innerHTML = 'Good morning.'; 
        } else if (hour >= 12 && hour < 17) {
            greeting.innerHTML = 'Good day.'; 
        } else {
            greeting.innerHTML = 'Good evening.';
        }