(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, Username) {

        this.rooms = Room.all;

        this.getByRoomId = Message.getByRoomId;

        this.username = Username.update();

        this.activeRoom = Room.activeRoom;

        this.message = "";

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

        this.sendMessage = function(message) {

            var newMessage = {
                content: message,
                roomId: this.activeRoom.$id,
                sentAt: new Date().toLocaleTimeString(),
                username: Username.update()
            };
            Message.send(newMessage);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', 'Username', HomeCtrl]);
})();
