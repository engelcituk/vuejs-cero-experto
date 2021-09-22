<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator/>

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle1">Subtitle 2</span>

    <q-separator/>

    <p class="text-body1">
      Ea enim pariatur ad irure quis proident in consectetur irure laboris aute ad ad sit. Culpa quis elit aute amet incididunt qui eu ipsum veniam. Ullamco adipisicing eiusmod cupidatat duis proident Lorem voluptate reprehenderit ut. Culpa proident in veniam esse aliquip in pariatur duis deserunt enim.
    </p>

    <p class="text-body2">
      Proident officia pariatur culpa consectetur dolor eiusmod id. Eu est laborum enim labore consectetur qui incididunt consequat. Consectetur sint veniam do non do quis enim tempor culpa reprehenderit velit laboris elit. Ea eu esse voluptate in esse eu exercitation non deserunt et ut sunt nulla. Cupidatat excepteur ea ipsum et. Veniam ad consequat elit fugiat aliquip do aliqua irure labore aute tempor velit nostrud nisi.
    </p>

    <q-separator/>

    <span class="text-weight-thin">Sint sint enim consequat cillum magna laboris occaecat laboris sunt.</span>
    <span class="text-weight-light">Ex incididunt dolor exercitation consequat quis mollit qui eiusmod proident.</span>
    <span class="text-weight-regular">Exercitation minim ipsum occaecat ullamco quis duis nostrud.</span>
    <span class="text-weight-medium">Consequat ad qui et duis.</span>
    <span class="text-weight-bold">Et qui minim sit ad ut non eiusmod duis Lorem.</span>
    <span class="text-weight-bolder">Excepteur sint est culpa proident aliquip Lorem eiusmod dolore aliqua quis fugiat.</span>

    <q-btn
      color="primary"
      label="Abrir menú lateral"
      class="q-mt-md"
      @click="toggleSideMenu"
    />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useUI from '../composables/useUI'
export default defineComponent({
  name: 'Typography',
  setup(){
    const { sideMenuOpen, toggleSideMenu } = useUI()
    return {
      sideMenuOpen,
      toggleSideMenu
    }
  }
})
</script>
