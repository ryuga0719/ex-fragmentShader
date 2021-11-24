#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution;
  float stepX = step(.5,st.x);
  float stepY = step(.5,st.y);
  vec3 color = vec3(.0);
  float cc = stepX*stepY;
  gl_FragColor = vec4(vec3(cc),1.0);
}