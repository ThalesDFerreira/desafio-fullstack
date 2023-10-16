<template>
  <header class="header-container">
    <div class="box-buttons-container">
      <button @click="logout" class="btn-logout">
        <img src="../assets/logout.svg" alt="Sair" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.header-container {
  background-color: gray;
  padding: 20px;
}

.box-buttons-container {
  display: flex;
  justify-content: end;
  margin-right: 20px;
}

.btn-logout {
  padding: 5px;
  background-color: gray;
  border-radius: 20px;
}

.btn-logout:hover {
  background-color: red;
  border-radius: 20px;
}
</style>
