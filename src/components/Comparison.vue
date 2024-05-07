<template>
  <div class="comparison">
    <div class="comparison_page-navigation">
      <span class="comparison_page-navigation__header">Смартфоны</span>
      <div class="comparison_page-navigation__pagination">
        Отобразить товары:
        <button
            class="comparison_page-navigation__pagination__element"
            @click="(e) => changeAmount(e,2)">2
        </button>
        <button
            class="comparison_page-navigation__pagination__element underline"
            @click="(e) => changeAmount(e,3)">3
        </button>
        <button
            class="comparison_page-navigation__pagination__element"
            @click="(e) => changeAmount(e,4)">4
        </button>
        <button
            class="comparison_page-navigation__pagination__element"
            @click="(e) => changeAmount(e,5)">5
        </button>
        <button
            class="comparison_page-navigation__pagination__element"
            @click="(e) => changeAmount(e,6)">6
        </button>
      </div>
    </div>

    <div class="comparison_phone-navigation">
      <div class="comparison_phone-navigation__show">
        <UICheckbox @onCheck="(event) => isDiff = event" label="Показать различия"/>
      </div>

      <div
          v-for="phone in visiblePhones"
          :key="phone.model"
      >
        <ItemCard
            :amountOfPhones="amountOfPhones"
            :id="phone.id"
            :model="phone.model"
            :image="phone.image"
            :availableToSwitchPhones="availablePhones"
            :isShowMore="isShowMore"
            @switch="(current, selected) => switchPhone(current, selected)"
            @search="(value) => searchValue = value"
        />
      </div>
    </div>

    <div class="comparison_table">
      <div class="comparison_table_hr"/>
      <div
          v-for="group in getFilteredGroups()"
          class="comparison_table__line">
        <div class="comparison_table__line_characteristics">{{ group.name }}</div>
        <template v-for="value in getPropertyValues(group.name)">
          <img
              v-if="value.value === false"
              src="@/assets/icons/cross-icon.png"
              alt="no">
          <img
              v-if="value.value === true"
              class="comparison_table__line_values"
              src="@/assets/icons/check-icon.png"
              alt="yes">
          <span class="comparison_table__line_values" v-if="typeof value.value !== 'boolean'">{{ value.value }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PhoneCharacteristics, phones, Property} from "@/constants/data"
import ItemCard from "@/components/ItemCard.vue"
import UICheckbox from "@/components/UI/UICheckbox.vue"
import {ref, watch} from "vue"

const amountOfPhones = ref(3)
const visiblePhones = ref(getPhonesByAmount(amountOfPhones.value))
const isDiff = ref(false)
const isShowMore = ref(true)
const searchValue = ref('')
const availablePhones = ref(getAvailableToSwitchPhones())

watch(searchValue, (newValue) => {
  const filteredArray = getAvailableToSwitchPhones().filter((el) => el.model.toLowerCase().includes(newValue.toLowerCase()))
  if (filteredArray.length) {
    availablePhones.value = filteredArray
  }
})

function getAvailableToSwitchPhones(): PhoneCharacteristics[] {
  const visiblePhonesIds = visiblePhones.value.map(i => i.id)
  return phones.filter(i => !visiblePhonesIds.includes(i.id))
}

watch(amountOfPhones, (newAmountOfPhones) => {
  isShowMore.value = newAmountOfPhones < 6
})

function switchPhone(current, selected) {
  const selectedPhone = phones.find(i => i.id === selected)
  const indexOfCurrent = visiblePhones.value.findIndex(i => i.id === current)
  visiblePhones.value.splice(indexOfCurrent, 1, selectedPhone)
  availablePhones.value = getAvailableToSwitchPhones()
}

function getPhonesByAmount(amount): PhoneCharacteristics[] {
  return phones.filter((el, index) => {
    if (index <= amount - 1) {
      return el.properties
    }
  })
}

function getPropertiesByName(phonesByAmount, name): Property[] {
  return phonesByAmount.map(phone => phone.properties.find(i => i.name === name))
}

function getPropertyValues(propertyName): Property[] {
  return getPropertiesByName(visiblePhones.value, propertyName)
}


function getFilteredGroups(): Property[] {
  const properties = visiblePhones.value[0].properties

  if (!isDiff.value) {
    return properties
  }

  return properties.filter(prop => {
    const offerValues = getPropertiesByName(visiblePhones.value, prop.name)
        .map(array => array.value)

    const testValue = offerValues[0]

    const isDiff = offerValues.every(value => value === testValue)

    return !isDiff
  })
}

function changeAmount(event, count) {
  const buttons = document.querySelectorAll('.comparison_page-navigation__pagination__element')
  buttons.forEach(el => {
    el.classList.remove('underline')
  })

  if (Number(event.target.innerText) === count) {
    event.target.classList.add('underline')
  }

  amountOfPhones.value = count
  if (count > visiblePhones.value.length) {
    visiblePhones.value = [...visiblePhones.value, ...getAvailableToSwitchPhones().slice(0, count - visiblePhones.value.length)]
  } else {
    visiblePhones.value = visiblePhones.value.slice(0, count)
  }
  availablePhones.value = getAvailableToSwitchPhones()
}

