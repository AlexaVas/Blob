 
 varying vec2 vUv;
 varying vec3 vPosition;

 uniform float uTime;
 uniform vec3 uPoint;

  void main() {
    vUv = uv;
    
  // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);


    //
// Calculate distance from uPoint to the vertex
    float distanceToPoint = distance(modelPosition.xyz, uPoint);

    // Inverse distance for falloff effect
    float falloff = exp(-distanceToPoint * distanceToPoint * 0.3); // Adjust 0.1 to control the falloff width


    //
     modelPosition.y += sin((modelPosition.z * 1.5)+ (uTime * 0.8))*0.3 * falloff ;
    modelPosition.y += sin((modelPosition.x * 1.3 )+ (uTime * 0.3) )*0.5 ;
    modelPosition.y += sin((modelPosition.y * 2.0) + (uTime * 0.5)) * 0.3 * falloff; // Added displacement

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    //

   
    // Final position
    gl_Position = projectedPosition;

    // Varyings
    vPosition = modelPosition.xyz;
  }

