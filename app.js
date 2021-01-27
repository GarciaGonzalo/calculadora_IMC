const app = new Vue({    
    el: '#app',

    
    data: {
        resultado: document.getElementById('resultado'),
        nombre: '',
        altura: '',
        peso: '',
        imc: '',
        estado: '',
    },


    methods:{
        ResultadoDelIndice (indice){
        let resultadoDelIndice = '';
            if (indice < 18.5) {
                resultadoDelIndice = '<span id="alerta">Bajo peso</span>'
            }else if (indice >= 18.5 && indice < 25) {
                resultadoDelIndice = '<span id="pesoNormal">Peso normal</span>'
            }else if (indice >= 25) {
                resultadoDelIndice = '<span id="alerta">Sobre peso</span>'
            }else{
                resultadoDelIndice = 'Error de calculo'
            }
        return resultadoDelIndice;
        },

        validacionFormulario (){
            if (this.nombre == '') {
                resultado.innerHTML = `<span id="alerta">Por favor, completa tu Nombre</span>`;
            }else if (this.altura == '') {
                resultado.innerHTML = `<span id="alerta">Por favor, completa tu Altura</span>`;
            }else if (this.peso == '') {
                resultado.innerHTML = `<span id="alerta">Por favor, completa tu Peso</span>`;
            }
            else{
                resultado.innerHTML = `
                <p>${this.nombre} tu indice IMC es: ${imc}%  ${estado}</p>
                
                `;
            }
        },

        imprimirResultado (){
            imc = (this.peso / (this.altura * this.altura)).toFixed(2);
            estado = this.ResultadoDelIndice(imc);
            this.validacionFormulario();
        }
    }
})