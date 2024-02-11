import { MusicalScale } from "@/libs/MusicalScale";
import { Tuning } from "@/consts/tunings";
import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";

export interface IState {
  scale: MusicalScale,
  fretsCount: number,
  tuning: Tuning
}


export default createStore<IState>({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {},
});
