(function() {
    function ModalCtrl(Room, $uibModal, $uibModalInstance) {

        this.open = function() {
            var modalInstance = $uibModal.open({
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: '/templates/myModalContent.html',
              size: 'sm'
            });
        }
        this.close = function() {
            $uibModalInstance.dismiss();
        }
        this.submit = function() {
            Room.addRoom('hi');
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', '$uibModalInstance', ModalCtrl]);
})();
