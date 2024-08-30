Ext.define('products.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    //event listener of login form submit
    onEnter: function () {
        if (!this._checkPassword()) {
            this._openMsg();
            return;
        }
        localStorage.setItem("authorized", true);
        this.getView().destroy();
        Ext.create({ xtype: 'main' });
    },
    //checking login and password
    _checkPassword: function () {
        let data = this._getData();
        if (data.login.value !== 'admin') {
            return false;
        }
        if (data.password.value !== 'padmin') {
            return false;
        }
        return true;
    },
    //get view model data
    _getData: function () {
        let model = this.getViewModel();
        return model.data;
    },
    //inform that login or password incorrect
    _openMsg: function () {
        let data = this._getData();
        let config = data.message;

        Ext.Msg.alert({
            title: config.title,
            message: config.text
        });
    }
});
