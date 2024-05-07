<template>
  <header>
    <a href="/"><span class="header_catalog">Каталог</span></a>
    <div class="header_crumbs">
      <div class="header_crumbs_crumb" style="text-transform: uppercase">Сравнение</div>
      <div class="header_crumbs_crumb">Личный кабинет</div>
      <img class="header_crumbs_icon" src="@/assets/icons/account-icon.png" alt="личный кабинет">
    </div>
  </header>

  <main>
    <Comparison />
  </main>
</template>

<script setup lang="ts">
import Comparison from "@/components/Comparison.vue";
</script>

<style>
header {
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: 0 .15rem  0 var(--grey-light-2);
}

.header_catalog {
  font-weight: 800;
  font-size: var(--font-size-sm--base);
}
.header_crumbs {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 2rem;

}

.header_crumbs_crumb {
  font-weight: 800;
  cursor: pointer;
  font-size: var(--font-size-sm--info);
}

.header_crumbs_crumb:hover {
  text-transform: uppercase;
}

.header_crumbs_icon {
  width: 2rem;
}

main {
  padding-top: 2rem;
}

@media (min-width: 500px) {
  header {
    padding: 2rem 3rem;
  }
}

@media (min-width: 768px) {
  header {
    padding: 2rem 6rem;
  }
}

@media (min-width: 1200px) {
  header {
    padding: 4rem 8rem;
  }

  .header_catalog {
    font-size: var(--font-size-base);
  }
  .header_crumbs {
    width: 40%;
    gap: 2rem;
    font-size: var(--font-size-info);
  }

  .header_crumbs_crumb {
    font-size: var(--font-size-info);
  }

  main {
    padding-top: 6.5rem;
  }
}

@media (min-width: 1500px) {
  header {
    padding: 2rem 16.5rem;
  }
}
</style>
