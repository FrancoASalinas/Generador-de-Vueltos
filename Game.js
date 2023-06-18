class Game{
    constructor (temp, priceMin, priceMax, difference){
        this.temp = temp;
        this.priceMin = priceMin;
        this.priceMax = priceMax;
        this.difference =difference;
        this.price;
        this.pago;
        this.vueltoCorrecto = 0;
        this.error = undefined;
    }
     precioAleatorio(num1, num2){
        let num1ToN;
        let num2ToN;
        if(num1 > num2){
            num1ToN = parseFloat(num1);
            num2ToN= parseFloat(num2);  
        } else if(num1 < num2){
            num1ToN = parseFloat(num2);
            num2ToN= parseFloat(num1); 
        }

        this.price = Math.floor(Math.random() * (num2ToN - num1ToN + 1)) + num1ToN;

    }
     pagoAleatorio(num1,num2){
        const num1ToN = parseFloat(num1);
        const num2ToN = parseFloat(num2);
        this.pago = Math.floor(Math.random() * ((num1ToN*(num2ToN/100)+num1ToN) - num1ToN + 1)) + num1ToN
    }
     displayJuego(){
        if (isNaN(this.price) || isNaN(this.pago)) {
            generadorOptionsP.textContent = 'Los campos de precio y pago son obligatorios'
        } else if(this.price <= 0 || this.pago <= 0){
            generadorOptionsP.textContent = 'Los valores no pueden ser menores a 0'
        }
        else{
        vuelto.value = '';
        generadorOptions.style.display = 'none';
        generadorGame.style.display = 'flex';
        para1.textContent = this.price;
        para2.textContent = this.pago;
        }
    }
    generarJuego(){
        this.temp = tempInput.value;
        this.priceMin = priceMin.value;
        this.priceMax = priceMax.value;
        this.difference = difference.value;
        this.precioAleatorio(this.priceMin, this.priceMax);
        this.pagoAleatorio(this.price, this.difference);
        this.displayJuego();
        this.vueltoCorrecto = this.pago - this.price;
        vuelto.focus();
        console.log('sexo');
        if (tempInput.value !== ''){
            timeoutID = setTimeout( ()=> this.resultado(), this.temp*1000);
        } 
    }
     resultado(){
        let vueltoDeVerdad = this.vueltoCorrecto.toString()
        generadorGame.style.display = 'none';
        generadorEnd.style.display = 'flex';
        if(parseFloat(vuelto.value) === this.vueltoCorrecto){
            paraEnd.textContent = 'Correcto!, el vuelto es de: ' + vueltoDeVerdad;
        } else if (vuelto.value === '') {
            paraEnd.textContent = 'Se acabó el tiempo, ' + 'el vuelto es de: ' + vueltoDeVerdad
        } else {
            paraEnd.textContent = 'Incorrecto, el vuelto es de ' + vueltoDeVerdad + ', tu respuesta fue: ' + vuelto.value.toString();
        }
    }
    displayOptions(){
        generadorOptions.style.display = 'flex';

    }
}
