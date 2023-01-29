<template>
    <div class="script">
      
      <!-- Logo Image -->
      <img alt="Vue logo" src="../assets/logo.png">

      <!-- Greeting Message -->
      <h3 v-show="todoCount===0">{{ greeting }}</h3>

      <!-- Show Todo Count -->
      <h4 v-show="todoCount!==0">You have {{ todoCount }} Todos!</h4>

      <!-- Input Box -->
      <input type="text" v-model="newTodo" placeholder="Type new todo.." @keyup.enter="addNewTodo(newTodo)">

      <!-- Box Of Todo Items -->
      <transition name="switch" mode="out-in">
        <div v-if="todoCount!==0">

          <!-- Items Of Todo -->
          <transition-group name="list" appear tag="ul">

            <!-- Item Of Todo -->
            <li v-for="(todo, index) in allTodos" :key="todo.id" @dblclick="completedTodo(todo)">
              <span :class="{'done': todo.completed}">{{ todo.action }}</span>
              <button @click="deleteTodo(index)">X</button>
            </li>

          </transition-group>
          <!-- Items Of Todo End -->

        </div>

        <!-- No Todo Message -->
        <div class="nothing" v-else>Woohooo, nothing left todos!</div>

      </transition>
      <!-- Box Of Todo Items End -->

    </div>
</template>
  
<script setup lang="ts">
  import { ref } from "@vue/reactivity";
  import Todo from '@/types/todo';
  import { computed } from "@vue/runtime-core";
  
  /* data */
  const greeting = ref<string>('This is script setup page.');
  const newTodo = ref<string>('');
  const allTodos = ref<Todo[]>([]);
  /* data end */

  /* computed */
  const todoCount = computed(() => {
    return allTodos.value.length;
  });
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
    newTodo.value= '';
  }

  // Delete Todo
  const deleteTodo = (index: number) => {
    allTodos.value.splice(index, 1);
  }

  // Done Todo
  const completedTodo = (todo: Todo) => {
    todo.completed = !todo.completed;
  }

  /* methods end */
  
</script>