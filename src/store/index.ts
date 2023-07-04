import { MusicalScale } from "@/consts/musicalScales";
import { Tuning } from "@/consts/tunings";
import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";

export interface IState {
  activeScale: MusicalScale,
  fretsCount: number,
  tuning: Tuning
}


export default createStore<IState>({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {},
});
