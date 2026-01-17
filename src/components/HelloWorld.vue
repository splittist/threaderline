<script setup lang="ts">
defineProps<{
  msg: string
}>()

const count = ref(0)
</script>

<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      This is a Vite + Vue 3 + TypeScript project with vitest, unplugin-vue-components and
      unplugin-auto-import.
    </p>
    <button type="button" @click="count++">Count is: {{ count }}</button>
    <p>Edit <code>src/components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<style scoped>
.hello {
  margin-top: 20px;
}

button {
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 1px solid #646cff;
  background-color: #1a1a1a;
  color: white;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

code {
  background-color: #1a1a1a;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
</style>
