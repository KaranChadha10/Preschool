export class CustomModalOptions {
    title: string = '';
    message : string = '';
    btnOkText: string = '';
    btnCancelText: string = '';
    dialogSize: 'sm' | 'lg' | 'xl' | undefined = undefined;
    isShowHeadercloseButton: boolean = false;
    isKeyboardEvents: boolean = false;
    DataFields: CustomModalFields[] = [];
    okCallback: Function | null = null;
    CancelCallback: Function | null = null;
    DismissCallback: Function | null = null;
    SubmitCallback: Function | null = null;

    constructor(){
    }
}


export class CustomModalFields{
    title: string = '';
    type: 'text' | 'password' | 'checkbox' = 'text';
    value : string | boolean = '';
    validations: ('required' | 'email')[] | undefined = undefined;
}

export enum CustomModalButtons {
    SubmitCancel,
    Ok,
    OkCancel,
    YesNoCancel
}