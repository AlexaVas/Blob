uniform vec3 color;
uniform sampler2D uImage;
uniform float uTextWidth;
uniform float uSpaceSize;
uniform vec3 uColorOne;
uniform vec3 uColorTwo;
uniform float uTransparency;

varying vec2 vUv;

void main() {

     // Calculate a mix factor with smooth transition and minimum clamp
    float mixFactor = smoothstep(0.0, 1.0, vUv.y);
    mixFactor = max(0.1, mixFactor); // Adjust minimum clamp to prevent excessive brightness
    
    // Mix the colors based on the adjusted factor
    vec3 mixedColor = mix(uColorTwo, uColorOne, mixFactor);

    // Set the final fragment color
//    vec3 mixedColor = mix(uColorTwo, uColorOne,smoothstep(0.0, 1.0, vUv.y));

        gl_FragColor = vec4(mixedColor,uTransparency);

    //#include <tonemapping_fragment>
    #include <colorspace_fragment>
}