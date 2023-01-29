<template>
  <div class="composition">
    
    <!-- Logo Image -->
    <img alt="Vue logo" src="../assets/logo.png">

    <!-- Greeting Message -->
    <h3 v-show="todoCount===0">{{ greeting }}</h3>

    <!-- Show Todos Count -->
    <h4 v-show="todoCount!==0">You have {{ todoCount }} Todos!</h4>

    <!-- Input Box -->
    <input type="text" v-model="newTodo" placeholder="Type new todo.." @keyup.enter="addNewTodo(newTodo)">

    <transition name="switch" mode="out-in">

      <!-- Box Of Todo Items -->
      <div v-if="todoCount!==0">
        <transition-group name="list" appear tag="ul">
          
          <!-- Item Of Todo -->
          <li v-for="(todo, index) in allTodos" :key="todo.id" @dblclick="completedTodo(todo)">
            <span :class="{'done': todo.completed}">{{ todo.action }}</span>
            <button @click="deleteTodo(index)">X</button>
          </li>
          <!-- Item of Todo End -->
        
        </transition-group>
      </div>
      <!-- Box Of Todo Items End -->

      <!-- No Todo Message -->
      <div class="nothing" v-else>Woohooo, nothing left todos!</div>

    </transition>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'; 
import Todo from '@/types/todo';

export default defineComponent({
  name: 'compositionApi',
  setup() {
     /* data */

    const greeting = ref<string>('This is composition api page.');
    const newTodo = ref<string>('');
    const allTodos = ref<Todo[]>([]);

    /* data end */

    /* computed */

    const todoCount = computed(() => {
      return allTodos.value.length;
    })

    /* computed end */

    /* methods */
    
    // Create New Todo
    const addNewTodo = (todo: string) => {
      if(todo===''){
        return;
      }

      let newTodoData: Todo = {
        id: Date.now(),
        action: todo,
        completed: false
      }

      allTodos.value.unshift(newTodoData);
      newTodo.value = '';
    }

    // Delete Todo
    const deleteTodo = (index: number) => {
      allTodos.value.splice(index, 1);
    }

    // Completed Todo
    const completedTodo = (todo: Todo) => {
      todo.completed = !todo.completed;
    }

    /* methods end */


    return {
      /* data */
      greeting,
      newTodo,
      allTodos,

      /* computed */
      todoCount,
      
      /* methods */
      addNewTodo,
      deleteTodo,
      completedTodo
    }
  }
});
</script>