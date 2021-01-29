<template>
  
    
    <form @submit.prevent="handelsubmit">
    <label> Title : </label>
        <input v-model="title" required  type="text"/>
      <br>
      <label > Details :</label>
      <textarea v-model="details" ></textarea>
      <button> Add Project  </button>
    </form>
     
</template>

<script>
export default {
  data(){
    return{
      title :'',
      details : ''
    }
  },
  methods :{
    handelsubmit(){
      let project ={
        title : this.title,
        details : this.details,
        complete : false
      }
    fetch('http://localhost:3000/projects' , {
      method : 'POST',
      headers : { 'Content-type' : 'application/json'},
      body : JSON.stringify(project)
    }).then(()=> {
      this.$router.push('/')
    }).catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>

form {
  margin-top: 10px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  label {
    display: block;
    color: rgb(136, 136, 136);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
  }
  input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
  }
  form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
  }
</style>
