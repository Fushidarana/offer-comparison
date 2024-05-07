<template>
  <div>
    <div class="item">
      <div class="item_images">
        <img
            class="item_images_phone"
            :src="props.image"
            :alt="props.model">
        <img
            class="item_images__more"
            src="@/assets/icons/more-icon.png"
            alt="show more"
            @click="(e) => toggleSwitcher(e)"
            v-if="props.isShowMore"
        >
      </div>
      <div class="item_model">{{ props.model }}</div>
      <div
          v-if="isSwitcherVisible && availableToSwitchPhones.length"
          class="item_switch"
          :class="[isModalAtLastElement ? 'left-modal' : 'right-modal']"
      >
        <div class="ui-input">
          <input
              v-on:keydown.enter.prevent
              class="ui-input__input"
              type="text"
              placeholder="Поиск"
              v-model="searchValue"
              @input="$emit('search', searchValue)"
          >
        </div>
        <div
            class="item_switch_elements"
            v-for="phone in availableToSwitchPhones">
          <img
              class="item_switch_icon"
              src="@/assets/icons/change-icon.png"
              @click="$emit('switch', props.id, phone.id)"
              alt="change">
          <img
              class="item_switch_img"
              :src="phone.image"
              :alt="phone.model">
          <span class="item_model">{{ phone.model }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue"

const props = defineProps({
  amountOfPhones: Number,
  id: Number,
  image: {},
  model: String,
  availableToSwitchPhones: Array,
  isShowMore: Boolean,
})

const isSwitcherVisible = ref(false)

const searchValue = ref('')

const isModalAtLastElement = ref(true)

function toggleSwitcher(e) {
  const showMoreElements = document.querySelectorAll('.item_images__more')
  const switchElements = document.querySelectorAll('.item_switch')

  isModalAtLastElement.value = showMoreElements[showMoreElements.length - 1] === e.target

  if (!switchElements.length) {
    isSwitcherVisible.value = !isSwitcherVisible.value
  }
}

watch(() => props.amountOfPhones, (newValue) => {
  if (newValue === 6) {
    isSwitcherVisible.value = false
  }
})

</script>

<style>

.left-modal {
  left: -17rem;
}

.right-modal {
  left: 10rem;
}

.item {
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.item_images {
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;
  min-height: 50%;
}

.item_images_phone {
  width: 4.5rem;
  height: 8.7rem;
}

.item_images__more {
  position: absolute;
  right: -4rem;
  top: 50%;
  cursor: pointer;
}

.item_model {
  padding: 1rem 0;
  min-width: 20%;
  flex-wrap: wrap;
  font-size: var(--font-size-sm--base);
  font-weight: 600;
}

.item_switch {
  padding: 1.6rem 2rem;
  background-color: var(--white);
  border: var(--grey-light-4) .2rem solid;
  border-radius: .5rem;
  box-shadow: -.1rem .8rem 1.3rem -.4rem rgba(34, 60, 80, .2);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 20rem;
  position: absolute;
  z-index: 2;
  top: 30%;
  max-height: 30rem;
  overflow-y: scroll;
}

.item_switch::-webkit-scrollbar {
  width: .5rem;
}

.item_switch::-webkit-scrollbar-track {
  background-color: transparent;
}

.item_switch::-webkit-scrollbar-thumb {
  background: var(--grey-light-4);
  border-radius: 2.5rem;
}

.item_switch_img {
  height: 5rem;
}

.item_switch_elements {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2.1rem;
}

.item_switch_icon {
  cursor: pointer;
}

.ui-input {
  border: var(--grey-light-4) .2rem solid;
  border-radius: .5rem;
  padding: 1rem 1.4rem;
}

.ui-input__input {
  border: none;
  outline: none;
  font-size: 2.4rem;
  width: 100%;
}

.ui-input__input::-webkit-input-placeholder {
  color: var(--grey-light-4);
}
@media (min-width: 1200px) {
  .left-modal {
    left: -38rem;
  }

  .right-modal {
    left: 12rem;
  }
  .item {
    width: 16.5rem;
  }

  .item_images {
    min-height: 80%;
    width: 15rem;
  }

  .item_images_phone {
    width: 6.5rem;
    height: 12rem;
  }

  .item_images__more {
    right: -2rem;
  }

  .item_model {
    font-size: var(--font-size-base);
  }

  .item_switch {
    padding: 3.3rem 2rem;
    width: 42.1rem;
    max-height: 33.6rem;
  }
}
</style>