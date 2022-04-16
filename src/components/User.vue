<template>
  <div>
<div id="">
  
  <b-container class="mt-5 text-center user-page">
       <div v-for="(item) in items" :key="item.id">
      <div  class="index"> {{ item.id }}</div>
      <div class="mt-3 user-avatar"><img v-bind:src="item.avatar" v-bind:alt="item.avatar" /></div>
      <div class="mt-3">{{ item.first_name  }}</div>
      <div class="mt-3">{{ item.email }}</div>
    </div>
      </b-container>

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
        axios.get("https://reqres.in/api/users/2").then((response) => {
            this.items = response.data;
            console.log(this.items)
            $("#datatable").DataTable({
                 paging: true,
                  sort: true,
                  pageLength: 3,
                  searching: true,
            });
            
        });
    },

    data: function () {
        return {
      item: {id:"", avatar: "", first_name:'',last_name:'',  email:"", job:""},
      items: []
    }
    },
    components: { Button }
};
</script>
<style>
.user-page{
      background: #223D8F;
    color: white;
    width: fit-content;
    padding: 1rem 2rem;
    margin: auto;

}
.user-avatar img{
      border-radius: 50%;
}
.index{
  font-size: 20px;
}
</style>