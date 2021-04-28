<template>
  <div id="cardPage">
    <div class="pkmnCard">
      <!--animate__animated animate__backInLeft-->
      <table>
        <tr>
          <td class="half">
            <h1>#{{ this.pokeObj.id }}: {{ this.pokeObj.name }}</h1>
          </td>
          <td class="half right">
            <h1>
              {{ this.pokeObj.stats[0].stat.name }}:
              {{ this.pokeObj.stats[0].base_stat }}
            </h1>
            <h1>Type: {{ this.pokeObj.types[0].type.name }}</h1>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <img
              :src="require(`../assets/${this.pokeObj.name}.jpg`)"
              id="pkmnImg"
            />
          </td>
        </tr>
        <tr>
          <td class="half" style="vertical-align: top">
            <h2>Abilities:</h2>
            <h3>Ability 1: {{ this.pokeObj.abilities[0].name }}</h3>
            <h3>Ability 2: {{ this.pokeObj.abilities[1].name }}</h3>
          </td>
          <td class="half right" rowspan="2">
            <h2 style="text-align: left">Stats:</h2>
            <ul>
              <li>
                <h3>Attack: {{ this.pokeObj.stats[1].base_stat }}</h3>
              </li>
              <li>
                <h3>Defense: {{ this.pokeObj.stats[2].base_stat }}</h3>
              </li>
              <li>
                <h3>Special Attack: {{ this.pokeObj.stats[3].base_stat }}</h3>
              </li>
              <li>
                <h3>Special Defense: {{ this.pokeObj.stats[4].base_stat }}</h3>
              </li>
              <li>
                <h3>Speed: {{ this.pokeObj.stats[5].base_stat }}</h3>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Attributes:</h2>
            <h3>Height: {{ this.pokeObj.height / 10 }}m</h3>
            <h3>Weight: {{ this.pokeObj.weight / 10 }}kg</h3>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: center">
            <router-link to="/">
              <button id="backButton">
                <p>Back to Home</p>
              </button>
            </router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pokemon",
  props: {
    pokeObj: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
#backButton {
  background-color: #e05234;
  color: black;
  border-radius: 1rem;
  box-shadow: black 0.25rem 0.25rem;
  width: 10rem;
  height: 3rem;
}
.pkmnCard {
  background-color: #f06345;
  border: #fde166 0.8rem solid;
  border-radius: 1rem;
  width: 28.6rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 40rem;
  padding: 1rem;
  text-align: left;
  table,
  tr {
    width: 100%;
  }
  .right {
    text-align: right;
  }
  .half {
    width: 50%;
  }
  #pkmnImg {
    height: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  ul {
    li {
      display: block;
    }
  }
}
</style>
