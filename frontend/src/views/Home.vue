<template>
  <div>
    <Header />
    <section class="container-box-chats">
      <div v-for="(client, index) in messages" :key="index" class="box-chats">
        <div class="nameClient">
          <h2>{{ client.client }}</h2>
        </div>
        <div class="msg-list-container" ref="messageListContainer">
          <ul>
            <li class="msg-list" v-for="(message, messageIndex) in client.messages" :key="messageIndex">
              <p :class="message.operator.split('-')[0]">{{ message.message }} <br /> <span class="hours-span"> {{
                message.createdAt }}</span></p>
            </li>
          </ul>
        </div>
        <div class="container-input-btn">
          <div class="input-container">
            <input placeholder="Escreva sua mensagem..." class="input" v-model="message" />
          </div>
          <div class="btn-container">
            <button @click="sendMessage">Enviar</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { requestGet, requestPost } from '../services/requests';

export default {
  data() {
    return {
      messages: [],
      message: '',
    };
  },
  async created() {
    await this.fetchMessages();

    const pollingInterval = 5000;
    setInterval(this.fetchMessages, pollingInterval);
  },
  updated() {
    // Chama a função scrollToBottom sempre que o componente é atualizado
    this.scrollToBottom();
  },
  methods: {
    async fetchMessages() {
      try {
        const getMesseages = await requestGet('/messages');
        this.filterClients(getMesseages)
      } catch (error) {
        console.error('Erro ao buscar mensagens', error);
      }
    },
    async filterClients(getMesseages) {
      const outputArray = getMesseages.reduce((acc, obj) => {
        const existingClient = acc.find(item => item.client === obj.client);

        if (existingClient) {
          // Se o cliente já existe no array de saída, adicione a mensagem, a data formatada e o operador.
          existingClient.messages.push({
            message: obj.message,
            createdAt: new Date(obj.createdAt).toLocaleString(),
            operator: obj.operator
          });
        } else {
          // Caso contrário, crie um novo objeto para o cliente com a mensagem, a data formatada e o operador.
          acc.push({
            client: obj.client,
            messages: [{
              message: obj.message,
              createdAt: new Date(obj.createdAt).toLocaleString(),
              operator: obj.operator
            }]
          });
        }

        return acc;
      }, []);

      this.messages = outputArray
    },
    async sendMessage() {
      try {
        const msg = { message: this.message };
        await requestPost('/messages', msg)
        this.message = '';
        this.scrollToBottom();
      } catch (error) {
        console.error('Erro ao buscar mensagens', error);
      }
    },
    scrollToBottom() {
      // Rola a barra de rolagem para o final
      const container = this.$refs.messageListContainer;
      container.scrollTop = container.scrollHeight;
    },
  },
  components: {
    Header
  }
}
</script>

<style scoped>
.container-box-chats {
  display: flex;
  width: 100%;
}

.box-chats {
  background-image: url(../assets/background-chats.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  width: 50%;
  height: 300px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
}

.nameClient {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
}

.msg-list-container {
  max-height: 220px;
  overflow-y: auto;
  list-style-type: none;
}

.msg-list {
  padding: 10px;
}

.client {
  background-color: rgb(255, 255, 252);
  margin-right: 50%;
  padding: 4px;
  border-radius: 10px;
  word-wrap: break-word;
}

.bot {
  word-wrap: break-word;
  margin-left: 50%;
  background-color: rgb(215, 251, 222);
  padding: 4px;
  border-radius: 10px;
}

.hours-span {
  font-size: xx-small;
}

.container-input-btn {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
}

.input-container {
  flex: 1;
  margin-right: 10px;
}

.input {
  width: 100%;
  padding: 5px;
}

.btn-container button {
  color: white;
  background-color: rgb(54, 158, 255);
  padding: 5px;
}

.btn-container button:hover {
  background-color: rgb(11, 11, 196);
}

/* Estilize a barra de rolagem */
::-webkit-scrollbar {
  width: 8px;
  /* Largura da barra de rolagem */
}

/* Estilize o indicador da barra de rolagem */
::-webkit-scrollbar-thumb {
  background-color: rgb(54, 158, 255);
  ;
  /* Cor do indicador da barra de rolagem */
}

/* Estilize a trilha da barra de rolagem */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  /* Cor de fundo da trilha */
}

/* Estilize os cantos da barra de rolagem */
::-webkit-scrollbar-corner {
  background-color: transparent;
}

/* Estilize os botões de seta da barra de rolagem */
::-webkit-scrollbar-button {
  display: none;
}
</style>
