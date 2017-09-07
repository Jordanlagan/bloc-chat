(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;

        this.getByRoomId = Message.getByRoomId;

        this.activeRoom = {};

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
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
