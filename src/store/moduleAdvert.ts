import Apartment from "@/model/Apartment";
import IApartment from "@/model/IApartment";

type ActionAttribute = {commit: any; state: any};

export const moduleAdvert: any = {
    state: {
      adverts: { apartments: new Array<IApartment>(0)}, // игровые ячейки
    },
    getters: {
    },
    mutations: {
      apartments(state: any, items: Array<IApartment>) {
        state.adverts.apartments = items;
      },
    },
    actions: {
      apartments({commit, state}: ActionAttribute, payload: any) {
        commit('apartments', payload.items);
      },
    },
  };