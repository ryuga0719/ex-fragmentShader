#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main(){
  float red = abs(sin(u_time*2.0));
  float green = abs(cos(u_time*2.0));
  float blue = abs(tan(u_time*2.0));
  gl_FragColor = vec4(red,green,blue,.7);
}