// const creatApp = Vue.creatApp;
// stessa cosa di scrivere: -->
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

            newContact: ''

        }
    },
    methods: {

        // splashPage() {

        // },

        changeActiveContact(index) {

            const indx = this.contacts.indexOf(this.filteredChat[index])
            this.activeContact = this.contacts[indx]

        },

        time (data){

            const hour = data.split(" ")[1]
            return hour.split(":").slice(0, 2).join(":")

        },

        addMessage() {

            if (this.newMessage.length != 0 && this.newMessage.trim()){  

                const actualIndex = this.activeContact.messages;

                // Add the text written inside the input field
                actualIndex.push({date: new Date().toLocaleString("it-IT"),
                                                  message: this.newMessage, 
                                                  status: 'sent'});
    
                  


                // I delete the contents of the input field
                this.newMessage = "";
    
                

                setTimeout(() => {
                    let randomNumber = Math.floor(Math.random() * this.randomAnswer.length);

                    actualIndex.push({date: new Date().toLocaleString("it-IT"),
                                                      message: this.randomAnswer[randomNumber], 
                                                      status: 'received'})
                }, 3000)

                this.isWriting = false;
            }

        },

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

        addContact() {
           
            if (this.newContact.length != 0 && this.newContact.trim()){
                this.contacts.push({name: this.newContact, 
                                    avatar: './img/a.jpg',
                                    visible: true,
                                    messages: [
                                        {
                                            date: new Date().toLocaleString("it-IT"),
                                            message: '',
                                        }
                                    ]}),

                this.newContact = "";
            }

        },

        deleteMessage(activeContact, messageIndex) {
            
            // delete the element from the message array that corresponds to the index reported in the parameter
            activeContact.messages.splice(messageIndex, 1);

        },

    },
    mounted() {

        this.activeContact = this.contacts[0]
    
    },
    computed: {
        filteredChat() {
            return this.contacts.filter(contact => {

            return contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
          });
        }
      }
}).mount('#app');