<template>
    <div id="app-body">
        <h3>Imenik-App</h3>

        <input type="text" name="Ime" id="Ime" placeholder="Unesite Ime">
        <input type="text" name="Broj" id="Broj" placeholder="Unesite Broj">
        <button id="dugme" @click="dodajStavku()">Sačuvaj</button>
        
        <div class="inApp" v-for="(stavka, idx) in stavke" :key="idx">
            {{stavka.ime}} - {{stavka.telefon}}
            <span class="dugme" @click="izbaciStavku(idx)"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Body",
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
}
</script>
<style  scoped>
        #dugme {
            width: 100%;
            height: 30px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #4e685f;
            color: white;
        }
        .dugme{
            cursor: pointer;            
            display: inline-block;
            width: 26px;
            height: 26px;
            background-image: url(~@/assets/icon-delete-light.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
                
            
        }
        .dugme:hover {
            background-image: url(~@/assets/icon-delete.png);
            }
        input {
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
            border-radius: 10px;
            height: 30px;
        }
        h3 {
            text-align: center;
        }
        .inApp {
            display: flex;
            justify-content: space-between;
            margin: 15px 0;
            padding: 10px;
            border: 1px solid rgb(41, 66, 92);
            border-radius: 10px;

        }
        .inApp:hover {
            background-color: rgba(0, 0, 0, 0.158);
            color: white;
        }
</style>