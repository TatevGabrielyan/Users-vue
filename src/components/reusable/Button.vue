<template>
  <b-button class="button">
    <slot/>
  </b-button>
</template>

<script>
  export default {}
</script>

<style scoped>
  .button {
     color: #ffffff;
            font-weight: bold;
            font-family: "Montserrat";
            border: 1px solid #223d8f;
            font-size: 13px;
            padding: 1rem 3rem;
            border-radius: 15px;
            background-color: #223d8f;
            width: -webkit-fill-available;
  }
  .button:hover {
     background-color:#fff;
        color: #223d8f;
  }
  @media only screen and (max-width:768px) {
      .button{
                padding: 1rem 1rem;
      }
  }
</style>