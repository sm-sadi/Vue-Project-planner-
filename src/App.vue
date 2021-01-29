<template>
<h1 class="color-change-3x ">Project Planner</h1>
  <div id="nav">
   
    <router-link to="/">Projects</router-link>
    <router-link to="/AddProject">Add new project</router-link>
      
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 38rem;
  margin: 0 auto;
  color: #2c3e50;
 
}
body{
   background-color: rgb(204, 203, 250);
}

#nav {
  padding: .5rem;
  margin-top: 3rem;
  background-color:rgb(204, 203, 250);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  /* background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%); */
  
}

#nav a {
  font-weight: bold;
  color: #767679;
  padding: 1rem;
  text-decoration: none;
  font-size: 1rem;
}
#nav a:hover {
  font-weight: bold;
 
  padding: 1rem;
  text-decoration: none;
  font-size: 1rem;
  
}

#nav a.router-link-exact-active {
  color: #2a2b2a;
  border-bottom: crimson 2px solid;
 
}

.color-change-3x {
  text-align: center;
  max-width: 60%;
  margin: 0 auto;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
	-webkit-animation: color-change-3x 5s linear infinite alternate both;
	        animation: color-change-3x 5s linear infinite alternate both;
}

@-webkit-keyframes color-change-3x {
  0% {
    background: #19dcea;
  }
  50% {
    background: #b22cff;
  }
  100% {
    background: #1bf05b;
  }
}
@keyframes color-change-3x {
  0% {
    background: #19dcea;
  }
  50% {
    background: #b22cff;
  }
  100% {
    background: #1bf05b;
  }
}





</style>
