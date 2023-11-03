app.service("contactService", function($http){

   this.getUser = function()
   {
      return $http.get("http://192.168.92.151:9090/api/getuser");
   }

   this.saveUser = function (obj)
   {
      return $http.post("http://192.168.92.151:9090/api/saveuser", JSON.stringify(obj));
   }

   this.delUser = function(id)
   {
      return $http.get("http://192.168.92.151:9090/api/deluser/"+id)
   }
})