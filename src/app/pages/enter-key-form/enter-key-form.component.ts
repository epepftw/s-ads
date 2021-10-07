import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignKeyService } from 'src/app/core/services/assignKey/assign-key.service';

@Component({
  selector: 'app-enter-key-form',
  templateUrl: './enter-key-form.component.html',
  styleUrls: ['./enter-key-form.component.scss']
})
export class EnterKeyFormComponent implements OnInit {
  myControl = new FormControl();
  register_key! : FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private _assignKey: AssignKeyService
  ) { }

  ngOnInit(): void {
    this.getKeyForm();
  }

    getKeyForm() {
		this.register_key = this._formBuilder.group(
			{
				key: ['', Validators.required]
			}
		)

    this.register_key.valueChanges.subscribe(
      data => {
        console.log('WhaaaT',data)
      }
    )
	}



  onFormSubmit() {
    console.log('hattdooggogogoog',this.register_key.get('key')?.value)
 
    const payload = {
      key: this.register_key.get('key')?.value
    }

    //subscribe
    this._assignKey.assign_key(payload.key).subscribe(
      (data: any) => {
        console.log('hallow',data)
      }
    )
  }

}
