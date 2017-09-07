(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.newRoom = {
            name: "New Room"
        };

        this.close = function() {
            $uibModalInstance.dismiss();
        }
        this.submit = function() {
            Room.addRoom(this.newRoom);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
