Ext.define('products.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onEnter: function(){
        if(!this._checkPassword()){
            this._openMsg();
            return;
        }
        localStorage.setItem("authorized", true);
        this.getView().destroy();
        Ext.create({xtype: 'main'});
    },
    _checkPassword: function(){
        let data = this._getData();
        if(data.login.value !== 'admin'){
            return false;
        }
        if(data.password.value !== 'padmin'){
            return false;
        }
        return true;
    },
    _getData: function(){
        let model = this.getViewModel();
        return model.data;
    },
    _openMsg: function(){
        let data = this._getData();
        let config = data.message;

        Ext.Msg.alert({
            title: config.title, 
            message: config.text
        });
    }
});
