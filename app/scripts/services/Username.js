(function() {
    function Username($cookies) {
        Username = {};

        Username.username = $cookies.get('blocChatCurrentUser');

        Username.update = function() {
            Username.username = $cookies.get('blocChatCurrentUser');
        }
        return Username;
    }

    angular
        .module('blocChat')
        .factory('Username', ['$cookies', Username]);
})();
