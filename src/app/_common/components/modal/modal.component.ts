import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomModalButtons, CustomModalFields } from './custom-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  CustomModalButtons = CustomModalButtons;

  @Input() title: string = "";
  @Input() message: string = "";
  @Input() btnOkText: string = "";
  @Input() btnSubmitText: string = "";
  @Input() btnCancelText: string = "";
  @Input() isShowHeadercloseButton: boolean = false;
  @Input() isDataForm: boolean = false;
  @Input() DataFields: CustomModalFields[] = [];
  @Input() buttons: CustomModalButtons = CustomModalButtons.Ok;


  @Output() onSubmit = new EventEmitter<{ DataFields: CustomModalFields[], closeModal: Function }>();

  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor( private formBuilder: FormBuilder) { }

  IsFrmCustomForm: boolean = false;
  frmCustomForm = this.formBuilder.group({});

  ngOnInit(): void {
    if (!this.isDataForm) {
      this.DataFields.forEach((ele, index) => {
        var frmControl = new FormControl();
        frmControl.setValue(ele.value);
        if (ele.validations != undefined) {
          ele.validations.forEach((validationEle, validationindex) => {
            if (validationEle === 'required') {
              frmControl.addValidators(Validators.required);
            }
            else if (validationEle === 'email') {
              frmControl.addValidators(Validators.pattern(this.emailPattern));
            }
          });
        }
        this.frmCustomForm.addControl(this.getFieldName(ele), frmControl);
      })
    }
  }

  getFieldName(modalField: CustomModalFields){
    return modalField.title.replace(' ','').replace('.','').replace('-','').replace(',','').replace('*','');
  }

  getFieldTitle(modalField: CustomModalFields){
    var _title = modalField.title;
    if(modalField.validations !== undefined && modalField.validations.indexOf('required') != -1){
      _title += "*";
    }

    return _title;
  }

  

}
