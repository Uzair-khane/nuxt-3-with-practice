import { defineNuxtPlugin,defineNuxtComponent } from "#app";
import Header from "~/components/Header.vue";
export default defineNuxtPlugin(()=>{
  defineNuxtComponent("Header",Header)
})