import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
            el: "#app",
            data: function () {
                return {
                    
                    stavke: [
                        
                    ]
                    
                }
            },
            mounted() {
                if (localStorage.getItem('imenik-data')) {
                try {
                    this.stavke = JSON.parse(localStorage.getItem('imenik-data'));
                } catch(e) {
                    localStorage.removeItem('imenik-data');
                }
                }},
            methods: {
                izbaciStavku(mesto){
                    this.stavke.splice(mesto,1)
                    console.log( "Izbacujem " + mesto);

                    this.saveToLocalStorage();
                },
                dodajStavku(){
                    this.stavke.push({
                        ime: document.getElementById('Ime').value,
                        telefon: document.getElementById('Broj').value
                    })

                    document.getElementById('Ime').value = "";
                    document.getElementById('Broj').value = "";
                    
                    this.saveToLocalStorage();
                },
                saveToLocalStorage(){
                        localStorage.setItem('imenik-data', JSON.stringify(this.stavke));
                }
            }
}).$mount('#app')
