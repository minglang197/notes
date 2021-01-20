import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/idCreate';

Vue.use(Vuex)
type TypeState ={
  recordList: RecordItem[];
}

const store = new Vuex.Store({
  state: {
    recordList: JSON.parse(window.localStorage.getItem('recordList') || '[]')
  } as TypeState,
  mutations: {
    createRecord(state,record){
        const record2: RecordItem =clone(record);
        record2.createdAt = new Date().toISOString();
        record2.id = createId()
        state.recordList.push(record2);
        store.commit('saveRecord');
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    removeRecord(state, id: number) {
        let index = 0;
        for (index = 0; index < state.recordList.length; index++) {
          if (state.recordList[index].id === id) {
            break;
        }
      }
      state.recordList.splice(index, 1);
      store.commit('saveRecord');
    },
  },
  actions: {
  },
  modules: {
  }
})
export default store;
