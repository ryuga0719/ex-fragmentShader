#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution.xy;
  vec3 color=vec3(0.);

  // bottom-left
  // 座標が0.1よりも大きかったら1(白)
  vec2 bottomLeft=step(vec2(.1),st);
  float pct=bottomLeft.x*bottomLeft.y;

  // top-right
  // 1引いた値が0.1よりも大きかったら1(白)
  vec2 topRight = step(vec2(0.1),1.0-st);
  pct *= topRight.x * topRight.y;

  color=vec3(pct);

  gl_FragColor=vec4(color,1.);
}
