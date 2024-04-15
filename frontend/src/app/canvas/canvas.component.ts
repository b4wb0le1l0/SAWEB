  import { Component, AfterViewInit, ViewChild, ElementRef, HostListener} from '@angular/core';
  import {MainComponent} from "../main/main.component";

  @Component({
    selector: 'app-canvas',
    template: `
      <canvas #canvas></canvas>
    `,
    styleUrls: ['./canvas.component.css']
  })
  export class CanvasComponent implements AfterViewInit {
    @ViewChild('canvas', { static: true }) canvasRef: ElementRef<HTMLCanvasElement> | undefined;
    constructor(private hitService: MainComponent) { }
    ngAfterViewInit() {
      // @ts-ignore
      const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
      // @ts-ignore
      const context: CanvasRenderingContext2D = canvas.getContext("2d");
      canvas.width = 300;
      canvas.height = 300;

      const width = canvas.width;
      const height = canvas.height;

      let color = "rgba(51,153,255, 0.3)";

      context.font = "0.8rem mono";
      context.fillText("y", width * .53, height * .025);
      context.fillText("x", width * .975, height * .47);
      context.fillText("R", width * .53, height * .152);
      context.fillText("R/2", width * .53, height * .33);
      context.fillText("-R/2", width * .53, height * .687);
      context.fillText("-R", width * .53, height * .868);
      context.fillText("R", width * .85, height * .47);
      context.fillText("R/2", width * .653, height * .47);
      context.fillText("-R/2", width * .281, height * .47);
      context.fillText("-R", width * .118, height * .47);

      context.beginPath();
      context.moveTo(width * .5,0);
      context.lineTo(width * .5, height);
      context.stroke();

      context.beginPath();
      context.moveTo(0, height * .5);
      context.lineTo(width, height * .5);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .5, 0);
      context.lineTo(width * .485, height * .04);
      context.stroke();

      context.beginPath();
      context.lineTo(width * .5, 0);
      context.lineTo(width * .515, height * .04);
      context.stroke();

      context.beginPath();
      context.moveTo(width, height * .5);
      context.lineTo(width * .96, height * .485);
      context.stroke();

      context.beginPath();
      context.moveTo(width, height * .5);
      context.lineTo(width * .96, height * .515);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .485, height * .14);
      context.lineTo(width * .515, height * .14);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .485, height * .32);
      context.lineTo(width * .515, height * .32);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .485, height * .68);
      context.lineTo(width * .515, height * .68);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .485, height * .86);
      context.lineTo(width * .515, height * .86);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .14,height * 0.485);
      context.lineTo(width * .14, height * .515);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .32,height * 0.485);
      context.lineTo(width * .32, height * .515);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .68,height * 0.485);
      context.lineTo(width * .68, height * .515);
      context.stroke();

      context.beginPath();
      context.moveTo(width * .86,height * 0.485);
      context.lineTo(width * .86, height * .515);
      context.stroke();

      context.beginPath();
      context.rect(width * 0.5, height * 0.5 - height * 0.18, width * 0.36, height * 0.18); // прямоугольник с левой нижней вершиной в точке A
      context.fillStyle = color;
      context.strokeStyle = "rgba(100, 150, 185, 0)";
      context.stroke();
      context.fill();

      context.beginPath();
      context.arc(width * .5, height * .5, width * .36, Math.PI, 3*Math.PI/2, false);
      context.fillStyle = color;
      context.stroke();
      context.fill();

      context.beginPath();
      context.moveTo(width * .5, height * .5);
      context.lineTo(width * .13, height * .5);
      context.lineTo(width * .5, height * .13);
      context.lineTo(width * .5, height * .5);
      context.fillStyle = color;
      context.stroke();
      context.fill();

      context.beginPath();
      context.moveTo(width * .5, height * .5);
      context.lineTo(width * .5, height * .68);
      context.lineTo(width * .86, height * .5);
      context.lineTo(width * .5, height * .5);
      context.fillStyle = color;
      context.stroke();
      context.fill();

      canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const x_number = Math.round((4 * ((x / 300) - (1 / 2))) / 0.36);
        const y_number = ((-4 * ((y / 300) - (1 / 2))) / 0.36).toFixed(2);

        if (x_number <= -2){
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-1').checked = true;
          }, 0);
          this.hitService.updateHit({x: -2, y: y_number, r: 4});
        } else if (x_number == -1.5) {
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-2').checked = true;
          }, 0);
          this.hitService.updateHit({x: -1.5, y: y_number, r: 4});
        } else if (x_number == -1){
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-3').checked = true;
          }, 0);
          this.hitService.updateHit({x: -1, y: y_number, r: 4});
        } else if (x_number == -0.5){
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-4').checked = true;
          }, 0);
          this.hitService.updateHit({x: -0.5, y: y_number, r: 4});
        } else if (x_number == 0){
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-5').checked = true;
          }, 0);
          this.hitService.updateHit({x: 0, y: y_number, r: 4});
        } else if (x_number == 0.5){
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-6').checked = true;
          }, 0);
          this.hitService.updateHit({x: 0.5, y: y_number, r: 4});
        } else if (x_number == 1){
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-7').checked = true;
          }, 0);
          this.hitService.updateHit({x: 1, y: y_number, r: 4});
        } else if (x_number == 1.5){
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-8').checked = true;
          }, 0);
          this.hitService.updateHit({x: 1.5, y: y_number, r: 4});
        } else if (x_number >= 2){
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('radio-9').checked = true;
          }, 0);
          this.hitService.updateHit({x: 2, y: y_number, r: 4});
        }
        setTimeout(() => {
          // @ts-ignore
          document.getElementById('radio-18').checked = true;
        }, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.ngAfterViewInit();
        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
      });
    }
  }
