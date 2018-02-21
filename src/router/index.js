import Vue from "vue";
import Router from "vue-router";
import Envelope from "@/components/Envelope";
import ValentineCard from "@/components/ValentineCard";
import OurStory from "@/components/OurStory";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "envelope",
      component: Envelope
    },
    {
      path: "/card",
      name: "valentine-card",
      component: ValentineCard
    },
    {
      path: "/story",
      name: "our-story",
      component: OurStory
    }
  ]
});
