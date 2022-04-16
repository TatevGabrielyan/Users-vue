<template>
   <div>
    <div>
    </div>
              <validation-provider rules="required|confirmed:password" name="Confirm Password" class="form-labels">
               <b-form-group 
                  slot-scope="{ valid, errors }"
                  label="Confirm Password"
                   class="pl-2 text-start">
                  <b-form-input
                     type="password"
                     v-model="form.confirmPassword"
                      v-on:change="getConfirmPassword(form.confirmPassword)"
                     :state="errors[0] ? false : (valid ? true : null)"
                     placeholder="Confirm the password"
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
             confirmPassword:'',
     
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
      getConfirmPassword:Function,
     
  }
};
</script>
