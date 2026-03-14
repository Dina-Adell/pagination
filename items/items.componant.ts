import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.componant.html',
  styleUrls: ['./items.componant.css'],
})
export class ItemsComponent {
  items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  currentPage = 1;
  itemsPerPage = 10;

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.items.slice(start, end);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
