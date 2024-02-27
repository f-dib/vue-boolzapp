const { createApp } = Vue

createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giovanna',
                    avatar: './img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            activeContact: {},
            searchChat: '',

            newMessage: '',
            isWriting: false,
            randomAnswer: [
                "Ok",
                "A dopo",
                "Scusa, ho avuto un contrattempo faccio tardi",
                "That's what she said",
                "So cosa hai fatto la scorsa estate"
            ],


            newContact: '',
            isLoading: true,
            isWelcome: true,

        }
    },
    methods: {

        // 
        // Al click sulla singola chat prendo l'indice presente nell'oggetto 

        changeActiveContact(index) {

            const indx = this.contacts.indexOf(this.filteredChat[index]);
            this.activeContact = this.contacts[indx];
            
            // 
            // Una volta effettuato il click setto il booleano presente per la visualizzazione della pagina di benvenuto su falso
            // in maniera tale da che tramite il v-if possa sostituire la visualizzazione di questo elemento con la pagina della chat

            this.isWelcome = false;

        },

        // 
        // Prendo la stringa contenente la data e la formatto per ottenere solo ore e minuti

        time (data){

            const hour = data.date.split(" ")[1]
            return hour.split(":").slice(0, 2).join(":")

        },


        // 
        // Al click invio un messaggio e dopo un secondo ottengo una risposta

        addMessage() {

            // 
            // Controllo che non permette l'invio di messaggi vuoti o testi composti di soli spazi

            if (this.newMessage.length != 0 && this.newMessage.trim()){  

                // 
                // Inserisco l'indice in una costante cosi che una volta cambiata chat il valore 
                // selezionato resti memorizzato è risponda alla chat corretta

                const actualIndex = this.activeContact.messages;

                // 
                // Pusho nell'array l'oggetto con il messaggio presente nel campo di testo

                actualIndex.push({date: new Date().toLocaleString("it-IT"),
                                                  message: this.newMessage, 
                                                  status: 'sent'});
    
                  


                // 
                // Svuoto il testo presente nel campo di input

                this.newMessage = "";
    
                this.goToBottom();


                // 
                // Setto un timeout di risposta di un secondo in cui mi pushera una oggetto random contenete un messaggio di risposta

                setTimeout(() => {
                    let randomNumber = Math.floor(Math.random() * this.randomAnswer.length);

                    actualIndex.push({date: new Date().toLocaleString("it-IT"),
                                                      message: this.randomAnswer[randomNumber], 
                                                      status: 'received'})

                    this.goToBottom();
                }, 1000)

            }

        },


        // 
        // Controllo per riscontrare se è presente del testo nel campo di input e cambiare l'icona da microfono a invio

        addText() {

            if (this.newMessage.length != 0 && this.newMessage.trim()){

                if(this.newMessage.length === 0) {
                    this.isWriting = false;
                } else { 
                    this.isWriting = true;
                }
                
            }

            return this.newMessage.length === 0 ? `fa-solid fa-microphone` : `fa-solid fa-paper-plane`;

        },


        // 
        // Aggiunta di un contatto alla sezione delle chat 

        addContact() {
           
            // 
            // Controllo che non permette l'invio di messaggi vuoti o testi composti di soli spazi

            if (this.newContact.length != 0 && this.newContact.trim()){
                
                // 
                // Pusho oggetto contente informazioni sul nuovo contatto

                this.contacts.push({name: this.newContact, 
                                    avatar: './img/a.jpg',
                                    visible: true,
                                    messages: []}),

                // 
                // Svuoto il campo di input

                this.newContact = "";
            }

        },


        // 
        // Funzione per eliminare un messaggio

        deleteMessage(activeContact, messageIndex) {
            
            // Delete the element from the message array that corresponds to the index reported in the parameter
            // Cancello l'elemento dall'array dei messaggi al parametro corrispettivo dell'index

            activeContact.messages.splice(messageIndex, 1);

        },


        // Funzione per eliminare tutti i messaggi

        deleteAllMessages(activeContact){

            // 
            // Cancello tutto l'array dei messaggi

            activeContact.messages.splice(0, activeContact.messages.length)
        },

        // 
        // Funzione che cancella il contatto

        deleteContact(activeContact) {

            // 
            // Salvo in una costante l'index dei contatti attivi

            const chatIndex = this.contacts.indexOf(activeContact);

            if(chatIndex > -1) {

                // 
                // Rimuovo dall'indice il contatto attivo

                this.contacts.splice(chatIndex, 1);

                // 
                // Controllo che se la lunghezza dell'array è maggiore di zero  
                // mi mostri una volta cancellato il contatto la chat successiva

                if (this.contacts.length > 0) {
                    this.activeContact = this.contacts[chatIndex];
                } else {

                    // 
                    // In caso l'array sia vuoto mi mostra una pagina vuota 

                    this.activeContact = {};
                }
            }      
        },

        // 
        // Funzione toggle collegata all'html che mi permette di attivare la dark mode

        isDark(){
            document.documentElement.classList.toggle("my_dark");
        },


        // 
        // Funzione che mi permette all'invio o all'arrivo di ogni messaggio di scrollare la pagina e renderlo visibile

        goToBottom() {
            
            // 
            // modo per selezionare l'elemento tramite il suo riferimento $refs ed inserirlo in una costante
            
            const targetRef = this.$refs.single_chat;
            
            this.$nextTick(() => {
              
                targetRef.scrollTo(
                {
                  top: targetRef.scrollHeight,
                  left: 0,
                  behavior: "smooth"
                }
              );

            });
        }

    },
    mounted() {

        // 
        // Timer che mi permette di visualizzare per un secondo la loading page

        setTimeout(() => {
            this.isLoading = false;
          }, 1000);
   
    },
    computed: {

        // 
        // Funzione che mi permette di filtrare i contatti presenti nell'oggetto contacts

        filteredChat() {
            return this.contacts.filter(contact => {

            // 
            // Mi restituisce i contatti che includono e a cui combaciano 1 a 1 le lettere presenti nel campo di input

            return contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
          });
        }
      }
}).mount('#app');