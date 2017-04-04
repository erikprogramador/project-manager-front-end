<template>
  <nav class="navigation">
    <ul class="navigation-links">
      <h1 class="title">PJM</h1>
      <router-link tag="li" to="/" exact>
        <a>
          <img src="../../assets/links/home.svg" alt="Home">
          Home
        </a>
      </router-link>
      <router-link tag="li" to="/dashboard">
        <a>
          <img src="../../assets/links/view-dashboard.svg" alt="Dashboard">
          Dashobard
        </a>
      </router-link>
      <router-link tag="li" to="/users">
        <a>
          <img src="../../assets/links/account.svg" alt="Users">
          Users
        </a>
      </router-link>
      <router-link tag="li" to="/projects">
        <a>
          <img src="../../assets/links/projector-screen.svg" alt="Projects">
          Projects
        </a>
      </router-link>
      <router-link tag="li" to="/customers">
        <a>
          <img src="../../assets/links/account-card-details.svg" alt="Customers">
          Customers
        </a>
      </router-link>
      <router-link tag="li" to="/settings">
        <a>
          <img src="../../assets/links/settings.svg" alt="Settings">
          Settings
        </a>
      </router-link>
      <router-link tag="li" to="/login">
        <a>
          <img src="../../assets/links/login-variant.svg" alt="Login">
          Login
        </a>
      </router-link>
      <router-link tag="li" to="/register">
        <a>
          <img src="../../assets/links/account-plus.svg" alt="Register">
          Register
        </a>
      </router-link>
      <router-link tag="li" to="/logout">
        <a>
          <img src="../../assets/links/logout.svg" alt="Logout">
          Logout
        </a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .navigation {
    z-index: 1;
    background-color: #ffffff;
    height: 100%;
    min-height: 100vh;
  }
  .navigation-links {
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #8287A1;
    }
    li:hover, li:hover a {
      background: #fafafa;
      color: #8287A1;
    }
    a {
      flex-direction: column;
      padding: 1em 1em;
      display: flex;
      text-align: center;
      font-size: .9rem;
      width: 100%;
    }
  }
  .router-link-active {
    border-right: 2px solid #8287A1;
  }
  .title {
    color: #8287A1;
    font-size: 1.2rem;
    text-align: center;
    padding: 1em 0;
    cursor: default;
    pointer-events: none;
  }
</style>
