import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/label.service';
import { Label } from 'src/app/models/label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  labelList = [];
  id: any = 0;
  editLabel: boolean = false;
  selectedRowIndex = -1;

  constructor(private labelService: LabelService) { }

  ngOnInit() {
    this.refreshLabel();
  }

  
  refreshLabel() {
    this.labelService.getLabel().subscribe((res) => {
      this.extractLabel(res);
      console.log(res);
    });
  }

  extractLabel(res) {
    this.labelList = res;
  }

  selectIdLabel(label) {
    this.id = label.id;
  }

  onEdit(rowIndex) {
    this.editLabel = true;
    this.selectedRowIndex = rowIndex;
  }

  onCancel() {
    location.reload();
    this.editLabel = false;
    this.selectedRowIndex = -1;
  }

  onSave(label) {
    // this.labelService.updateLabel(label).toPromise().then(res => {
    // });
    this.editLabel = false;
    this.selectedRowIndex = -1;
  }


  onDelete(label){
    //de implementat
    if (confirm('Are you sure you want to permanently delete this Label?') == true) {
      this.labelService.deleteLabel(label.id).subscribe((res) => {
        this.refreshLabel()
        location.reload()
      })
    }
  }



}
