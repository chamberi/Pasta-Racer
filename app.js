'use strict';
var imgObj = null;
var imgObj2 = null;
var animate ;

function init(){
  imgObj = document.getElementById('myImage');
  imgObj2 = document.getElementById('toni');
  imgObj.style.position = 'relative';
  imgObj.style.left = '0px';
  imgObj2.style.position = 'relative';
  imgObj2.style.left = '-230px';
}

function moveRight(){
  imgObj.style.left = parseInt(imgObj.style.left) + 1 + 'px';
  imgObj2.style.left = parseInt(imgObj.style.left) + 1 + 'px';
  animate = setTimeout(moveRight,2); // call moveRight in 20msec
}

function stop(){
  clearTimeout(animate);
  imgObj.style.left = '0px';
  imgObj2.style.left = '0px';
}

window.onload = init;
