<template>
   <div>
      <div class="">
         <div class="row">
            <div class="col-lg-4 col-md-5 col-sm-12 left-sidebar d-md-block  d-none "></div>
            <div class="col-lg-8 col-md-7 col-12">
               <div class="login container text-center">
                  <div class="m-auto mt-5 tricolor-logo">
                     <h1 class="text-uppercase login-header">Login</h1>
                  </div>
                  <div class="container">
                     <validation-observer ref="observer" v-slot="{ handleSubmit }">
                        <b-form @submit.stop.prevent="handleSubmit(add)" >
                           <div class="row mt-5">
                              <div class="col-lg-8 col-md-8 col-12 right-sidebar login-form">
                                 <validation-provider
                                    name="Username"
                                    :rules="{ required: true, min: 3 }"
                                    v-slot="validationContext"
                                    >
                                    <b-form-group id="example-input-group-7" label="" label-for="example-input-7" class="login-input" style="    background: none;">
                                       <font-awesome-icon icon="user" class="user-icon d-inline" />
                                       <b-form-input
                                          id="example-input-7"
                                          name="example-input-7"
                                          v-model="form.username"
                                          :state="getValidationState(validationContext)"
                                          aria-describedby="input-7-live-feedback"
                                          class="border-0 input-username d-inline"
                                          placeholder="Enter username"
                                          style="background: none;"
                                          ></b-form-input>
                                       <b-form-invalid-feedback class="feedback" id="input-7-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                       <div class="input-user pt-3"></div>
                                    </b-form-group>
                                 </validation-provider>
                                 <validation-provider rules="required" name="Password" vid="password" style="    background: none;">
                                    <b-form-group 
                                       slot-scope="{ valid, errors }"
                                       label=""
                                       class="password-input" style="    background: none;">
                                       <font-awesome-icon icon="lock" class="user-icon d-inline" />
                                       <b-form-input
                                          type="password"
                                          v-model="form.password"
                                          :state="errors[0] ? false : (valid ? true : null)"
                                          class="border-0 input-username d-inline"
                                          placeholder="Enter password"
                                          style="    background: none;">
                                       </b-form-input>
                                       <b-form-invalid-feedback>
                                          {{ errors[0] }}
                                       </b-form-invalid-feedback>
                                    </b-form-group>
                                 </validation-provider>
                              </div>
                           </div>
                            <Button type="submit" variant="primary" class="text-uppercase login-btn next mb-5 login-btn w-auto mt-3" >Login</Button>
                        </b-form>
                     </validation-observer>
                      <transition name="fade" mode="out-in">
                     <router-view/>
                  </transition>
                  </div>
               </div>
            </div>
         </div>
      </div>
       
   </div>
</template>

<script>
   import axios from 'axios'
   import Button from './reusable/Button.vue';
   import UserName from './reusable/Username.vue';
   import Email from './reusable/Email.vue';
   import Password from './reusable/Password.vue';
   // import ConfirmPassword from './reusable/ConfirmPassword.vue';


export default {
    components:{
    Button,
    UserName,
    Email,
    Password,
   //  ConfirmPassword
},
    name:'Home',
    data(){
       return{
           form: {
             id: '',
             username: '',
             password: '', 
           },
           users: [],
           loading: false,
           updateSubmit: false
       }
     },
     mounted(){
       this.load();
     },
      methods: {

        getUserName(username){
            this.form.username = username;
        },
        getUserPassword(password){
            this.form.password = password;
        },
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
  
       onSubmit() {
         
         alert("Form submitted!");
       },
       load(){
     		axios({
     			method: 'get',
     			url: 'https://reqres.in/api/users?page=2'
     		})
     		.then(res => {
     			this.users = res.data 
     		})
     		.catch ((err) => {
     			this.alertError()
     		})
       },
       add(){
       	axios({
     		  method: 'post',
     		  url: 'https://reqres.in/api/users?page=2',
     		  data: this.form
   		  })
         .then(res => {
           this.load()
           this.form.username = ''
           this.form.password =''
                this.$router.push('/Users');

         })
       },
       alertSuccess(){
           this.$swal({
              type: 'success',
               title: 'Success',
               text: 'Data Saved Successfully',
           });
       },
       alertError(){
           this.$swal({
              type: 'error',
               title: 'Oops...',
               text: 'Something went wrong!',
           });
       },
     }
};
</script>
<style>
.login-header{
   color:#223D8F
}


/* left-sidebar */

.left-sidebar {
	min-height: 100vh;
	background-color: #223d8f;
	padding: 0!important;
}
/* right-sidebar */
.right-sidebar{
	width: 80%;
    margin: auto;
}
.tricolor-logo {
	width: 35%;
}
.right-sidebar div{
    font-size: 15px;
    color: #393939;
    font-weight: 400;
    font-family: "Montserrat";
}
.remember-checkbox{
        padding-left: 0.5rem;
    position: relative;
    top: -0.5rem;
}
.invalid-feedback{
   text-align: start;
    color: #DC3545!important;
}
.checkbox{
    width: 25px;
    height: 25px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 0.5px solid #393939;
}
.login-form {
	min-width: 15rem;
	min-height: 170px;
	border-radius: 20px;
	filter: drop-shadow(0 0 11px rgba(159, 159, 159, 0.33));
	background-color: #ffffff;
}
.forgot-pass{
    font-size: 16px;
    line-height: 30px;
    color: #223d8f;
    font-weight: 400;
    font-family: "Montserrat";
    position: relative;
    top: -0.2rem;
}
.user-icon {
	color: #9f9f9f;
	font-size: 24px;
}

.input-username {
	width: 95%!important;
	font-size: 18px!important;
	color: black!important;
	font-family: "Montserrat";
	padding-left: 2rem!important;
   height: 40px;
   text-align: start;
}
.input-username:focus{
   box-shadow: none!important
}
.login-input {
	padding: 2rem 2rem 0 2rem;
}

.password-input {
	padding: 0 2rem;
}

.input-user {
	/* border-bottom: 0.5px solid #808080; */
   border-bottom: 1px solid #9F9F9F;
}

.create-btn {
	/* width: -webkit-fill-available; */
	/* padding: 1rem 1rem!important; */
	color: #223D8F!important;
	background: #fff!important;
}

.create-btn:hover {
	background: #223D8F!important;
	color: #fff!important;
}

.login-btn {
	width: -webkit-fill-available;
}

.footer-logo {
	width: 5rem;
	text-align: center;
}
.copyright{
   margin-top: 7rem;
}
.copyright span {
	font-size: 16px;
	color: #9f9f9f;
	font-family: "Montserrat";
}

.copy {
	width: 17px;
	height: 17px;
}
.forgot-password{
   text-align: end;
}
@media only screen and (max-width:919px){
	.forgot-password{
      text-align: start!important;
   }
   .login-btn-div, .create-btn-div{
      padding: 0!important;
   }
   .tricolor-logo {
    width: 77%;
}
}
@media only screen and (max-width:767px){
	.circle-div{
		top: 100%!important;
    	left: 50%!important;
	}
}
@media only screen and (max-width:425px){
	.input-username{
     padding-left: 0.5rem!important;
   }

}

</style>