(function() {
    function ActiveUsers($firebaseArray) {
        var ActiveUsers = {};

        var ref = firebase.database().ref().child("users");
        var activeUsers = $firebaseArray(ref);

        ActiveUsers.activeUsers = activeUsers;

        ActiveUsers.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        ActiveUsers.login = function(name) {
            activeUsers.$add(name).then(function(ref) {
                var id = ref.key;
                console.log("logged in user "+ name +" with id " + id);
            });
        };

        ActiveUsers.logout = function(name) {
            console.log(activeUsers);
            activeUsers.$remove('-Kth1jUErsbhZgZUs90f');

        };

        return ActiveUsers;
    }

    angular
        .module('blocChat')
        .factory('ActiveUsers', ['$firebaseArray', ActiveUsers]);
})();
