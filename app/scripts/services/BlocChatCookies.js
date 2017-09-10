(function() {
    function BlocChatCookies($cookies, $uibModal, ActiveUsers) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/setUserNameModal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                backdrop: 'static',
                keyboard: false
            });
        }
        else {
            ActiveUsers.login(currentUser);
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', 'ActiveUsers', BlocChatCookies]);
})();
