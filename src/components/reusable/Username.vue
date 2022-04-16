<template>
   <div>
    <div>
    </div>
  <validation-provider
               name="Username"
               :rules="{ required: true, min: 3 }"
               v-slot="validationContext"
               >
               <b-form-group id="example-input-group-1" label="Username" label-for="example-input-1" class="form-labels pl-2 text-start">
                  <b-form-input
                     id="example-input-1"
                     name="example-input-1"
                     v-model="form.username"
                     :state="getValidationState(validationContext)"
                     aria-describedby="input-1-live-feedback"
                     v-on:change="getUser(form.username)"
                     placeholder="Enter your username"
                     ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
               </b-form-group>
            </validation-provider>
   </div>
</template>

<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             username: '',
     
           },
           users: [],
           loading: false,
           updateSubmit: false,
      }
  },
   mounted(){
       this.load();
     },
     methods: {
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
     },
  props:{
      getUser:Function,
     
  }
};
</script>
