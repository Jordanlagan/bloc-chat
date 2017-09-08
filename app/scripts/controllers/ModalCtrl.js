(function() {
    function ModalCtrl(Room, $uibModalInstance, $uibModal, $cookies) {

        this.newRoom = {
            name: "New Room"
        };

        this.username = "Your Username";

        this.close = function() {
            $uibModalInstance.dismiss();
        }
        this.submit = function() {
            Room.addRoom(this.newRoom);
            $uibModalInstance.close();
        }
        this.createUser = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            var currentUser = $cookies.get('blocChatCurrentUser');
            if (!currentUser || currentUser === '') {
                $uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: '/templates/setUserNameModal.html',
                    size: 'sm',
                    controller: 'ModalCtrl as modal',
                });
            } else {
                console.log('Username set to '+this.username);
                $cookies.put('blocChatCurrentUser', this.username);
                console.log('blocChatCurrentUser cookie successfully set to '+$cookies.get('blocChatCurrentUser'));
                $uibModalInstance.close();
            }
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$uibModal', '$cookies', ModalCtrl]);
})();
