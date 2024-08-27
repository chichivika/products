Ext.define('products.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.login',

    data: {
        title: 'Authentification',
        login: {
            value:'',
            label: 'Login'
        },
        password: {
            value:'',
            label: 'Password'
        },
        message: {
            text: 'Incorrect login or password!',
            title: 'Error'
        }
    }
});