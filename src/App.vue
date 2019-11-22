<template>
  <div id="app">
    <body>
    <b-container>
       <center> <h1>The Zoomy</h1></center>
      <b-row id="row">
        <b-col cols="1"></b-col>
        <b-col cols="2"><img :src="bronson" v-on:click="showSpeech('bronson')"></b-col>
        <b-col cols="2"><img :src="alex2" v-on:click="showSpeech('alex2')"></b-col>
        <b-col cols="2"> <img :src="alex" v-on:click="showSpeech('alex')"></b-col>
        <b-col cols="2"> <img :src="ernest" v-on:click="showSpeech('ernest')" ></b-col>
        <b-col cols="2"> <img :src="michael" v-on:click="showSpeech('michael')"></b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="2"><p v-show="currentPerson==1">{{speech}}</p> </b-col>
        <b-col cols="2"><p v-show="currentPerson==2">{{speech}} </p></b-col>
        <b-col cols="2"><p v-show="currentPerson==3">{{speech}} </p></b-col>
        <b-col cols="2"><p v-show="currentPerson==4">{{speech}}</p> </b-col>
        <b-col cols="2"><p v-show="currentPerson==5">{{speech}} </p></b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
    <hr>
    <b-container>
     <center> <h2>~Duel Zone~</h2></center>
     <br>
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="2">
          <b-dropdown v-model="duelerName1" :text="duelerName1 || 'Dueler 1'" variant="outline-primary">
            <b-dropdown-item @click="onChange('bronson',1)">Bronson</b-dropdown-item>
            <b-dropdown-item @click="onChange('alex2',1)">Alex2</b-dropdown-item>
            <b-dropdown-item @click="onChange('alex',1)">Alex</b-dropdown-item>
            <b-dropdown-item @click="onChange('ernest',1)">Ernest</b-dropdown-item>
            <b-dropdown-item @click="onChange('michael',1)">Michael</b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col cols="4"> <center><b-button v-on:click="duel()" variant="danger">DUEL</b-button></center></b-col>
        <b-col cols="2">
            <b-dropdown v-model="duelerName2" :text="duelerName2 || 'Dueler 2'" variant="outline-primary" @change="onChange()">
            <b-dropdown-item @click="onChange('bronson',2)">Bronson</b-dropdown-item>
            <b-dropdown-item @click="onChange('alex2',2)">Alex2</b-dropdown-item>
            <b-dropdown-item @click="onChange('alex',2)">Alex</b-dropdown-item>
            <b-dropdown-item @click="onChange('ernest',2)">Ernest</b-dropdown-item>
            <b-dropdown-item @click="onChange('michael',2)">Michael</b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
      <br>
      <b-row class="text-center">
        <b-col cols="2"></b-col>
        <b-col cols="4"><img :src="duelerImg1" id="duelers" v-on:click="picWinner()"></b-col>
        <b-col cols="4"><img  :src="duelerImg2" id="duelers" v-on:click="pickWinnner()"></b-col>
        <b-col cols="2"></b-col>
      </b-row>
      <b-row  class="text-center" >
        <b-col cols="3"></b-col>
        <b-col cols="2" style="font-size:20px">{{duelerName1}}</b-col>
        <b-col cols="2"><div style="font-size:30px">VS</div></b-col>
        <b-col cols="2" style="font-size:20px">{{duelerName2}}</b-col>
        <b-col cols="3"></b-col>
      </b-row>
      <br>
      <b-row class="text-center">
        <b-col cols="3"></b-col>
        <b-col cols="2">{{duelerSpeech1}}</b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2">{{duelerSpeech2}}</b-col>
        <b-col cols="3"></b-col>
      </b-row>
    </b-container>
    </body>
  </div>
</template>

<script>
import bronson from "./assets/bronson.png"
import alex2 from "./assets/Alex2.png"
import alex from "./assets/alex.png"
import ernest from "./assets/ernest.png"
import michael from "./assets/michael.png"
import {speechArray, getLength, speak} from "./assets/speech.js"

export default {
  name: 'App',
    data: function() {
      return {
        bronson : bronson,
        alex2 : alex2,
        alex : alex,
        ernest : ernest,
        michael: michael,
        speech : null,
        currentPerson : 1,
        duelerName1 :'',
        duelerName2 :'',
        duelerImg1: null,
        duelerImg2: null,
        duelerSpeech1:'',
        duelerSpeech2:''
      }
  },
  methods: {
    showSpeech:function(speaker){
      switch(speaker){
        case "bronson":
          this.currentPerson = 1;
        break;
        case "alex2":
          this.currentPerson = 2;
        break;
        case "alex":
          this.currentPerson = 3;
        break;
        case "ernest":
          this.currentPerson = 4;
        break;
        case "michael":
          this.currentPerson = 5;
        break;
      }
      this.speech = speak(speaker);
    },
    onChange : function(person,spot){
      var img;
      var name;
      switch(person){
        case "bronson":
          img = bronson;
          name = "bronson"
          break;
        case "alex2":
          img = alex2;
          name = "alex2"
          break;
        case "alex":
          img = alex;
          name = "alex"
          break;
        case "ernest":
          img = ernest;
          name = "ernest"
          break;
        case "michael":
          img = michael;
          name = "michael"
          break;
      } 
      spot == 1 ? this.duelerImg1 = img: this.duelerImg2 = img;
      spot == 1 ? this.duelerName1 = name: this.duelerName2 = name;
    },
    duel : function(){      
      this.duelerSpeech1 = speak(this.duelerName1);
      this.duelerSpeech2 = speak(this.duelerName2);
    },
    pickWinner : function() {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
 width: 100%;
 height: 100%;
}

#duelers {
 width: 75%;
 height: 90%;
}

#duelers:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
