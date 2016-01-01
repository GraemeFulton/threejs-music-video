/**
* Star Object
*/
function VideoCanvas(){

  this.AMOUNT = 100;

  this.container
  this.stats

  this.video
  this.image
  this.imageContext
  this.imageReflection
  this.imageReflectionContext
  this.imageReflectionGradient
  this.texture
  this.textureReflection;

  this.mesh;

  this.mouseX = 0;
  this.mouseY = 0;

  this.windowHalfX = window.innerWidth / 2;
  this.windowHalfY = window.innerHeight / 2;

  this.container = document.createElement( 'div' );

  this.info = document.createElement( 'div' );
  this.info.style.position = 'absolute';
  this.info.style.top = '10px';
  this.info.style.width = '100%';
  this.info.style.textAlign = 'center';
  this.info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - video demo. playing <a href="http://durian.blender.org/" target="_blank">sintel</a> trailer';

}

/**
* Starfield functions
*/
VideoCanvas.prototype = {

constructor:VideoCanvas,
addVideo:function(scene, camera){

  document.body.appendChild( this.container );
  this.container.appendChild( this.info );



},
animateStars:function(camera){
  // loop through each star

}

};
