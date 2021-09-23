<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced/>

    <div class="row justify-center">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-md"
        >
          <q-input
            filled
            type="email"
            v-model="name"
            label="Correo electrónico"
            hint="Correo electronico"
            lazy-rules
            no-error-icon
            :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Contraseña"
            lazy-rules
            no-error-icon
            :rules="[
              val => val && val.length > 0 || 'Este campo es obligatorio'
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Repetir contraseña"
            lazy-rules
            no-error-icon
            :rules="[
              val => val && val.length > 0 || 'Este campo es obligatorio'
            ]"
          />

          <div class="row justify-end">
            <q-btn unelevated label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn unelevated label="Submit" type="submit" color="primary"/>
          </div>
        </q-form>
      
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
