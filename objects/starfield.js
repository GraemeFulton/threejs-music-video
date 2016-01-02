    /**
   * Star Object
   */
  function Star(){
	  this.geometry = new THREE.SphereGeometry(0.5, 32, 32);
	  this.material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
	  this.starShape = new THREE.Mesh(this.geometry, this.material);
  }

  /**
   * Starfield
   */

  function StarField(){
    this.stars = [];
  }

  /**
   * Starfield functions
   */
  StarField.prototype = {

    constructor:StarField,
    addStars:function(scene){
      // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
      for ( var z= -50; z < 0; z+=5 ) {

          // Make a sphere (exactly the same as before).
          var star = new Star();
          var sphere = star.starShape;

          // This time we give the sphere random x and y positions between -500 and 500
          sphere.position.x = this.randomBetween(-200,200);
          sphere.position.y = this.randomBetween(-10, 50);

          // Then set the z position to where it is in the loop (distance of camera)
          sphere.position.z = z;

          // scale it up a bit

          //add the sphere to the scene
          scene.add( sphere );

          //finally push it to the stars array
          this.stars.push(sphere);
        }
    },
    animateStars:function(camera){
      // loop through each star
      for(var i=0; i<this.stars.length; i++) {

        var star = this.stars[i];

        // move it forward by a 50th of its array position each time
        star.position.z +=  i;

       //if the camera has moved past the entire square, move the square
        if((star.position.z - 100)>camera.position.z){

            star.position.z-=(800*2);
          }


      }
    },
    /**
     * randomBetween
     * @params: min, max
     * @returns: random number between min and max
     */
    randomBetween:function(min, max) {
      if (min < 0) {
          return min + Math.random() * (Math.abs(min)+max);
      }else {
          return min + Math.random() * max;
      }
    }

  };
