import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {id:'1', text:'Recolectar las piedras del infinito', completed: false},
      {id:'2', text:'Piedra del alma', completed: true},
      {id:'3', text:'Piedra del poder', completed: true},
      {id:'4', text:'Piedra de la realida', completed: false},
      {id:'5', text:'Conseguir nuevos secuaces competentes', completed: false},
    ]
  },
  mutations: {
    toggleTodo(state, id){
      const todoIdx = state.todos.findIndex( todo => todo.id === id ) 
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    }
  },
  actions: {
  },
  getters:{
    penddingTodos: ( state, getters, rootSate ) => {
      return state.todos.filter ( todo => !todo.completed )
    },
    allTodos: ( state, getters, rootSate ) => {
      return state.todos
    },
    completedTodos: ( state, getters, rootSate ) => {
      return state.todos.filter ( todo => todo.completed )
    },
    getTodosByTab: (_, getters, rootSate ) => ( tab ) =>  {
      switch (tab) {
        case 'allTodos': return getters.allTodos
        case 'completed': return getters.completedTodos
        case 'pendings': return getters.penddingTodos
        default: return getters.allTodos
      }
    }
  },
  modules: {
  }
})
