import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../Services/crud.service';
import { catchError, of, tap } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-logement',
  templateUrl: './add-logement.component.html',
  styleUrl: './add-logement.component.css',
})
export class AddLogementComponent implements OnInit {
  myForm: FormGroup;
  //pour Style
  //Logement: any;
  param: number | undefined;
  constructor(
    private fb: FormBuilder,
    private Ser: CrudService,
    private route: Router,
    private routeParam: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      photo: ['', [Validators.required, Validators.pattern('https?://.+')]],
      availableUnits: ['', [Validators.required]],
      wifi: [true],
      landery: [false],
    });
  }
  ngOnInit() {
    this.param = Number(this.routeParam.snapshot.paramMap.get('id'));
    if (this.param) {
      this.Ser.getLogementById(this.param).subscribe((obj) => {
        this.myForm = this.fb.group({
          name: [`${obj.name}`, Validators.required],
          city: [`${obj.city}`, [Validators.required]],
          state: [`${obj.state}`, [Validators.required]],
          photo: [
            `${obj.photo}`,
            [Validators.required, Validators.pattern('https?://.+')],
          ],
          availableUnits: [`${obj.availableUnits}`, [Validators.required]],
          wifi: [obj.wifi ? true : false],
          landery: [obj.wifi ? true : false],
        });
      });
    }
  }
  //this.myForm.get(ele)?.invalid => All Problem validation failed
  //this.myForm.get(ele)?.valid => Validation
  //this.myForm.get()?.hasError('required') => Pour Type de validation failed
  onSubmit() {
    if (this.myForm.valid && !this.param) {
      //generation de Id
      this.Ser.AddNewLogement(this.myForm.value).subscribe(
        () => this.route.navigate(['/']),
        (err) => console.log(err)
      );
    }
    if (this.myForm.valid && this.param) {
      // this.Ser.UpdateLogement(this.param, form.value).subscribe(
      //   () => {
      //     this.route.navigate(['/']);
      //     alert('Updated Success ✅');
      //   },
      //   (err) => console.error(err)
      // );
      const LogementUpdated=this.myForm.value;
      this.Ser.UpdateLogement(this.param,LogementUpdated).subscribe({
        next: (res: any) => {
          alert('Updated Succusfull ✅');
          this.route.navigate(['/']);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
