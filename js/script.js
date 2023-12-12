//! Descrizione:
// **Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
/*generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/


const { createApp } = Vue

createApp({
  data() {
    return {
        email:[],
        visible: true,
        
      
    }
  },

  methods:{
    emailGenerate(){
for(let i = 0 ; i <= 9; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
    (mail) => {
        console.log(mail);
        this.email.push(mail.data.response);
   });
    
}

    }
  },

   

  created(){
    this.emailGenerate();
  },
}).mount('#app')

