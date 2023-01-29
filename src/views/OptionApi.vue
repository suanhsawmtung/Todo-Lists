<template>
  <div class="option">

    <!-- Logo Image -->
    <img alt="Vue logo" src="../assets/logo.png">

    <h3 v-show="todoCount===0">{{ greeting }}</h3>

    <!-- Show Todo Count -->
    <h4 v-show="todoCount!==0">You have {{ todoCount }} Todos!</h4>

    <!-- Input Box -->
    <input type="text" v-model="newTodo" placeholder="Type new todo.." @keyup.enter="addNewTodo(newTodo)">

    <!-- Box of Todos -->
    <transition name="switch" mode="out-in">
      
      <!-- Items Of Todo -->
      <div v-if="todoCount!==0">

        <transition-group name="list" appear tag="ul">

          <!-- Item of Todo -->
          <li v-for="(todo, index) in allTodos" :key="todo.id" @dblclick="completeTodo(todo)">
            <span :class="{'done': todo.completed}">{{ todo.action }}</span>
            <button @click="deleteTodo(index)">X</button>
          </li>


        </transition-group>
      
      </div>
      <!-- Items Of Todos End -->

      <!-- No Todos Message -->
      <div class="nothing" v-else>Woohooo, nothing left todos!</div>
    
    </transition>
    <!-- Box Of Todos End -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import Todo from '@/types/todo';

export default defineComponent({
  name: 'OptionApi',
  data () {
    return {
      greeting: 'This is option api page.' as string,
      newTodo: '' as string,
      allTodos: [] as Todo[],
    }
  },
  computed: {
    /* Count Of Todos */
    todoCount (): number {
      return this.allTodos.length;
    }
  },
  methods: {
    /* Create New Todo */
    addNewTodo (todo: string) {
      if(todo===''){
        return;
      }

      let newTodoData: Todo = {
        id: Date.now(),
        action: todo,
        completed: false
      }

      this.allTodos.unshift(newTodoData);
      this.newTodo= '';
    },
    /* Delete Todo */
    deleteTodo(index: number){
      this.allTodos.splice(index, 1);
    },
    // Complete Todo
    completeTodo(todo: Todo){
      todo.completed = !todo.completed;
    }
  }
});
</script>
