<template>
  <div>
<div id="">
  <div class="container " style="overflow-x:auto;">
    <br>
    <div class="form-inline" action="#">
    <input type="text" id="form-name" v-model="user.first_name" placeholder="Name" class="form-control"> 
    <input type="text" v-model="user.job" placeholder="Job" class="form-control mt-3" v-on:keyup.enter="addUser">
    <Button @click="addUser" class="btn btn-dark w-auto mt-3">Create user</Button>
      </div>
    <br><br>
    <table class="table table-striped table-bordered table-md" >
      <thead class="thead-light">
          <th>Index</th>
          <th>Avatar</th>
          <th>Full name</th>
          <th>Email</th>
          <th>Job</th>
          <th>Actions</th>
      </thead>
    <tbody >
        <tr v-for="(user, index) in users" :key="user.id">
         <td>{{ user.id }}</td>
        <td>
          <input v-if="user.edit" type="text" v-model="user.avatar"  v-on:keyup.enter="user.edit = !user.edit">
          <span v-else><a href="/User"><img v-bind:src="user.avatar" v-bind:alt="user.avatar" /></a></span>
        </td>
        <td>
          <input v-if="!user.edit" type="text" v-model="user.first_name"  v-on:keyup.enter="user.edit = !user.edit">
          <a href="/User" class="text-decoration-none">{{ user.first_name +user.last_name }}</a>
        </td>

        <td>
           {{ user.email }}
        </td>
         <td>{{user.job}}</td>
        <td>
           <button @click="edit(user)" class="btn w-auto mr-2">Edit</button>
          <button @click="removeUser(index)" class="btn w-auto">Delete</button>
         </td>
      </tr>
    </tbody>
    </table>
  </div>
</div>
  </div>
</template>
 <script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
import Button from "./reusable/Button.vue";
export default {
     mounted() {
        axios.get("https://reqres.in/api/users/").then((response) => {
            this.users = response.data.data;
            $("#datatable").DataTable({
                 paging: true,
                  sort: true,
                  pageLength: 3,
                  searching: true,
                   scrollX: true,
             scrollY:        380,
              responsive: true,
                        
            });
            
        });
    },
  methods:{
    addUser(){
      this.users.push({id:this.user.id, avatar:this.user.avatar,job:this.user.job, first_name:this.user.first_name, email:this.user.email, edit: false});
      this.user = [];
    },

    removeUser(index){
       if (confirm('Are you sure you want to delete the user?')) {
             this.users.splice(index, 1)
       }
    }
  },
    data: function () {
        return {
      user: {id:"", avatar: "", first_name:'',last_name:'',  email:"", job:"", edit: false},
      users: []
    }
    },
    components: { Button }
};
</script>