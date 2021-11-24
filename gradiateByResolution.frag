#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
  vec2 normalizeCoord = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(normalizeCoord.x,normalizeCoord.y,1.,1.0);
}