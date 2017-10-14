(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, Username, ActiveUsers) {

        this.rooms = Room.all;

        this.getByRoomId = Message.getByRoomId;

        this.username = Username.update();

        this.activeRoom = Room.activeRoom;

        this.message = "";

        this.activeUsers = ActiveUsers.activeUsers;

        this.logout = ActiveUsers.logout;

        this.userKey = function() {
            return ActiveUsers.getUserKey();
        };

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

        this.changeUser = function() {
            $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/setUserNameModal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                backdrop: 'static',
                keyboard: false
            });

            ActiveUsers.logout(this.username, this.userKey());
        }

        this.sendMessage = function(message) {

            var newMessage = {
                content: message,
                roomId: this.activeRoom.$id,
                sentAt: new Date().toLocaleTimeString(),
                username: Username.update()
            };
            Message.send(newMessage);
            this.message = "";
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', 'Username', 'ActiveUsers', HomeCtrl]);
})();
