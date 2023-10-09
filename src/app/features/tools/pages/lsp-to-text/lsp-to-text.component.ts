import {Component, OnInit} from '@angular/core';
import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-lsp-to-text',
  templateUrl: './lsp-to-text.component.html',
  styleUrls: ['./lsp-to-text.component.css']
})
export class LspToTextComponent implements OnInit{
  video!: HTMLVideoElement;
  model: any;
  output: string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.webcam_init();
    this.loadModel();
  }

  webcam_init() {
    this.video = document.getElementById('vid') as HTMLVideoElement;
    console.log(this.video)
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true
      })
      .then((stream: any) => {
        this.video.srcObject = stream;
        this.video.onloadedmetadata = () => {
          this.video.play();
        }
      })
  }

  async loadModel() {
    this.model = await tf.loadLayersModel('/assets/model/model.json');
    console.log(this.model)
  }


}
