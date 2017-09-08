(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.activeRoom = null;

        /** addRoom
        * @function addRoom
        * @desc Creates a new chat room in the database
        * @param {Object} room
        */
        Room.addRoom = function(room) {
            rooms.$add(room).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
            });
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
