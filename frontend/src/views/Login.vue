<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <input type="email" placeholder="Email" v-model="email" class="input-field" />
      <div class="password-field">
        <input :type="passwordFieldType" placeholder="Senha" v-model="password" class="input-field" />
        <button @click="togglePasswordVisibility" class="show-password-button">
          {{ showPassword ? 'Ocultar' : 'Mostrar' }}
        </button>
      </div>
      <button @click="login" class="login-button">Entrar</button>
    </div>
  </div>
</template>

<script>
import { requestPost } from '../services/requests';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      passwordFieldType: 'password',
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.passwordFieldType = this.showPassword ? 'text' : 'password';
    },
    async login() {
      try {
        const email = this.email;
        const password = this.password;
        const token = await requestPost('/login', { email, password });
        localStorage.setItem("token", token.message);
        alert('Usuário logado com sucesso!')
        this.$router.push('/home');
      } catch (error) {
        alert(error.response.data.message)
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
}

.login-box {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #333;
  outline: none;
}

.password-field {
  position: relative;
}

.show-password-button {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
}

.login-button {
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
}

.login-button:hover {
  background-color: #409244;
}
</style>

