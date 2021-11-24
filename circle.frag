#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circle(in vec2 _st,in float _radius){
  // 中心点へ平行移動
  vec2 dist=_st-vec2(.5);
  return 1.-smoothstep(_radius-(_radius*.01),
    _radius+(_radius*.01),
    dot(dist,dist)*4.);
}

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution.xy;
  vec3 color=vec3(circle(st,.5));
  gl_FragColor=vec4(color,1.);
}