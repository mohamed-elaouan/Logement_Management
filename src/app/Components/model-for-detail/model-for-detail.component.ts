import { Component, Inject, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CrudService } from '../../Services/crud.service';
import { HomeComponent } from '../../Pages/home/home.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-model-for-detail',
  templateUrl: './model-for-detail.component.html',
  styleUrl: './model-for-detail.component.css',
})
export class ModelForDetailComponent implements OnInit {
  id_Logement: number;
  Logment: any | undefined;
  constructor(
    public modalRef: MdbModalRef<ModelForDetailComponent>,
    private Sev: CrudService,
    private route: Router,
    @Inject(MdbModalRef) public id: any
  ) {}
  ngOnInit(): void {
    this.Sev.getLogementById(this.id).subscribe(
      (data) => (this.Logment = data)
    );
  }
  Edit(id: number) {
    this.modalRef.close();
    this.route.navigate(["/Edit/",id]);
  }
  Delete(id: number) {
    if (confirm('Are you sure you want to delete this logement ?')) {
      this.Sev.DeletebyId(id).subscribe(
        () => {
          console.log('Donne');
          this.modalRef.close();
          this.route.navigate(['/']);
          //hadi masad9ach
          //this.Sev.triggerReload();
          //
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
