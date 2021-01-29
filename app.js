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

    //Comentario prueba
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
                <span>${this.nombre} tu indice IMC es: ${imc}%  ${estado}</span>
                <span id="ayuda">
                    <img src="imagenes/ayuda.svg" id="imagen-ayuda" alt="">
                    <span id="descripcion-ayuda">
            
                        <ol class="lista" id="listaValores">
                            <ul>porcentaje <= 18,5</ul>
                            <ul>18,5 < porcentaje < 25</ul>
                            <ul>porcentaje >= 25</ul>
                        </ol>
            
                        <ol class="lista" id="listaPeso">
                            <ul>Bajo peso</ul>
                            <ul>Peso normal</ul>
                            <ul>Sobre Peso</ul>
                        </ol>
                    </span>
                 </span>
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
