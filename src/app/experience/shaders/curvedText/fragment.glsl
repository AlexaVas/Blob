uniform vec3 color;
uniform sampler2D uImage;
uniform float uTextWidth;
uniform float uSpaceSize;
varying vec2 vUv;

void main() {
    // Define the number of times the texture should repeat
    vec2 repeatFactor = vec2(2.92, 1.0); // default 2.92

    // Define the size of the space after each repetition in UV units
    float spaceAfterRepeat = uSpaceSize / uTextWidth; // default 35.0 / 1482.0

    // Calculate the width of each segment including the space
    float totalSegmentWidth = (1.0 / repeatFactor.x) + spaceAfterRepeat;

    // Scale the UV coordinates by the repeat factor
    vec2 scaledUV = vUv * vec2(repeatFactor.x, repeatFactor.y);

    // Calculate the repeated segment position
    float repeatedX = mod(scaledUV.x, totalSegmentWidth);

   
    // Determine if the UV is within the texture or the space
    if (repeatedX < (1.0 / repeatFactor.x)) {
        // Calculate the texture UVs without the space
        vec2 textureUV = vec2(repeatedX * repeatFactor.x, scaledUV.y);

        // Correct UV coordinates to avoid sampling issues at the edges
     
        vec4 texColor = texture2D(uImage, textureUV);

        // Output the texture color
        gl_FragColor = vec4(texColor.rgb, texColor.a);
    } else {
        // Output a fully transparent color for the space section
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}