import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.html',
  styleUrl: './marquee.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeComponent {
  text = input.required<string[]>();
  direction = input<'left' | 'right'>('left');
  speed = input<number>(40);
}
