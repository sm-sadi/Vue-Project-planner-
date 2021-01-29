<template>
   <form @submit.prevent="handelEdit">
    <label> Title : </label>
        <input v-model="title" required  type="text"/>
      <br>
      <label > Details :</label>
      <textarea v-model="details" ></textarea>
      <button> Update   </button>
    </form>
     
</template>



<script>
export default {
    props: ['id'],
data(){
    return{
        title: '',
        details: '',
        uri : 'http://localhost:3000/projects/' + this.id
    }
},
mounted(){
    fetch(this.uri)
 .then(res=> res.json())
 .then(data => {
     this.title = data.title
     this.details = data.details
 })
},
methods : {
    handelEdit(){
       console.log("handel edit "); 
        fetch(this.uri , {
                method : 'PATCH',
                headers : { 'Content-type' : 'application/json'},
                body : JSON.stringify({ title : this.title , details : this.details  })
                })
                .then(()=> {this.$router.push('/')})
                .catch(err => console.log(err))
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