#ifdef GL_ES
  precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb(in vec3 c){
  vec3 rgb=clamp(abs(mod(c.x*6.+vec3(0.,4.,2.),
  6.)-3.)-1.,
  0.,
  1.);
  rgb=rgb*rgb*(3.-2.*rgb);
  return c.z*mix(vec3(1.),rgb,c.y);
}

void main(){
  // 正規化
  vec2 st=gl_FragCoord.xy/u_resolution;
  // 仮でおいておく
  vec3 color=vec3(0.);

  // Use polar coordinates instead of cartesian
  vec2 toCenter=vec2(.5)-st;
  // 角度
  float angle=atan(toCenter.y,toCenter.x);
  // ラジアン
  float radius=length(toCenter)*2.;

  // 色代入
  color=hsb2rgb(vec3((angle/TWO_PI)+.5,radius,1.));

  gl_FragColor=vec4(color,1.);
}