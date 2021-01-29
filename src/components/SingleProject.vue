<template>
  <div class="project" :class="{ complete : project.complete}">
      <div class="actions">
          <h3 @click="showDeatils">{{project.title}}</h3>
          <!-- icons from material icons -->
         <div class="icons">
             <router-link :to="{ name : 'EditProject' , params: {id: project.id }}">
                  <span class="material-icons">edit</span>
             </router-link>

            
            <span @click="deleteProject" class="material-icons">delete</span>
             <span @click="toggleComplete"  class="material-icons tick">done_outline</span>
         </div>

      </div>
  </div>
  <div class="details" :class="{show : show}">
      <p>{{project.details}}</p>
  </div>
</template>

<script>

export default {
    props :[ 'project'],
    data(){
        return {
            show : false,
            uri : 'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods:{
        showDeatils(){
            this.show = !this.show
        },
        deleteProject(){
            fetch(this.uri , {method: 'DELETE'})
            .then(()=> this.$emit('delete' , this.project.id))
            .catch(err => console.log(err))
        },
        toggleComplete(){
            fetch(this.uri , {
                method : 'PATCH',
                headers : { 'Content-type' : 'application/json'},
                body : JSON.stringify({ complete : !this.project.complete})
                })
                .then(()=> this.$emit('complete' , this.project.id))
                .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.project{
     padding: .5rem;
  margin-top: .3rem;
  background-color: rgb(255, 253, 253);
  border-radius: 5px;
  /* display: flex;
  justify-content: space-between; */
  border-left: crimson 4px solid;
}
.project:hover{
    
 box-shadow: 1px 1px #888888;
}
.actions{
    display: flex;
    justify-content: space-between;
}
.icons{
    display: flex;
    align-items: center;
}
.material-icons{
    font-size: 1.5rem;
    margin-left: .9rem;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover{
    color: #777;
}
h3{
    cursor: pointer;
}
.details{
    display: none;
}
.show{
    display: block ;
    padding: .5rem;
    background-color: rgb(255, 253, 253);
    border-radius: 5px;
    transition: ease-in-out; 
    box-shadow: 1px 1px #888888;
    

}
.complete{
    border-left: #00ce89 4px solid;
}
.complete .tick{
    color: #00ce89;
}
</style>