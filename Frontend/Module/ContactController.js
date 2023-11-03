app.controller("ContactController", function ($scope,contactService){

 

   $scope.GetUser = function()
   {
      contactService.getUser().then(function(response){

         if(response.data.Message == "Fetched")
         {
            console.log("Data fetched successfully");
         }
         else
         {
            alert("Data can not be fetched");
         }

         $scope.UserList = response.data.Response;
      });
   }

   $scope.GetUser();


   $scope.SaveUser = function()
   {
      const obj = {
         Name : $scope.Name,
         MobileNo : $scope.MobileNo,
         Address : $scope.Address,
         Subject : $scope.Subject,
         Message : $scope.Message
      }
      contactService.saveUser(obj).then(function(response){
         if(response.data.Message == "Saved")
         {
            alert("Data Saved Successfully");
            $scope.GetUser();
         }
         else
         {
            alert("Data not Saved");
         }
      });

   }

   $scope.DelUser = function(id)
   {
      contactService.delUser(id).then(function(response){
         if(response.data.Message == "Deleted")
         {
            alert("Deleted Successfully");
            $scope.GetUser();
         }
         else
         {
            alert("Deletion failed");
         }
      });
   }
})