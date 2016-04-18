(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.controller('CardsController', function($http) {
    this.newCard = { question: '' };

    var self = this;

    $http({
      method: 'GET',
      url: '/cards'
    }).then(function successCallback(response) {
      console.log('success', response.data);

      self.cards = response.data;
    }, function errorCallback(response) {

    });


   //    this.cards = [
   //      {question: "Batman got pretty _________ that I __________ his _________.  But hey, you win some, you lose some"},
   //      {question: "Look guy, <_________></_________> is the html element assigned to you. And by you, we mean your identity as a human.  Deal with it. "},
   //      {question: "The internet told me to __________. "},
   //      {question: " Of course ________ is a trap. You're telling me your gigantic squid eyes couldn't see that one coming?"},
   //      {question: "Well, _________ happened. Let's agree to take this to our deathbeads."},
   //      {question: "Obviously, ___________ was _________ pumped for that to happen"}
   //   ];


    this.addCard = function() {
      var self = this;

      $http({
        method: 'POST',
        url: '/cards',
        data: {
          question: self.newCard.question
        }
      }).then(function successCallback(response) {

        self.cards.push({
          question: self.newCard.question
        });

      }, function errorCallback(response) {
          console.log('error', response);
      });

      this.newCard.question = '';
    };

    return this;
  });
})();
