<template>
   <div>
    <div>
    </div>
             <validation-provider rules="required" name="Password" vid="password"  class="form-labels">
               <b-form-group 
                  slot-scope="{ valid, errors }"
                  label="Password"
                   class="pl-2 text-start">
                  <b-form-input
                     type="password"
                     v-model="form.password"
                     :state="errors[0] ? false : (valid ? true : null)"
                     placeholder="Enter a password"
                     v-on:change="getPassword(form.password)"
                    >
                  </b-form-input>
                  <b-form-invalid-feedback>
                     {{ errors[0] }}
                  </b-form-invalid-feedback>
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
             password:'',
     
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
      getPassword:Function,
     
  }
};
</script>
<style>
 legend:after {
      content: "*";
      color: #fc0000;
      padding-left: 0.5rem;
   }
</style>