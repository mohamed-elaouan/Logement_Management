import { Component, OnDestroy, OnInit } from '@angular/core';
import { CrudService } from '../../Services/crud.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModelForDetailComponent } from '../../Components/model-for-detail/model-for-detail.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  modalRef: MdbModalRef<ModelForDetailComponent> | null = null;
  constructor(
    private modalService: MdbModalService,
    private Service: CrudService
  ) {
    this.reloadSubscription = this.Service.reload$.subscribe(() => {
      this.reloadComponent();
    });
  }
  // for reload
  private reloadSubscription: Subscription;
  ngOnDestroy(): void {
    this.reloadSubscription.unsubscribe();
  }
  private reloadComponent(): void {
    // Add logic to reload or refresh the content of Component 2
    console.log('Component 2 reloaded!');
  }
  public reload(){
    window.location.reload();
  }
  openModal(id: number) {
    this.modalRef = this.modalService.open(ModelForDetailComponent, {
      modalClass: 'modal-lg',
    });
    this.modalRef.component.id = id;
  }
  logements: any;
  public ngOnInit(): void {
    this.Service.getAllLogements().subscribe((log) => (this.logements = log));
  }
}
