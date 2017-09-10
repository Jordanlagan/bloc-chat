(function() {
    function ActiveUsers($firebaseArray) {
        var ActiveUsers = {};

        var ref = firebase.database().ref().child("users");
        var activeUsers = $firebaseArray(ref);

        ActiveUsers.activeUsers = activeUsers;

        ActiveUsers.userKey = null;

        ActiveUsers.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        ActiveUsers.login = function(name) {
            activeUsers.$add(name).then(function(ref) {
                var id = ref.key;
                ActiveUsers.userKey = id;
                console.log("logged in user "+ name +" with id " + ActiveUsers.getUserKey());
            });
        };

        ActiveUsers.logout = function(name, key) {
            console.log(key);
            ref.child(key).remove();
            console.log('logged out '+name);
        };

        ActiveUsers.getUserKey = function() {
            return ActiveUsers.userKey;
        }

        return ActiveUsers;
    }

    angular
        .module('blocChat')
        .factory('ActiveUsers', ['$firebaseArray', ActiveUsers]);
})();
