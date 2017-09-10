(function() {
    function ModalCtrl(Room, $uibModalInstance, $uibModal, $cookies, ActiveUsers) {

        this.newRoom = {
            name: "New Room"
        };

        this.username = null;

        this.close = function() {
            $uibModalInstance.dismiss();
        }
        this.submit = function() {
            Room.addRoom(this.newRoom.name);
            $uibModalInstance.close();
        }
        this.createUser = function() {
            console.log('Username set to '+this.username);
            $cookies.put('blocChatCurrentUser', this.username);
            console.log('blocChatCurrentUser cookie successfully set to '+$cookies.get('blocChatCurrentUser'));
            ActiveUsers.login(this.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$uibModal', '$cookies', 'ActiveUsers', ModalCtrl]);
})();
