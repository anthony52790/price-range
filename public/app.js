document.addEventListener("DOMContentLoaded", function(event) {
  let price1 = 100;
  let price2 = 500;

  let price = document.getElementsByClassName('input-price');
  let input_one = price[0];
  let input_two = price[1];
  input_one.placeholder = price1;
  input_two.placeholder = price2;

  for(let i=0; i<price.length; i++){
    asignationSimbol(price[i]);  
  }

  input_one.addEventListener('focus',function(e){this.parentElement.classList.add('active');})
  input_one.addEventListener('blur',function(e){this.parentElement.classList.remove('active');})
  input_two.addEventListener('focus',function(e){this.parentElement.classList.add('active');})
  input_two.addEventListener('blur',function(e){this.parentElement.classList.remove('active');})

  const btnPrice = document.getElementsByClassName('addprice')[0];
  const addPrice = document.getElementById('js-addPrice');
  addPrice.addEventListener('click',function(){
    console.log('clic');
  })

  function priceMaxMin(valuePrice){
      let minPrice = input_one.placeholder;
      let maxPrice = input_two.placeholder;
      let inputPrice = parseInt(valuePrice);
      console.log(inputPrice,maxPrice);
      if(inputPrice < parseInt(minPrice) || inputPrice > parseInt(maxPrice)){
        //console.log("el precio "+inputPrice+" esta fuera del rango: "+minPrice);
        addPrice.disabled=true;
        btnPrice.classList.remove('enabled');
      }
      else if(inputPrice > parseInt(maxPrice) || inputPrice < parseInt(minPrice)){
        ///console.log("el precio "+inputPrice+" esta fuera del rango: "+maxPrice);
        addPrice.disabled=true;
        btnPrice.classList.remove('enabled');
      }
      else{
        addPrice.disabled=false;
        btnPrice.classList.add('enabled');
      }
  }

  function validateInput(e){
    let elem = e.target;
    elem.value = e.target.value.replace(/[^\d]/g,'');
    let lenght = elem.value.length;
    if(lenght > 4) {
        elem.value = elem.value.substr(0,4);
    }else{
        if(elem.value !== ''){
          elem.parentElement.classList.add('sy');
          priceMaxMin(elem.value);
        }else{
          addPrice.disabled=true;
          btnPrice.classList.remove('enabled');
          elem.parentElement.classList.remove('sy');
        }

        let lp = elem.placeholder.length
        if(lenght == 1){
          elem.parentElement.classList.remove('s'+lp);
          elem.parentElement.classList.add('s1');
          elem.parentElement.classList.remove('s2');
        }
        else if(lenght == 2){
          elem.parentElement.classList.remove('s1');
          elem.parentElement.classList.add('s2');
          elem.parentElement.classList.remove('s3');
        }
        else if(lenght == 3){
          elem.parentElement.classList.remove('s2');
          elem.parentElement.classList.add('s3');
          elem.parentElement.classList.remove('s4');
        }
        else if(lenght == 4){
          elem.parentElement.classList.remove('s3');
          elem.parentElement.classList.add('s4');
        }
        else{
          elem.parentElement.classList.remove('s1');
          asignationSimbol(elem);
        }
    }
    return false;
  }

  input_one.addEventListener('keyup',validateInput);
  input_two.addEventListener('keyup',validateInput);

  function asignationSimbol(valueInput){
    let valueFrom = valueInput.placeholder;
    if(valueFrom.length==1){valueInput.parentElement.classList.add('s1');}
    else if(valueFrom.length==2){valueInput.parentElement.classList.add('s2');}
    else if(valueFrom.length==3){valueInput.parentElement.classList.add('s3');}
    else if(valueFrom.length==4){valueInput.parentElement.classList.add('s4');}
  }  
});
