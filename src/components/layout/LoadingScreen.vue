<script setup lang="ts"></script>

<template>
  <div class="fixed inset-0 bg-neutral-100 bg-opacity-95 grid place-items-center">
    <span class="loader"></span>
  </div>
</template>

<style scoped>
.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #000;
  box-shadow:
    32px 0 #000,
    -32px 0 #000;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #0002;
    box-shadow:
      32px 0 #0002,
      -32px 0 #000;
  }
  50% {
    background-color: #000;
    box-shadow:
      32px 0 #0002,
      -32px 0 #0002;
  }
  100% {
    background-color: #0002;
    box-shadow:
      32px 0 #000,
      -32px 0 #0002;
  }
}
</style>
