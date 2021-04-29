<template>
  <div class="home">
    <h1>Welcome to the Charmander Evolution Line Pokedex!</h1>
    <div id="pokemon">
      <div class="pokemonEntry">
        <table>
          <tr>
            <td><h2>Charmander</h2></td>
          </tr>
          <hr />
          <tr>
            <td><img src="@/assets/charmander.jpg" /></td>
          </tr>
          <tr>
            <td>
              <router-link to="/charmander"
                ><button>Go to entry</button></router-link
              >
            </td>
          </tr>
        </table>
      </div>
      <div class="pokemonEntry">
        <table>
          <tr>
            <td><h2>Charmeleon</h2></td>
          </tr>
          <hr />
          <tr>
            <td><img src="@/assets/charmeleon.jpg" /></td>
          </tr>
          <tr>
            <td>
              <router-link to="/charmeleon"
                ><button>Go to entry</button></router-link
              >
            </td>
          </tr>
        </table>
      </div>
      <div class="pokemonEntry">
        <table>
          <tr>
            <td><h2>Charizrd</h2></td>
          </tr>
          <hr />
          <tr>
            <td><img src="@/assets/charizard.jpg" /></td>
          </tr>
          <tr>
            <td>
              <router-link to="/charizrd"
                ><button>Go to entry</button></router-link
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background-color: red;
}

#pokemon {
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  width: 100%;
  div.pokemonEntry {
    width: 20%;
    height: 30rem;
    border: 0.1rem black solid;
    border-radius: 1rem;
    background-color: white;
    display: flex;
    align-content: flex-start;
    table {
      width: 100%;
      button {
        background-color: white;
        color: black;
        border-radius: 1rem;
        box-shadow: black 0.25rem 0.25rem;
        width: 10rem;
        height: 3rem;
      }
    }
    hr {
      padding: 0;
      margin: 0;
      background-color: black;
      opacity: 1;
    }
    img {
      width: auto;
      height: 20rem;
    }
  }
}
</style>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
