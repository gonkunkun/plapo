import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex'
import axios from 'axios'
import { RootState } from 'store'
import * as people from './modules/people'
import * as plan from './modules/plan'

export const types = {}

export interface State {
  global: string
}

export const state = (): State => ({
  global: 'stringhogehoge'
})

export const getters: GetterTree<State, RootState> = {}

export interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(context: ActionContext<S, R>): void
}

export const actions: Actions<State, RootState> = {
  async nuxtServerInit({ commit }) {
    const response = await axios.get('/random-data.json', {
      proxy: { host: '127.0.0.1', port: 3000 }
    })
    const staticPeople = response.data.slice(0, 10)
    commit(`${people.name}/${people.types.SET}`, staticPeople, { root: true })
  }
}

export const mutations: MutationTree<State> = {}
