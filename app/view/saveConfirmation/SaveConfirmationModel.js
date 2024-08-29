Ext.define('products.view.saveConfirmation.SaveConfirmationModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.saveConfirmation',

    data: {
        title: 'Confirm changes',
        buttons: {
            no: 'No',
            yes: 'Yes'
        },
        //array of objects like {key: string, label: string, newValue: any, oldValue: any}
        changes: []
    },
    formulas: {
        message: get => {
            const changes = get('changes');
            if (!changes) return '';

            let message = '<ul>';
            changes.forEach(change => {
                message = message.concat(`<li>${change.label} changes from  <b>${change.oldValue}</b>  to <b> ${change.newValue}</b></li>`);
            });
            message = message.concat('</ul>');
            return message;
        }
    }
});