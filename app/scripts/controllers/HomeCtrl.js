(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, Username) {

        this.rooms = Room.all;

        this.getByRoomId = Message.getByRoomId;

        this.username = Username.username;

        this.activeRoom = Room.activeRoom;

        this.addRoom = function() {
            $uibModal.open({
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: '/templates/myModalContent.html',
              size: 'sm',
              controller: 'ModalCtrl as modal',
            });
        }

        this.changeRoom = function(room) {
            this.activeRoom = room;
            this.messages = Message.getByRoomId(this.activeRoom.$id)
        }

        this.changeUser = function(name) {
            this.username = name;
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', 'Username', HomeCtrl]);
})();
