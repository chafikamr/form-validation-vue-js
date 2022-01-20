// create new componant 
Vue.component('my-form',{
  data : function (){
    return {
      userName  : null,
      subject: null ,
      maxChar : 12,
      message : null,
      fromErrors : null
    }
  },
  methods : {
    formValidate : function(event){
      this.fromErrors = []
      

      // check if username is empty 
      if(!this.userName){
        this.fromErrors.push('username can not be empty')
      }

      // check if username length is more than max chars
      if(this.userName && this.userName.length > this.maxChar  ){
        this.fromErrors.push('username can not be more than '+ this.maxChar +'')
      }

      // check if subject is empty 
      if(!this.subject){
        this.fromErrors.push('subject can not be empty')
      }

      // check if message is empty 
      if(!this.subject){
        this.fromErrors.push('message can not be empty')
      }

      // // check form validation

      event.preventDefault();
    }
  },
  template  : `
<form @submit="formValidate" action="hello.html" method="POST"  >
  <div class="alert" v-for="error in fromErrors">
  <div>{{error}}</div>
  
  </div>
  <div class="input-group">
    <label>Username</label>
    <input type="text" v-model="userName">
  </div>

  <div class="input-group">
    <label>Subject</label>
    <input type="text" v-model="subject">
  </div>

  <div class="input-group">
    <label>Message</label>
    <textarea v-model="message"></textarea>
  </div>

  <div class="input-group">
    <input type="submit" value="submit" >
  </div>
</form>`
})
var vm = new Vue({
    el : '#app',
    data : {
      returnedDta : null
    }
  ,
  methods : {
    getData : function (){
      return axios.get('https://api.github.com/users').then(response =>{
        this.returnedDta = response.data
      })
    }
  }
})
//@if(Session::get('locale') == 'en') selected @endif