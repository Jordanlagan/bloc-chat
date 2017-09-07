(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;

        this.addRoom = function() {
            $uibModal.open({
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: '/templates/myModalContent.html',
              size: 'sm',
              controller: 'ModalCtrl as modal',
            });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
