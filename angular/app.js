var myApp = angular.module('surveyApp', ['ngRoute']); 


myApp.controller('mainController',['$http',function($http) {
var main = this;

this.surveys = [];
  console.log(this.surveys);
this.baseUrl = 'https://projectsapi.edwisor.com/api/surveys';


this.loadAllsurvey = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl+'/'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.surveys = response.data.data;
          console.log(main.surveys);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all blogs

  this.loadAllsurveys();


   


}]); // end controller



myApp.controller('surveysCreateController',['$http',function($http) {

  //create a context
  var main = this;


  this.pageHeading = 'Create a blog post';
  this.pageSubHeading = 'please fill all the data'
 

  this.baseUrl = 'https://projectsapi.edwisor.com/api/surveys';

  this.createPost = function(){

      var myData = {

          surveyTitle     : main.surveyTitle,
          surveySubtitle  : main.surveySubtitle,
          instructions    : main.instructions,
          


      }

      console.log(myData);
   
      $http({

        method: 'POST',
        data  : myData,
        url: main.baseUrl+'/create'
        
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("survey created successfully");
          window.location = 'post.html?surveyId='+response.data.data.surveyId;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller