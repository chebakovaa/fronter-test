import { IOffer } from "@/model/IOffer";

type ActionAttribute = {commit: any; state: any};

export const moduleAdvert: any = {
    state: {
      advert: { offers: new Array<IOffer>(0), likes: new Map<number, boolean>() }, // игровые ячейки
    },
    getters: {
      OFFERS: (state: any) => state.advert.offers,
      LIKES: (state: any) => state.advert.likes,
    },
    mutations: {
      offers(state: any, items: IOffer[]) {
        state.advert.offers = items;
        state.advert.likes = new Map<number, boolean>(items.map(v => [v.id, false]))
      },
      likes(state: any, items: Map<number, boolean>) {
        state.advert.likes = items;
      },
    },
    actions: {
      offers({ commit, state }: ActionAttribute, payload: any) {
        commit('offers', payload.data as IOffer[]);
      },
      changeLike({ commit, state }: ActionAttribute, payload: any) {
        if(state.advert.likes.has(payload.offerId)){
          const isLike = state.advert.likes.get(payload.offerId);
          state.advert.likes.delete(payload.offerId);
          state.advert.likes.set(payload.offerId, !isLike);
        }
      },
    },
  };