<template>
  <article class="border rounded-md">
    <header class="bg-neutral-200 border-b p-4">
      <slot name="header" />
    </header>

    <main>
      <slot name="default" />
    </main>
  </article>
</template>