window.addEventListener('resize', () => {
  const paginationElements = document.querySelectorAll('.comparison_page-navigation__pagination__element')
  if (window.innerWidth < 768) {
    visiblePhones.value = getPhonesByAmount(2)
    amountOfPhones.value = 2
  } else {
    paginationElements.forEach((el, i) => {
      if (i === 1) {
        el.classList.add('underline')
      } else {
        el.classList.remove('underline')
      }
    })
    visiblePhones.value = getPhonesByAmount(3)
    amountOfPhones.value = 3
  }
})
</script>

<style>
.underline {
  text-decoration: underline;
  text-underline-offset: .7rem;
  text-decoration-thickness: .2rem;
}

.comparison_page-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.comparison_page-navigation__header {
  font-size: var(--font-size-sm--header);
  color: var(--grey-light-1);
  font-weight: 600;
}

.comparison_page-navigation__pagination {
  display: none;
}

.comparison_phone-navigation {
  display: grid;
  grid-template-columns: repeat(calc(v-bind('amountOfPhones')), 1fr);
  padding: 3rem .5rem 2rem .5rem;
  position: relative;
}

.comparison_phone-navigation__show {
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 12.5rem;
  height: 15rem;
  position: absolute;
  left: 2rem;
  top: -13rem;
}

.comparison_page-navigation__pagination__element {
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--text-accent);
  font-size: 1.8rem;
  font-weight: 600;
}

.comparison_table {
  background-color: var(--color-background-table);
  padding: 0 3rem 4rem 3rem;
  position: relative;
}

.comparison_table_hr {
  background-color: var(--grey-light-4);
  height: .1rem;
  width: 100%;
  z-index: 1;
}

.comparison_table__line {
  display: grid;
  border-bottom: var(--grey-light-4) .1rem solid;
  grid-template-columns: repeat(calc(v-bind('amountOfPhones')), 1fr);
  padding: 3.5rem 0;
  position: relative;
}

.comparison_table__line_characteristics {
  text-transform: uppercase;
  font-size: var(--font-size-sm--base);
  color: var(--text-light-2);
  text-wrap: initial;
  position: absolute;
  top: 1rem;
}

.comparison_table__line_values {
  font-weight: 600;
  font-size: var(--font-size-sm--base);
}

@media (min-width: 500px) {
  .comparison_page-navigation {
    padding: 1rem 3rem;
  }

  .comparison_page-navigation__header {
    font-size: var(--font-size-md--header);
  }

  .comparison_phone-navigation {
    padding: 2rem 3rem 1rem 3rem;
  }

  .comparison_phone-navigation__show {
    left: 3rem;
  }

  .comparison_table {
    padding: 0 3rem 6rem 3rem;
  }

  .comparison_table__line {
    column-gap: 1.5rem;
  }

  .comparison_table__line_characteristics {
    font-size: var(--font-size-md--base);
  }

  .comparison_table__line_values {
    font-size: var(--font-size-md--base);
  }
}

@media (min-width: 768px) {
  .comparison_page-navigation__pagination {
    display: flex;
    color: var(--text-accent);
    font-weight: 600;
  }

  .comparison_page-navigation {
    padding: 1rem 6rem;
  }

  .comparison_page-navigation__header {
    font-size: var(--font-size-md--header);
  }

  .comparison_phone-navigation {
    padding: 2rem 6rem 1rem 6rem;
  }

  .comparison_phone-navigation__show {
    left: 6rem;
  }

  .comparison_table {
    padding: 0 6rem 6rem 6rem;
  }

  .comparison_table__line_characteristics {
    font-size: var(--font-size-md--base);
  }

  .comparison_table__line_values {
    font-size: var(--font-size-md--base);
  }
}

@media (min-width: 1200px) {
  .comparison_page-navigation {
    padding: 1rem 8rem;
  }

  .comparison_page-navigation__header {
    font-size: var(--font-size-header);
  }

  .comparison_phone-navigation {
    grid-template-columns: repeat(calc(v-bind('amountOfPhones') + 1), 1fr);
    padding: 3rem 8rem;
  }

  .comparison_phone-navigation__show {
    padding-top: 12.5rem;
    height: 15rem;
    position: static;
  }

  .comparison_table {
    padding: 0 8rem 9rem 8rem;
  }

  .comparison_table__line {
    column-gap: 1.5rem;
    grid-template-columns: repeat(calc(v-bind('amountOfPhones') + 1), 1fr);
  }

  .comparison_table__line_characteristics {
    max-width: 25rem;
    font-size: var(--font-size-base);
    position: static;
  }

  .comparison_table__line_values {
    font-size: var(--font-size-base);
  }
}

@media (min-width: 1500px) {
  .comparison_page-navigation {
    padding: 1rem 16.5rem;
  }

  .comparison_page-navigation__header {
    font-size: var(--font-size-header);
  }

  .comparison_phone-navigation {
    padding: 3rem 16.5rem 6.9rem 16.5rem;
  }

  .comparison_phone-navigation__show {
    padding-top: 12.5rem;
    height: 15rem;
    position: static;
  }

  .comparison_table {
    padding: 0 16.5rem 9rem 16.5rem;
  }
}
</style>