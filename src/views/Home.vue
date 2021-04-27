<template>
  <div class="home">
    <h1>Welcome to the Charmander Evolution Line Pokedex!</h1>
    <div id="pokemon">
      <div class="pokemonEntry">
        <table>
          <tr>
            <td><h2>Charmander</h2></td>
          </tr>
          <tr>
            <td><img src="@/assets/charmander.jpg" /></td>
          </tr>
          <tr>
            <td><button>Go to entry</button></td>
          </tr>
        </table>
      </div>
      <div class="pokemonEntry">
        <table>
          <tr>
            <td><h2>Charmeleon</h2></td>
          </tr>
          <tr>
            <td><img src="@/assets/charmeleon.jpg" /></td>
          </tr>
          <tr>
            <td><button>Go to entry</button></td>
          </tr>
        </table>
      </div>
      <div class="pokemonEntry">
        <table>
          <tr>
            <td><h2>Charizrd</h2></td>
          </tr>
          <tr>
            <td><img src="@/assets/charizard.jpg" /></td>
          </tr>
          <tr>
            <td><button>Go to entry</button></td>
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
    border: 0.1rem black solid;
    border-radius: 1rem;
    background-color: white;
    display: flex;
    align-content: flex-start;
    table {
      width: 100%;
    }
    img {
      width: 100%;
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
