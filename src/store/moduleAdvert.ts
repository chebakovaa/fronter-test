import { IOffer } from "@/model/IOffer";

type ActionAttribute = {commit: any; state: any};

export const moduleAdvert: any = {
    state: {
      advert: { offers: new Array<IOffer>(0) }, // игровые ячейки
    },
    getters: {
      OFFERS: (state: any) => state.advert.offers,
    },
    mutations: {
      offers(state: any, items: IOffer[]) {
        state.advert.offers = items;
      },
    },
    actions: {
      offers({ commit, state }: ActionAttribute, payload: any) {
        commit('offers', payload.data as IOffer[]);
      },
    },
  };