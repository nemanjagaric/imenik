<template>
  <div id="app-container">

    <app-body></app-body>

  </div>
</template>

<script>


import Body from "./components/Body";

export default {
  name: 'App',
  components: {
  "app-body": Body
}
};


</script>



<style>

        body{
            font-family: 'Exo 2', sans-serif;
            color: rgb(41, 66, 92);
            background-color: teal;
        }
        #app-container {

            margin: 0 auto;
            width: 500px;
            height: 100%;
            background-color: rgba(127, 255, 212, 0.342);
            padding: 15px;
            box-shadow: 5px 5px rgba(0, 0, 0, 0.219);
            border-radius: 10px;
        }
        @media (max-width:575px){
          #app-container {
            width: 300px;
            height: 100%;
          }
        }

</style>
