#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main(){
  // mouse座標の正規化
  vec2 normalizeMouse = u_mouse/u_resolution;
  gl_FragColor = vec4(normalizeMouse.x,.5,normalizeMouse.y,1.0);
}