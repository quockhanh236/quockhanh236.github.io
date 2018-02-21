<template>
  <div>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <symbol id="icon-heart" viewBox="0 0 32 32">
                <title>heart</title>
                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
            </symbol>
            <symbol id="icon-heart-broken" viewBox="0 0 32 32">
                <title>heart-broken</title>
                <path d="M23.6 2c4.637 0 8.4 3.764 8.4 8.401 0 9.132-9.87 11.964-15.999 21.232-6.485-9.326-16.001-11.799-16.001-21.232 0-4.637 3.763-8.401 8.4-8.401 1.886 0 3.625 0.86 5.025 2.12l-2.425 3.88 7 4-4 10 11-12-7-4 1.934-2.901c1.107-0.68 2.35-1.099 3.665-1.099z"></path>
            </symbol>
        </defs>
    </svg>
    <div class="container">
        <a class="envelope-wrapper" href="#" @click="handleOpen">
            <div :class="{envelope: true, tossing: !open, open: open}">
                <div class="envelope__side envelope__side--top"></div>
                <div :class="{envelope__card: true, open: open}">
                  <p class="enveloper__card-text">
                    {{ msg }}<br/>
                    <router-link to="/card">Open Card</router-link>
                  </p>
                </div>
                <div class="envelope__side envelope__side--right"></div>
                <div class="envelope__side envelope__side--left"></div>
                <div class="envelope__side envelope__side--bottom"></div>
                <svg class="heart"><use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="open ? '#icon-heart-broken' : '#icon-heart'"></use></svg>
            </div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "I love Mun",
      open: false
    };
  },
  methods: {
    handleOpen() {
      this.open = true;
    }
  }
};
</script>

<style scoped>
.envelope-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  transform: translate(-50%, -10%);
}

.envelope {
  position: relative;
  display: block;
  width: 300px;
  height: 200px;
  margin: auto;
  background-color: #c9d0d2;
}

.envelope .envelope__card {
  position: absolute;
  bottom: 0;
  display: block;
  width: 250px;
  height: 200px;
  margin: 0 25px;
  background-color: #f5f6d6;
}

.envelope .enveloper__card-text {
  padding: 10px 20px;
  font-size: 47px;
  margin: 0;
  color: black;
  text-align: center;
  font-family: "Amatic SC", cursive;
}

.envelope .enveloper__card-text a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.envelope .envelope__card.open {
  -webkit-animation: cardJump 0.5s ease 0.5s forwards;
  -o-animation: cardJump 0.5s ease 0.5s forwards;
  animation: cardJump 0.5s ease 0.5s forwards;
  z-index: 1;
}

.envelope .envelope__side {
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  z-index: 2;
}

.envelope .envelope__side--left {
  left: 0;
  border-width: 100px 0 100px 150px;
  border-color: transparent transparent transparent #ffffff;
}

.envelope .envelope__side--right {
  right: 0;
  border-width: 100px 150px 100px 0;
  border-color: transparent #ffffff transparent transparent;
}

.envelope .envelope__side--bottom {
  top: auto;
  left: 0;
  bottom: 0;
  border-width: 0 150px 100px 150px;
  border-color: transparent transparent #ecf0f1 transparent;
}

.envelope .envelope__side--top {
  top: 0;
  left: 0;
  bottom: auto;
  border-width: 100px 150px 0 150px;
  border-color: #ecf0f1 transparent transparent transparent;
  z-index: 1;
}

.envelope.open > .envelope__side--top {
  top: -100px;
  border-width: 0 150px 100px 150px;
  border-color: transparent transparent #c9d0d2 transparent;
}

.heart {
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -25%;
  margin-left: -25px;
  width: 50px;
  fill: red;
  z-index: 2;
}

.envelope:hover .heart {
  transform: scale(1.2);
  trasition: 0.5s ease;
}

.envelope.open:hover .heart {
  transform: none;
}

.tossing {
  animation-name: tossing;
  -webkit-animation-name: tossing;

  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;

  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;

  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
}

@keyframes tossing {
  0% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(-4deg);
  }
}

@-webkit-keyframes tossing {
  0% {
    -webkit-transform: rotate(-4deg);
  }
  50% {
    -webkit-transform: rotate(4deg);
  }
  100% {
    -webkit-transform: rotate(-4deg);
  }
}

@keyframes cardJump {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-200px);
  }
}

@-webkit-keyframes cardJump {
  from {
    -webkit-transform: translateY(0);
  }
  to {
    -webkit-transform: translateY(-200px);
  }
}
</style>
