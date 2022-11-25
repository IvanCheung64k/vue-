<script setup>
import axios from "axios";
import { ref } from "vue";
const movie = ref(null);
let repo = ref(false);
let image = ref(null);
let video = ref(null);
let info = ref(null);
const findMovie = async ()=> {
    const code = movie.value;
    axios.get(`https://api.themoviedb.org/3/movie/${code}`, {
      params: {
        api_key: "2a61abe7fe3315e1fd9e70c6d769dc56",
        append_to_response: "videos",
      },
    }).then ((response)=>
    info = response,
    repo = true,
    console.log(info),
    console.log(repo),
    )
    }

function checkInfo(){
  console.log(info);
}
</script>

<template>
  <div class="movieSelector" id="bruh">
    <select v-model="movie">
      <option value="626735">Dog</option>
      <option value="526896">Morbius</option>
      <option value="582913">The Room</option>
      <option value="619264">The Platform</option>
      <option value="4935">Howl's Moving Castle</option>
      <option value="508442">Soul</option>
      <option value="11282">Harold & Kumar Got to White Castle</option>
      <option value="264660">Ex Machina</option>
      <option value="135397">Jurrasic World</option>
      <option value="533514">Violet Evergarden: The Movie</option>
    </select>
    <button @click="findMovie">Get</button>
    <div v-if="info">
      <h1 id="title">{{info.data.title}}</h1>
      <h2 id="date">{{info.data.release_date}}</h2>
      <p id="score">Average Rating: {{info.data.vote_average}}</p>
      <p id="voters">Voter Count: {{info.data.vote_count}}</p>
      <p id="summary">{{info.data.overview}}</p>
      <p id="budget">Budget: ${{info.data.budget}}</p>
      <p id="rev">Revenue: ${{info.data.revenue}}</p>
      <p id="genre">Genre: {{info.data.genres.at(0).name}}</p>
      <p id="language">Original Language: {{info.data.original_language}}</p>
      <iframe id="video" src = video></iframe>
      <div id="image" src = image></div>
    </div>
  </div>
</template>

<style scoped>
* {
  background-color: ivory;
  padding: 0%;
  margin: 0%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#image{
  aspect-ratio: 2/3;
  width:300px;
  margin-top: 20%;
}
#bruh{
  margin-top: 0vh
}
#score, #voters{
margin-left:80vw;
font-size: x-large;
}
#summary{
  display: flex;
  margin-left: 20%;
  font-size: xx-large;
  margin-top: 5%;
}
#genre, #language{
  display: flex;
  position: absolute;
  margin-top: 30%;
  margin-left:20%;
  font-size: x-large;
}
#genre{
  margin-top: 35%;
}
#budget, #rev {
  display: flex;
  position: absolute;
  margin-top:20%;
  margin-left:75%;
  font-size: x-large;
}
#rev{
  margin-top:25%;
}
#video{
  position:absolute;
  display:flex;
  margin-top: 15%;
  aspect-ratio: 16/9;
}
</style>